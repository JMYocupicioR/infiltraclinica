export default function FAQ(){
  const qas = [
    {q:'¿Duele la infiltración?', a:'Usamos anestesia local y guía por imagen para minimizar molestias. La mayoría de los pacientes lo tolera bien.'},
    {q:'¿Cuánto dura el efecto?', a:'Depende de la articulación y el diagnóstico. En PRP o ácido hialurónico el beneficio puede ser de meses; los resultados varían según el caso.'},
    {q:'¿Quiénes son candidatos?', a:'Pacientes con dolor articular que buscan una alternativa intermedia entre fármacos y cirugía. Se valora en consulta.'},
    {q:'¿Necesito estudios?', a:'Trae tus RX, resonancias o ultrasonidos si los tienes. En consulta definimos si se requieren.'},
  ];
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Preguntas frecuentes</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {qas.map((qa)=> (
          <div key={qa.q} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="font-medium text-slate-800">{qa.q}</div>
            <div className="text-sm text-slate-600">{qa.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
