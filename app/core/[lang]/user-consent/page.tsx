import type { Metadata } from "next"
import { notFound } from "next/navigation"

const SUPPORTED_LANGS = ["en", "id", "zh", "ja", "de", "ar"] as const
type Lang = (typeof SUPPORTED_LANGS)[number]

const titles: Record<Lang, string> = {
  en: "User Privacy Choices - SIMSDIG",
  id: "Pilihan Privasi Pengguna - SIMSDIG",
  zh: "用户隐私选择 - SIMSDIG",
  ja: "ユーザープライバシーの選択 - SIMSDIG",
  de: "Datenschutzoptionen - SIMSDIG",
  ar: "خيارات خصوصية المستخدم - SIMSDIG",
}

const descriptions: Record<Lang, string> = {
  en: "Manage your privacy choices for SIMSDIG. Learn about data collection controls, consent management, and your rights regarding personal data in our school management platform.",
  id: "Kelola pilihan privasi Anda untuk SIMSDIG. Pelajari tentang kontrol pengumpulan data, manajemen persetujuan, dan hak Anda terkait data pribadi di platform manajemen sekolah kami.",
  zh: "管理您在SIMSDIG中的隐私选择。了解数据收集控制、同意管理以及您在学校管理平台中关于个人数据的权利。",
  ja: "SIMSDIGのプライバシー設定を管理してください。データ収集の制御、同意の管理、学校管理プラットフォームにおける個人データに関するお客様の権利についてご確認ください。",
  de: "Verwalten Sie Ihre Datenschutzeinstellungen für SIMSDIG. Erfahren Sie mehr über Datenerfassungskontrollen, Einwilligungsverwaltung und Ihre Rechte in Bezug auf personenbezogene Daten in unserer Schulverwaltungsplattform.",
  ar: "إدارة خيارات الخصوصية الخاصة بك في SIMSDIG. تعرّف على ضوابط جمع البيانات وإدارة الموافقة وحقوقك المتعلقة بالبيانات الشخصية في منصة إدارة المدارس الخاصة بنا.",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = rawLang as Lang
  if (!SUPPORTED_LANGS.includes(lang)) return {}

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `/core/${lang}/user-consent`,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `/core/${l}/user-consent`])
      ),
    },
  }
}

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
      <article dir={dir} lang={lang} className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <Content />
      </article>
    </main>
  )
}
