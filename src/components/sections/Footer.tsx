import Link from "next/link";
import MonoIcon from "../ui/MonoIcon";
import { SITE_CONFIG } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <MonoIcon size={28} />
            <div className="font-semibold" style={{ color: '#344D63' }}>Infiltra Clínica</div>
          </div>
          <p className="mt-3 text-slate-600 max-w-sm">
            Un solo enfoque. <strong style={{ color: '#106D78' }}>Precisión médica especializada</strong> para aliviar tu dolor articular.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Aviso: La información no sustituye una consulta médica. Los resultados pueden variar según cada paciente.
          </p>
        </div>
        <div>
          <div className="font-medium text-slate-800">Contacto</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>
              <a href={	el:} className="hover:underline">
                {SITE_CONFIG.telephoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE_CONFIG.whatsappUrl} className="hover:underline">
                WhatsApp directo
              </a>
            </li>
            <li>
              <a href="mailto:contacto@infiltraclinicamerida.com" className="hover:underline">
                contacto@infiltraclinicamerida.com
              </a>
            </li>
            <li>Mérida, Yucatán</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-800">Secciones</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
            <li><Link href="/tratamientos" className="hover:underline">Tratamientos</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
            <li><Link href="/aviso-de-privacidad" className="hover:underline">Aviso de Privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">
        © {new Date().getFullYear()} Infiltra Clínica · Todos los derechos reservados
      </div>
    </footer>
  );
}
