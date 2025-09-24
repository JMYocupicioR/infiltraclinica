import MonoIcon from "../ui/MonoIcon";
import Check from "../ui/Check";
import { SITE_CONFIG } from "@/lib/seo";

export default function Hero() {

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
            <div className="space-y-4">
              <p className="text-sm text-slate-600 text-center">
                ¿Tienes dolor articular? Agenda tu evaluaci&oacute;n especializada
              </p>
              <div className="space-y-3">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  className="w-full flex justify-center px-4 py-3 rounded-2xl text-white font-medium"
                  style={{ backgroundColor: "#106D78" }}
                >
                  Agenda por WhatsApp
                </a>
                <a
                  href="#tratamientos"
                  className="w-full flex justify-center px-4 py-2 rounded-2xl font-medium border"
                  style={{ borderColor: "#CBD5E1" }}
                >
                  Ver tratamientos disponibles
                </a>
              </div>
              <div className="text-xs text-slate-500 text-center">
                Horario: Lunes a viernes 9:00-19:00 hrs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

