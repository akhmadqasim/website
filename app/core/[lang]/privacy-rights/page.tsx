import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ogImageUrl, siteName, siteUrl } from "@/lib/site"

const SUPPORTED_LANGS = [
  "en",
  "id",
  "zh",
  "ja",
  "de",
  "ar",
  "es",
  "fr",
  "it",
  "ko",
  "ms",
  "ru",
] as const
type Lang = (typeof SUPPORTED_LANGS)[number]

const titles: Record<Lang, string> = {
  en: "Privacy Rights - SIMSDIG",
  id: "Hak Privasi Pengguna - SIMSDIG",
  zh: "隐私权 - SIMSDIG",
  ja: "プライバシーの権利 - SIMSDIG",
  de: "Datenschutzrechte - SIMSDIG",
  ar: "حقوق الخصوصية - SIMSDIG",
  es: "Derechos de Privacidad - SIMSDIG",
  fr: "Droits en matière de confidentialité - SIMSDIG",
  it: "Diritti sulla Privacy - SIMSDIG",
  ko: "개인정보 권리 - SIMSDIG",
  ms: "Hak Privasi - SIMSDIG",
  ru: "Права на конфиденциальность - SIMSDIG",
}

const descriptions: Record<Lang, string> = {
  en: "Manage your privacy choices for SIMSDIG. Learn about data collection controls, consent management, and your rights regarding personal data in our school management platform.",
  id: "Kelola pilihan privasi Anda untuk SIMSDIG. Pelajari tentang kontrol pengumpulan data, manajemen persetujuan, dan hak Anda terkait data pribadi di platform manajemen sekolah kami.",
  zh: "管理您在SIMSDIG中的隐私选择。了解数据收集控制、同意管理以及您在学校管理平台中关于个人数据的权利。",
  ja: "SIMSDIGのプライバシー設定を管理してください。データ収集の制御、同意の管理、学校管理プラットフォームにおける個人データに関するお客様の権利についてご確認ください。",
  de: "Verwalten Sie Ihre Datenschutzeinstellungen für SIMSDIG. Erfahren Sie mehr über Datenerfassungskontrollen, Einwilligungsverwaltung und Ihre Rechte in Bezug auf personenbezogene Daten in unserer Schulverwaltungsplattform.",
  ar: "إدارة خيارات الخصوصية الخاصة بك في SIMSDIG. تعرّف على ضوابط جمع البيانات وإدارة الموافقة وحقوقك المتعلقة بالبيانات الشخصية في منصة إدارة المدارس الخاصة بنا.",
  es: "Gestione sus opciones de privacidad en SIMSDIG. Conozca los controles de recopilación de datos, la gestión del consentimiento y sus derechos sobre los datos personales en nuestra plataforma de gestión escolar.",
  fr: "Gérez vos choix en matière de confidentialité pour SIMSDIG. Découvrez les contrôles de collecte de données, la gestion du consentement et vos droits relatifs aux données personnelles au sein de notre plateforme de gestion scolaire.",
  it: "Gestisca le Sue scelte sulla privacy per SIMSDIG. Scopra i controlli sulla raccolta dei dati, la gestione del consenso e i Suoi diritti in materia di dati personali nella nostra piattaforma di gestione scolastica.",
  ko: "SIMSDIG의 개인정보 선택 항목을 관리하세요. 학교 관리 플랫폼에서의 데이터 수집 제어, 동의 관리, 개인정보에 관한 귀하의 권리에 대해 알아보세요.",
  ms: "Uruskan pilihan privasi anda untuk SIMSDIG. Ketahui tentang kawalan pengumpulan data, pengurusan persetujuan, dan hak anda berkaitan data peribadi dalam platform pengurusan sekolah kami.",
  ru: "Управляйте настройками конфиденциальности в SIMSDIG. Узнайте о механизмах контроля сбора данных, управлении согласием и своих правах в отношении персональных данных в нашей платформе управления школой.",
}

const ogLocales: Record<Lang, string> = {
  en: "en_US",
  id: "id_ID",
  zh: "zh_CN",
  ja: "ja_JP",
  de: "de_DE",
  ar: "ar_SA",
  es: "es_ES",
  fr: "fr_FR",
  it: "it_IT",
  ko: "ko_KR",
  ms: "ms_MY",
  ru: "ru_RU",
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
  const url = `${siteUrl}/core/${lang}/privacy-rights`
  const socialTitle = `${titles[lang]} | ${siteName}`

  return {
    title: titles[lang],
    description,
    alternates: {
      canonical: `/core/${lang}/privacy-rights`,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `/core/${l}/privacy-rights`])
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
    "privacy-rights": () => import("@/content/core/en/privacy-rights.mdx"),
  },
  id: {
    "privacy-rights": () => import("@/content/core/id/privacy-rights.mdx"),
  },
  zh: {
    "privacy-rights": () => import("@/content/core/zh/privacy-rights.mdx"),
  },
  ja: {
    "privacy-rights": () => import("@/content/core/ja/privacy-rights.mdx"),
  },
  de: {
    "privacy-rights": () => import("@/content/core/de/privacy-rights.mdx"),
  },
  ar: {
    "privacy-rights": () => import("@/content/core/ar/privacy-rights.mdx"),
  },
  es: {
    "privacy-rights": () => import("@/content/core/es/privacy-rights.mdx"),
  },
  fr: {
    "privacy-rights": () => import("@/content/core/fr/privacy-rights.mdx"),
  },
  it: {
    "privacy-rights": () => import("@/content/core/it/privacy-rights.mdx"),
  },
  ko: {
    "privacy-rights": () => import("@/content/core/ko/privacy-rights.mdx"),
  },
  ms: {
    "privacy-rights": () => import("@/content/core/ms/privacy-rights.mdx"),
  },
  ru: {
    "privacy-rights": () => import("@/content/core/ru/privacy-rights.mdx"),
  },
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export default async function PrivacyRightsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!SUPPORTED_LANGS.includes(lang as Lang)) {
    notFound()
  }

  const loader = contentMap[lang as Lang]?.["privacy-rights"]
  if (!loader) notFound()

  const { default: Content } = await loader()
  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <main className="min-h-svh px-6 py-24">
      <article
        dir={dir}
        lang={lang}
        className="mx-auto prose max-w-3xl prose-neutral dark:prose-invert"
      >
        <Content />
      </article>
    </main>
  )
}
