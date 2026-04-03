import {
  profileJsonLd,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/site"
import { HeroSection } from "@/components/sections/hero"

export default function Page() {
  return (
    <main className="min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <HeroSection />
    </main>
  )
}
