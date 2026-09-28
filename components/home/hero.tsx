'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Circle, Cpu, Radio } from 'lucide-react'
import { CodeWindow } from './code-window'

const signals = ['LLMs', 'Computer vision', 'Robotics', 'Open source']

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(197,255,79,0.12),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-15%] top-24 hidden h-[520px] w-[520px] rounded-full border border-ink/10 md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-9%] top-40 hidden h-[360px] w-[360px] rounded-full border border-ink/10 md:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between border-y border-ink/10 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50 md:mb-14">
          <span className="flex items-center gap-2"><Circle className="size-2 fill-lime text-lime" /> Chitkara University / Rajpura</span>
          <span className="hidden md:block">Independent student collective / 2021—present</span>
          <span className="flex items-center gap-2"><Radio className="size-3 text-lime" /> Building in public</span>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet"
            >
              A student-run AI engineering club
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-[clamp(4.25rem,12vw,10.5rem)] font-bold leading-[0.78] tracking-[-0.09em] text-ink"
            >
              Make the
              <br />
              <span className="relative inline-block text-violet">future<span aria-hidden="true" className="absolute -right-5 -top-3 font-mono text-[11px] font-normal tracking-normal text-ink/40">/01</span></span>
              <br />
              tangible.
            </motion.h1>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex max-w-2xl flex-col gap-7 md:flex-row md:items-end md:gap-14"
            >
              <p className="max-w-md text-pretty text-lg leading-relaxed text-ink/70">
                Evolve AI is where curious students turn ideas into working systems — from first prompt to final demo, together.
              </p>
              <Link href="/projects" className="group inline-flex w-fit items-center gap-2 border-b border-ink pb-2 text-sm font-semibold text-ink transition-colors hover:border-violet hover:text-violet">
                Explore our work <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:pb-3"
          >
            <div className="mb-4 flex items-center justify-between border-b border-ink/10 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
              <span className="flex items-center gap-2"><Cpu className="size-3 text-violet" /> Current operating mode</span>
              <span>v.2026</span>
            </div>
            <CodeWindow />
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-ink/10 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50">
              {signals.map((signal, index) => <span key={signal} className="flex items-center gap-2"><span className="text-lime">0{index + 1}</span>{signal}</span>)}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-16 flex flex-col gap-5 border-t border-ink/10 pt-5 md:mt-24 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-4">
            <Image src="/logos/evolveai-dark.png" alt="Evolve AI" width={120} height={42} className="h-8 w-auto object-contain" />
            <span className="h-5 w-px bg-ink/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/50">Powered by people, not hype</span>
          </div>
          <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
            <Link href="https://github.com/evolveai-chitkara" aria-label="Evolve AI on GitHub" className="transition-colors hover:text-ink">GitHub</Link>
            <Link href="https://www.linkedin.com/company/evolve-ai-chitkara/" aria-label="Evolve AI on LinkedIn" className="transition-colors hover:text-ink">LinkedIn</Link>
            <ArrowDownRight className="ml-2 size-5 text-lime" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
