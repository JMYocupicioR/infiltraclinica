import Link from "next/link";
import MonoIcon from "../ui/MonoIcon";
import { SITE_CONFIG } from "@/lib/seo";

const PHONE_HREF = 	el:;

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio Infiltra Clínica">
          <MonoIcon size={36} />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight" style={{ color: '#344D63' }}>Infiltra Clínica</div>
            <div className="text-[11px] text-slate-500">
              Un solo enfoque. <span className="font-medium" style={{ color: '#106D78' }}>Precisión médica especializada.</span>
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600" aria-label="Secciones principales">
          <Link href="/nosotros" className="hover:text-slate-900">Nosotros</Link>
          <Link href="/tratamientos" className="hover:text-slate-900">Tratamientos</Link>
          <Link href="/faq" className="hover:text-slate-900">FAQ</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PHONE_HREF} className="hidden sm:inline-block px-4 py-2 rounded-2xl border border-slate-300 text-sm" aria-label="Llámanos">
            Llámanos
          </a>
          <a href={SITE_CONFIG.whatsappUrl} className="px-4 py-2 rounded-2xl text-sm text-white" style={{ backgroundColor: '#106D78' }}>
            Agenda por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
