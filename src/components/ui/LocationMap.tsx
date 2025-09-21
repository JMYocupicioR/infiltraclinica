interface LocationMapProps {
  className?: string;
  title?: string;
}

export default function LocationMap({ className = "", title = "Mapa de ubicacion" }: LocationMapProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`.trim()}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1250421402474!2d-89.58781142403029!3d21.027682187814193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56718529875997%3A0x9acbf98c884db867!2sInfiltra%20Clinica!5e0!3m2!1ses!2smx!4v1758439412351!5m2!1ses!2smx"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
