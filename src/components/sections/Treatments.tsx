import MonoIcon from "../ui/MonoIcon";

export default function Treatments(){
  const cards = [
    {name:'Rodilla (OA, menisco)', href:'#contacto'},
    {name:'Hombro (manguito, bursitis)', href:'#contacto'},
    {name:'Cadera (OA, bursitis trocantérica)', href:'#contacto'},
    {name:'Columna (facetarias, sacroilíacas)', href:'#contacto'},
    {name:'PRP / Ácido hialurónico', href:'#contacto'},
    {name:'Otras articulaciones', href:'#contacto'},
  ];
  return (
    <section id="tratamientos" className="bg-gradient-to-b from-white to-[#F8F5F2]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Tratamientos</h2>
          <a href="#contacto" className="hidden md:inline-block text-sm px-4 py-2 rounded-2xl text-white" style={{ backgroundColor: '#106D78' }}>Agenda evaluación</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c)=> (
            <a key={c.name} href={c.href} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E6F7FA' }}>
                  <MonoIcon size={20} />
                </div>
                <div className="font-medium text-slate-800">{c.name}</div>
              </div>
              <div className="mt-3 text-sm text-slate-600">Infiltraciones de precisión avanzadas. Explicación clara antes de decidir el procedimiento.</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
