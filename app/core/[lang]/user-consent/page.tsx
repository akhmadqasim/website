import { notFound } from "next/navigation"

const SUPPORTED_LANGS = ["en", "id", "zh", "ja", "de", "ar"] as const
type Lang = (typeof SUPPORTED_LANGS)[number]

const contentMap: Record<
  Lang,
  Record<string, () => Promise<{ default: React.ComponentType }>>
> = {
  en: {
    "user-consent": () => import("@/content/core/en/user-consent.mdx"),
  },
  id: {
    "user-consent": () => import("@/content/core/id/user-consent.mdx"),
  },
  zh: {
    "user-consent": () => import("@/content/core/zh/user-consent.mdx"),
  },
  ja: {
    "user-consent": () => import("@/content/core/ja/user-consent.mdx"),
  },
  de: {
    "user-consent": () => import("@/content/core/de/user-consent.mdx"),
  },
  ar: {
    "user-consent": () => import("@/content/core/ar/user-consent.mdx"),
  },
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export default async function UserConsentPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!SUPPORTED_LANGS.includes(lang as Lang)) {
    notFound()
  }

  const loader = contentMap[lang as Lang]?.["user-consent"]
  if (!loader) notFound()

  const { default: Content } = await loader()
  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <main className="min-h-svh px-6 py-24">
      <article dir={dir} className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <Content />
      </article>
    </main>
  )
}
