import LocationMap from "../ui/LocationMap";
import { SITE_CONFIG } from "@/lib/seo";

export default function LocationCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr,0.9fr] gap-10 items-center">
        <LocationMap title="Como llegar a Infiltra Clinica" className="min-h-[320px]" />
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-bold" style={{ color: '#344D63' }}>
            Estamos listos para atenderte en persona
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Agenda tu visita para recibir una evaluacion dirigida y, si es necesario, programar tu procedimiento infiltrativo en la misma sede.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              className="inline-flex w-full justify-center px-5 py-3 rounded-2xl text-white font-medium"
              style={{ backgroundColor: '#106D78' }}
            >
              Enviar mensaje por WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/B1ShuD3xfqcNpAhd7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center px-5 py-3 rounded-2xl border border-slate-300 font-medium hover:bg-slate-50"
            >
              Abrir mapa en Google Maps
            </a>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            Horario habitual: Lunes a Viernes 9:00-19:00 hrs. Sabados bajo cita previa.
          </div>
        </div>
      </div>
    </section>
  );
}
