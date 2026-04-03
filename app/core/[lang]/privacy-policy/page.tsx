import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ogImageUrl, siteName, siteUrl } from "@/lib/site"

const SUPPORTED_LANGS = ["en", "id", "zh", "ja", "de", "ar"] as const
type Lang = (typeof SUPPORTED_LANGS)[number]

const titles: Record<Lang, string> = {
  en: "Privacy Policy - SIMSDIG",
  id: "Kebijakan Privasi - SIMSDIG",
  zh: "隐私政策 - SIMSDIG",
  ja: "プライバシーポリシー - SIMSDIG",
  de: "Datenschutzrichtlinie - SIMSDIG",
  ar: "سياسة الخصوصية - SIMSDIG",
}

const descriptions: Record<Lang, string> = {
  en: "Learn how SIMSDIG collects, uses, and protects your personal data. Our privacy policy covers data handling practices for the school management platform in compliance with Indonesian regulations.",
  id: "Pelajari bagaimana SIMSDIG mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Kebijakan privasi kami mencakup praktik penanganan data untuk platform manajemen sekolah sesuai dengan peraturan Indonesia.",
  zh: "了解SIMSDIG如何收集、使用和保护您的个人数据。我们的隐私政策涵盖了学校管理平台的数据处理实践，符合印度尼西亚法规。",
  ja: "SIMSDIGがお客様の個人データをどのように収集、使用、保護するかをご確認ください。本プライバシーポリシーは、インドネシアの規制に準拠した学校管理プラットフォームのデータ取り扱い慣行について説明しています。",
  de: "Erfahren Sie, wie SIMSDIG Ihre persönlichen Daten erfasst, verwendet und schützt. Unsere Datenschutzrichtlinie beschreibt die Datenverarbeitungspraktiken der Schulverwaltungsplattform in Übereinstimmung mit indonesischen Vorschriften.",
  ar: "تعرّف على كيفية جمع SIMSDIG لبياناتك الشخصية واستخدامها وحمايتها. تغطي سياسة الخصوصية الخاصة بنا ممارسات معالجة البيانات لمنصة إدارة المدارس وفقًا للوائح الإندونيسية.",
}

const ogLocales: Record<Lang, string> = {
  en: "en_US",
  id: "id_ID",
  zh: "zh_CN",
  ja: "ja_JP",
  de: "de_DE",
  ar: "ar_SA",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = rawLang as Lang
  if (!SUPPORTED_LANGS.includes(lang)) return {}
  const description = descriptions[lang]
  const url = `${siteUrl}/core/${lang}/privacy-policy`
  const socialTitle = `${titles[lang]} | ${siteName}`

  return {
    title: titles[lang],
    description,
    alternates: {
      canonical: `/core/${lang}/privacy-policy`,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `/core/${l}/privacy-policy`])
      ),
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      locale: ogLocales[lang],
      siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImageUrl],
    },
  }
}

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
      <article dir={dir} lang={lang} className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <Content />
      </article>
    </main>
  )
}
