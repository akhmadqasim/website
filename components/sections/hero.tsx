import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        Hi, I&apos;m Akhmad Qasim
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        Backend &amp; iOS Developer crafting robust server architectures and
        beautiful native mobile experiences. Building scalable solutions from
        API to App Store.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="rounded-full px-8" asChild>
          <Link href="/projects">View My Work</Link>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
          <a href="https://instagram.com/akhmad_qasim" target="_blank" rel="noopener noreferrer">
            Get in Touch
          </a>
        </Button>
      </div>
    </section>
  )
}
