import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"
import { Calendar } from "@/components/ui/calendar"
import AnimatedListDemo from "@/components/demos/animated-list-demo"
import AnimatedBeamDemo from "@/components/demos/animated-beam-demo"
import {
  CodeIcon,
  MobileIcon,
  GlobeIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const techStack = [
  { name: "TypeScript", body: "Full-stack web and backend development" },
  { name: "Python", body: "Automation, scripting, and data processing" },
  { name: "Swift", body: "Native iOS apps with SwiftUI" },
  { name: "Rust", body: "High-performance systems and CLI tools" },
  { name: "Node.js", body: "REST APIs and real-time backend services" },
  { name: "Express.js", body: "Lightweight and flexible web framework" },
  { name: "Next.js", body: "Full-stack React framework" },
  { name: "SwiftUI", body: "Declarative iOS UI framework" },
  { name: "Actix/Axum", body: "Blazing fast Rust web frameworks" },
  { name: "PostgreSQL", body: "Relational database at scale" },
  { name: "MongoDB", body: "Flexible document-based storage" },
  { name: "Redis", body: "Caching, queues, and sessions" },
  { name: "Docker", body: "Containerized deployments" },
  { name: "GitHub Actions", body: "CI/CD automation pipelines" },
  { name: "Cloudflare", body: "Edge network and security" },
  { name: "Grafana", body: "Metrics dashboards and visualization" },
  { name: "Sentry", body: "Error tracking and monitoring" },
]

const skills = [
  {
    Icon: CodeIcon,
    name: "Backend Development",
    description:
      "Scalable APIs and microservices with Node.js, Python, and Rust. From REST to real-time.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {techStack.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {f.name}
              </figcaption>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: RocketIcon,
    name: "DevOps & Monitoring",
    description: "CI/CD pipelines, containerized deployments, and real-time observability with Grafana and Sentry.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: GlobeIcon,
    name: "System Architecture",
    description: "End-to-end system design - from mobile clients through API gateways to databases and cloud infrastructure.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: MobileIcon,
    name: "iOS Development",
    description: "Native iOS apps with Swift and SwiftUI - from prototyping to App Store.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2026, 2, 24, 0, 0, 0)}
        className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
]

export function SkillsSection() {
  return (
    <>
      <section className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          What I Do
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Specialized in backend systems and iOS development
        </p>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <BentoGrid>
            {skills.map((skill) => (
              <BentoCard key={skill.name} {...skill} />
            ))}
          </BentoGrid>
        </div>
      </section>
    </>
  )
}
