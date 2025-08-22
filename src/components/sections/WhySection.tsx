import Badge from "../ui/Badge";
import MonoIcon from "../ui/MonoIcon";

export default function WhySection(){
  return (
    <section id="por-que" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>¿Por qué Infiltra Clínica?</h2>
          <p className="mt-3 text-slate-600 max-w-prose">Somos una clínica <strong>hiperespecializada</strong> en infiltraciones intraarticulares con <strong>guía por imagen</strong>. Nuestro enfoque único significa experiencia concentrada, precisión y seguridad en cada procedimiento.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-3"><Badge>01</Badge> Precisión guiada por ultrasonido o fluoroscopia.</li>
            <li className="flex gap-3"><Badge>02</Badge> Alternativa intermedia antes de valorar cirugía.</li>
            <li className="flex gap-3"><Badge>03</Badge> Educación clara y seguimiento post‑procedimiento.</li>
            <li className="flex gap-3"><Badge>04</Badge> Coordinación con tu médico y fisioterapeuta.</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#tratamientos" className="px-4 py-2 rounded-2xl text-white" style={{ backgroundColor: '#106D78' }}>Ver tratamientos</a>
            <a href="#faq" className="px-4 py-2 rounded-2xl border" style={{ borderColor: '#CBD5E1' }}>Resuelve tus dudas</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {title:'Precisión', desc:'Guía por imagen en la gran mayoría de los procedimientos.'},
            {title:'Seguridad', desc:'Protocolos estériles y control del dolor.'},
            {title:'Rapidez', desc:'Agenda ágil y tiempos de procedimiento cortos.'},
            {title:'Resultados', desc:'Alivio de precisión; resultados pueden variar.'},
          ].map((c)=> (
            <div key={c.title} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#E6F7FA' }}>
                <MonoIcon size={20} />
              </div>
              <div className="font-semibold" style={{ color: '#344D63' }}>{c.title}</div>
              <div className="text-sm text-slate-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
