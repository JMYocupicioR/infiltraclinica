import type { NextApiRequest, NextApiResponse } from "next";

interface ApiResponse {
  success: boolean;
  message: string;
}

const MIN_PHONE_LENGTH = 10;
const webhookUrl = process.env.LEAD_WEBHOOK_URL;

function sanitizeName(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/\s+/g, " ").trim();
}

function sanitizePhone(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/[^0-9+]/g, "");
}

function sanitizeReason(value: unknown): string {
  if (typeof value !== "string") {
    return "General";
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "General";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Metodo no permitido." });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};

  const name = sanitizeName(body.nombre);
  const phone = sanitizePhone(body.telefono);
  const reason = sanitizeReason(body.motivo);

  if (!name) {
    return res.status(400).json({ success: false, message: "Ingresa un nombre valido." });
  }

  if (!phone || phone.replace(/[^0-9]/g, "").length < MIN_PHONE_LENGTH) {
    return res.status(400).json({ success: false, message: "Ingresa un telefono valido." });
  }

  const payload = {
    name,
    phone,
    reason,
    source: "hero-form",
    submittedAt: new Date().toISOString(),
  };

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Lead webhook failed", response.status, text);
        return res.status(502).json({
          success: false,
          message: "No pudimos completar el registro. Intenta por WhatsApp.",
        });
      }
    } catch (error) {
      console.error("Lead webhook threw", error);
      return res.status(502).json({
        success: false,
        message: "No pudimos completar el registro. Intenta por WhatsApp.",
      });
    }
  } else {
    console.warn("Missing LEAD_WEBHOOK_URL environment variable. Lead payload:", payload);
  }

  return res.status(200).json({
    success: true,
    message: "Gracias, en breve te contactamos.",
  });
}
