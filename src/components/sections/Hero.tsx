'use client';

import { FormEvent, useState } from "react";
import MonoIcon from "../ui/MonoIcon";
import Check from "../ui/Check";
import { SITE_CONFIG } from "@/lib/seo";

type FormStatus = "idle" | "loading" | "success" | "error";

const successMessage = "Gracias, en breve te contactamos.";
const fallbackErrorMessage = "No pudimos enviar tu solicitud. Intenta de nuevo o usa WhatsApp.";

export default function Hero() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nombre = String(formData.get("nombre") ?? "").trim();
    const telefono = String(formData.get("telefono") ?? "").trim();
    const motivo = String(formData.get("motivo") ?? "").trim();

    if (!nombre) {
      setStatus("error");
      setMessage("Ingresa tu nombre completo.");
      return;
    }

    const phoneDigits = telefono.replace(/[^0-9]/g, "");
    if (phoneDigits.length < 10) {
      setStatus("error");
      setMessage("Revisa el numero de telefono (10 digitos).");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, telefono, motivo }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setStatus("error");
        setMessage(data.message || fallbackErrorMessage);
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(data.message || successMessage);
    } catch (error) {
      console.error("contact form failed", error);
      setStatus("error");
      setMessage(fallbackErrorMessage);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, #F8F5F2 0%, #E7F7F9 40%, #E6F7FA 60%, #F8F5F2 100%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium"
            style={{ backgroundColor: "#E6F7FA", color: "#106D78" }}
          >
            <span>Cl&iacute;nica hiperespecializada</span>
            <span className="opacity-50" aria-hidden="true">&bull;</span>
            <span>M&aacute;xima precisi&oacute;n</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "#344D63" }}>
            Infiltraciones de precisi&oacute;n
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-xl">
            Un solo enfoque. <strong style={{ color: "#106D78" }}>Precisi&oacute;n m&eacute;dica especializada</strong> para aliviar el dolor articular y posponer la cirug&iacute;a.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="flex items-start gap-2"><Check /> Procedimiento exacto y seguro, guiado por imagen.</li>
            <li className="flex items-start gap-2"><Check /> Alternativa intermedia entre f&aacute;rmacos y cirug&iacute;a.</li>
            <li className="flex items-start gap-2"><Check /> Explicaci&oacute;n clara, consentimiento informado y seguimiento.</li>
            <li className="flex items-start gap-2"><Check /> Agenda r&aacute;pida y reportes para tu m&eacute;dico tratante.</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              className="px-5 py-3 rounded-2xl text-white font-medium"
              style={{ backgroundColor: "#106D78" }}
            >
              Agenda tu cita
            </a>
            <a
              href="#tratamientos"
              className="px-5 py-3 rounded-2xl font-medium border"
              style={{ borderColor: "#CBD5E1" }}
            >
              Ver tratamientos
            </a>
            <div className="text-xs text-slate-500">
              Resultados pueden variar. Esta informaci&oacute;n no sustituye consulta m&eacute;dica.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 shadow-sm p-8 bg-white">
            <div className="flex items-center gap-4">
              <MonoIcon size={56} ariaLabel="Isotipo de Infiltra Cl&iacute;nica" />
              <div>
                <div className="text-xl font-semibold" style={{ color: "#344D63" }}>Infiltra Cl&iacute;nica</div>
                <div className="text-sm text-slate-500">M&eacute;rida &middot; Atenci&oacute;n con cita</div>
              </div>
            </div>
            <hr className="my-6 border-slate-200" />
            <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit} noValidate>
              <label className="text-sm">
                Nombre
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  name="nombre"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                  disabled={status === "loading"}
                />
              </label>
              <label className="text-sm">
                Tel&eacute;fono
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  name="telefono"
                  placeholder="10 d&iacute;gitos"
                  inputMode="tel"
                  pattern="[0-9]{10,15}"
                  required
                  disabled={status === "loading"}
                />
              </label>
              <label className="text-sm">
                Motivo de consulta
                <select
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  name="motivo"
                  defaultValue="Rodilla"
                  disabled={status === "loading"}
                >
                  <option value="Rodilla">Dolor de rodilla</option>
                  <option value="Hombro">Dolor de hombro</option>
                  <option value="Cadera">Dolor de cadera</option>
                  <option value="Columna">Columna / facetarias</option>
                  <option value="Otras">Otras articulaciones</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 px-4 py-2 rounded-2xl text-white font-medium"
                style={{ backgroundColor: "#106D78" }}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Solicitar llamada"}
              </button>
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="text-center px-4 py-2 rounded-2xl font-medium border"
                style={{ borderColor: "#CBD5E1" }}
              >
                Prefiero WhatsApp
              </a>
              <div
                className="text-sm"
                aria-live="polite"
                role={status === "error" ? "alert" : "status"}
                style={{ color: status === "error" ? "#b91c1c" : "#106D78" }}
              >
                {message}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

