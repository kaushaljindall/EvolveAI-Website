import type { squads as squadsData } from '@/lib/team'
import { Reveal } from '@/components/site/reveal'
import { MemberPass } from './member-pass'
import { cn } from '@/lib/utils'

const accents: Record<string, string> = {
  Technical: 'bg-violet',
  Research: 'bg-sky',
  Media: 'bg-magenta',
  Content: 'bg-lilac',
  Graphics: 'bg-primary',
  Operations: 'bg-ink',
}

const order = ['Media', 'Content', 'Graphics', 'Operations', 'Technical', 'Research']

export function SquadSections({ squads }: { squads: typeof squadsData }) {
  const sorted = [...squads].sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))

  return (
    <div className="border-t border-ink/20">
      {sorted.map((squad, index) => (
        <section
          key={squad.name}
          id={`squad-${squad.name.toLowerCase()}`}
          aria-labelledby={`squad-${squad.name}-title`}
          className="grid scroll-mt-24 gap-6 border-b border-ink/20 py-10 md:py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12"
        >
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/55">
              <span className={cn('size-2 rounded-full', accents[squad.name])} aria-hidden="true" />
              Squad {String(index + 1).padStart(2, '0')} / {String(sorted.length).padStart(2, '0')}
            </p>
            <h3 id={`squad-${squad.name}-title`} className="mt-3 text-4xl font-semibold leading-none tracking-[-0.045em] md:text-5xl">
              {squad.name}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/65">{squad.blurb}</p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ink/50">
              {String(squad.members.length).padStart(2, '0')} members
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 xl:grid-cols-4">
            {squad.members.map((person, i) => (
              <li key={person.name}>
                <MemberPass
                  person={person}
                  code={`EA-${squad.name.slice(0, 3).toUpperCase()}-${String(i + 1).padStart(2, '0')}`}
                  label={`${squad.name} squad`}
                  accent={accents[squad.name]}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
