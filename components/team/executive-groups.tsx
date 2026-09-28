import Image from 'next/image'
import type { Person } from '@/lib/team'

export function ExecutiveGroups({ executives }: { executives: Person[] }) {
  const groups = executives.reduce<Record<string, Person[]>>((acc, person) => {
    const key = person.role ?? 'Executive'
    ;(acc[key] ??= []).push(person)
    return acc
  }, {})

  return (
    <div className="border-t border-ink/20">
      {Object.entries(groups).map(([role, people]) => (
        <div key={role} className="grid gap-5 border-b border-ink/20 py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
          <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
            <h3 className="text-2xl font-semibold tracking-tight">{role.replace(' Executive', '')}</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              {String(people.length).padStart(2, '0')} {people.length === 1 ? 'executive' : 'executives'}
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {people.map((person) => (
              <li key={person.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] bg-lilac ring-1 ring-ink/5">
                  <Image
                    src={person.photo}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 150px, (min-width: 640px) 30vw, 45vw"
                    className="object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-2.5 text-sm font-medium leading-tight">{person.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
