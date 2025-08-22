import Check from "../ui/Check";
import MonoIcon from "../ui/MonoIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="h-full w-full" style={{
          background: 'linear-gradient(135deg, #F8F5F2 0%, #E7F7F9 40%, #E6F7FA 60%, #F8F5F2 100%)'
        }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium" style={{ backgroundColor: '#E6F7FA', color: '#106D78' }}>
            <span>Clínica hiperespecializada</span>
            <span className="opacity-50">•</span>
            <span>Guía por imagen</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#344D63' }}>
            Infiltraciones guiadas por imagen
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-xl">
            Un solo enfoque. <strong style={{ color: '#106D78' }}>Precisión guiada por imagen</strong> para aliviar el dolor articular y <span className="whitespace-nowrap">posponer la cirugía.</span>
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="flex items-start gap-2"><Check /> Procedimiento preciso y seguro (sin adivinar).</li>
            <li className="flex items-start gap-2"><Check /> Alternativa intermedia entre fármacos y cirugía.</li>
            <li className="flex items-start gap-2"><Check /> Explicación clara, consentimiento informado y seguimiento.</li>
            <li className="flex items-start gap-2"><Check /> Agenda rápida y reportes para tu médico tratante.</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="https://wa.me/529991234567" className="px-5 py-3 rounded-2xl text-white font-medium" style={{ backgroundColor: '#106D78' }}>Agenda tu cita</a>
            <a href="#tratamientos" className="px-5 py-3 rounded-2xl font-medium border" style={{ borderColor: '#CBD5E1' }}>Ver tratamientos</a>
            <div className="text-xs text-slate-500">Resultados pueden variar. Esta información no sustituye consulta médica.</div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 shadow-sm p-8 bg-white">
            <div className="flex items-center gap-4">
              <MonoIcon size={56} />
              <div>
                <div className="text-xl font-semibold" style={{ color: '#344D63' }}>Infiltra Clínica</div>
                <div className="text-sm text-slate-500">Mérida · Atención con cita</div>
              </div>
            </div>
            <hr className="my-6 border-slate-200" />
            <form className="grid grid-cols-1 gap-3" onSubmit={(e)=>e.preventDefault()}>
              <label className="text-sm">Nombre<input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tu nombre" /></label>
              <label className="text-sm">Teléfono<input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="10 dígitos" /></label>
              <label className="text-sm">Motivo de consulta<select className="mt-1 w-full rounded-xl border px-3 py-2">
                <option>Dolor de rodilla</option>
                <option>Dolor de hombro</option>
                <option>Dolor de cadera</option>
                <option>Columna/facetarias</option>
                <option>Otras articulaciones</option>
              </select></label>
              <button type="submit" className="mt-2 px-4 py-2 rounded-2xl text-white font-medium" style={{ backgroundColor: '#106D78' }}>Solicitar llamada</button>
              <a href="https://wa.me/529991234567" className="text-center px-4 py-2 rounded-2xl font-medium border" style={{ borderColor: '#CBD5E1' }}>Prefiero WhatsApp</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
