export default function Testimonials(){
  const items = [
    {quote:'Me explicaron todo con calma y el procedimiento fue rápido. A la semana ya caminaba mejor.', author:'Elena, 68 años'},
    {quote:'Me gustó la precisión del procedimiento y que me explicaran cada paso del proceso.', author:'Carlos, 43 años'},
    {quote:'Trato humano y seguimiento. Recomiendo la clínica.', author:'Sofía, 56 años'},
  ];
  return (
    <section className="bg-[#F8F5F2]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Testimonios</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((t)=> (
            <figure key={t.author} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
              <blockquote className="text-sm text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-slate-500">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
