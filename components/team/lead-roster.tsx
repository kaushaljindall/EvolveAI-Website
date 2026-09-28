import Image from 'next/image'
import type { Person } from '@/lib/team'
import { shapeRadii } from '@/lib/shapes'

export function LeadRoster({ leads }: { leads: Person[] }) {
  return (
    <ol className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:gap-x-5 lg:grid-cols-5 lg:gap-y-14">
      {leads.map((lead, i) => (
        <li key={lead.name} className="group lg:[&:nth-child(even)]:translate-y-10">
          <div
            className="relative aspect-[4/5] overflow-hidden bg-lilac transition-[border-radius] duration-700 ease-[cubic-bezier(0.22,0.8,0.24,1)] group-hover:!rounded-[20px]"
            style={{ borderRadius: shapeRadii[i % shapeRadii.length] }}
          >
            <Image
              src={lead.photo}
              alt={`Portrait of ${lead.name}`}
              fill
              sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
              className="object-cover object-[center_22%] transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute left-2.5 top-2.5 rounded-full bg-white/85 px-2 py-0.5 font-mono text-[10px] text-ink backdrop-blur">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="mt-3 border-t border-ink/15 pt-3">
            <h3 className="text-lg font-semibold leading-tight tracking-[-0.02em] md:text-xl">{lead.name}</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-violet">{lead.role}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
