'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react'
import { CodeWindow } from './code-window'

const signals = ['LLMs', 'Computer vision', 'Robotics', 'Open source']

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-[#d9d8ff] px-5 pb-16 pt-28 text-[#130329] md:px-8 md:pb-20 md:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(111,91,215,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(111,91,215,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-32 size-[620px] rounded-full bg-[#c6a9ff]/45 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-12%] top-[-20%] size-[600px] rounded-full bg-[#f2c6ef]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-8 flex items-center justify-between border-y border-[#130329]/15 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#130329]/55 md:mb-10">
          <span className="text-violet">A student-run AI engineering club</span>
          <span className="hidden md:block">Chitkara University / Rajpura</span>
          <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-violet" /> Current operating mode</span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div className="min-w-0">
            <motion.h1 id="hero-title" initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-[760px] text-[clamp(4.4rem,11.5vw,10.5rem)] font-bold leading-[0.77] tracking-[-0.095em]">
              Make the
              <br />
              <span className="text-[#843cff]">future</span>
              <br />
              tangible.
            </motion.h1>

            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-9 flex max-w-[650px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[450px] text-pretty text-base leading-relaxed text-[#130329]/65 md:text-lg">
                Evolve AI is Chitkara&apos;s student-led space for turning curious questions into working AI systems, useful tools, and ideas worth showing.
              </p>
              <Link href="#work" className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#130329] pb-2 text-sm font-semibold transition-colors hover:border-[#843cff] hover:text-[#843cff]">
                See what we build <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="pt-1 lg:pt-2">
            <div className="mb-4 flex items-center justify-between border-b border-[#130329]/15 pb-2 font-mono text-[10px] uppercase tracking-[0.17em] text-[#130329]/50">
              <span className="flex items-center gap-2"><Terminal className="size-3 text-[#843cff]" /> club.py / projects</span>
              <span>v.2026</span>
            </div>
            <CodeWindow />
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#130329]/15 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#130329]/50">
              {signals.map((signal, index) => <span key={signal} className="flex items-center gap-2"><span className="text-[#843cff]">0{index + 1}</span>{signal}</span>)}
            </div>
          </motion.div>
        </div>

        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }} className="mt-16 flex flex-col gap-5 border-t border-[#130329]/15 pt-5 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logos/evolveai-dark.png" alt="Evolve AI" width={120} height={42} className="h-8 w-auto object-contain" />
            <span className="h-5 w-px bg-[#130329]/20" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#130329]/50">Build together. Ship useful.</span>
          </div>
          <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#130329]/50">
            <Link href="https://github.com/evolveai-chitkara" aria-label="Evolve AI on GitHub" className="transition-colors hover:text-[#130329]">GitHub</Link>
            <Link href="https://www.linkedin.com/company/evolve-ai-chitkara/" aria-label="Evolve AI on LinkedIn" className="transition-colors hover:text-[#130329]">LinkedIn</Link>
            <ArrowDownRight className="ml-2 size-5 text-[#843cff]" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
