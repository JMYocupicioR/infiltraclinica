export default function Badge({ children }: { children: React.ReactNode }){ return (
  <span className="inline-flex items-center justify-center h-6 min-w-[1.5rem] px-2 rounded-full text-[11px] font-semibold" style={{ backgroundColor: '#E6F7FA', color: '#106D78' }}>{children}</span>
)}
