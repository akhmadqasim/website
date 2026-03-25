import { notFound } from "next/navigation"

const SUPPORTED_LANGS = ["en", "id", "zh", "ja", "de", "ar"] as const
type Lang = (typeof SUPPORTED_LANGS)[number]

const contentMap: Record<
  Lang,
  Record<string, () => Promise<{ default: React.ComponentType }>>
> = {
  en: {
    "privacy-policy": () => import("@/content/core/en/privacy-policy.mdx"),
  },
  id: {
    "privacy-policy": () => import("@/content/core/id/privacy-policy.mdx"),
  },
  zh: {
    "privacy-policy": () => import("@/content/core/zh/privacy-policy.mdx"),
  },
  ja: {
    "privacy-policy": () => import("@/content/core/ja/privacy-policy.mdx"),
  },
  de: {
    "privacy-policy": () => import("@/content/core/de/privacy-policy.mdx"),
  },
  ar: {
    "privacy-policy": () => import("@/content/core/ar/privacy-policy.mdx"),
  },
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!SUPPORTED_LANGS.includes(lang as Lang)) {
    notFound()
  }

  const loader = contentMap[lang as Lang]?.["privacy-policy"]
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
