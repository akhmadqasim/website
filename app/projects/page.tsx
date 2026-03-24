"use client"

import Image from "next/image"
import { motion } from "motion/react"

const projects = [
  {
    name: "Chemist Fun Days",
    desc: "Full-stack platform for a national chemistry competition — event landing page with competition details, sponsor showcase, and registration flow.",
    image: "/chemistfundays.id.png",
    href: "https://chemistfundays.id",
  },
  {
    name: "CFD Dashboard",
    desc: "Participant dashboard for Chemist Fun Days — authentication, registration management, and competition tracking for hundreds of participants.",
    image: "/dashboard.chemistfundays.id.png",
    href: "https://dashboard.chemistfundays.id",
  },
  {
    name: "SIMS SMAN 1 Samarinda",
    desc: "School management information system for one of the top high schools in East Kalimantan — student data, academic records, and administrative tools.",
    image: "/sims.sman1samarinda.sch.id.png",
    href: "https://sims.sman1samarinda.sch.id",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-svh">
      <section className="flex min-h-svh flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Things I&apos;ve built.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1920}
                  height={1080}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold tracking-tight group-hover:underline underline-offset-4 sm:text-3xl">
                  {project.name}
                </h2>
                <p className="mt-2 text-muted-foreground">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  )
}
