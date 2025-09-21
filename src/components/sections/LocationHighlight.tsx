import LocationMap from "../ui/LocationMap";
import Check from "../ui/Check";
import { SITE_CONFIG } from "@/lib/seo";

const accessPoints = [
  "Ubicada en Col. Montecristo, zona norte de Merida",
  "Estacionamiento propio y acceso para silla de ruedas",
  "Referencia rapida: a 3 min de Plaza City Center",
];

export default function LocationHighlight() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr,1fr] gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Visitanos</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>
            Evaluaciones presenciales en Infiltra Clinica
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-xl">
            Agenda una cita para valorarte en nuestra sede en Plenum Work Center. Contamos con sala de procedimientos, apoyo de imagen y seguimiento cercano posterior a cada infiltracion.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {accessPoints.map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              className="px-5 py-3 rounded-2xl text-white font-medium"
              style={{ backgroundColor: '#106D78' }}
            >
              Agendar valoracion
            </a>
            <a
              href="tel:+529993537967"
              className="px-5 py-3 rounded-2xl font-medium border border-slate-300"
            >
              Llamar a la clinica
            </a>
          </div>
        </div>
        <LocationMap title="Mapa de Infiltra Clinica" className="h-full" />
      </div>
    </section>
  );
}
