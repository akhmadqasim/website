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
  en: "Privacy Policy - SIMSDIG",
  id: "Kebijakan Privasi - SIMSDIG",
  zh: "隐私政策 - SIMSDIG",
  ja: "プライバシーポリシー - SIMSDIG",
  de: "Datenschutzrichtlinie - SIMSDIG",
  ar: "سياسة الخصوصية - SIMSDIG",
  es: "Política de Privacidad - SIMSDIG",
  fr: "Politique de confidentialité - SIMSDIG",
  it: "Informativa sulla Privacy - SIMSDIG",
  ko: "개인정보처리방침 - SIMSDIG",
  ms: "Dasar Privasi - SIMSDIG",
  ru: "Политика конфиденциальности - SIMSDIG",
}

const descriptions: Record<Lang, string> = {
  en: "Learn how SIMSDIG collects, uses, and protects your personal data. Our privacy policy covers data handling practices for the school management platform in compliance with Indonesian regulations.",
  id: "Pelajari bagaimana SIMSDIG mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Kebijakan privasi kami mencakup praktik penanganan data untuk platform manajemen sekolah sesuai dengan peraturan Indonesia.",
  zh: "了解SIMSDIG如何收集、使用和保护您的个人数据。我们的隐私政策涵盖了学校管理平台的数据处理实践，符合印度尼西亚法规。",
  ja: "SIMSDIGがお客様の個人データをどのように収集、使用、保護するかをご確認ください。本プライバシーポリシーは、インドネシアの規制に準拠した学校管理プラットフォームのデータ取り扱い慣行について説明しています。",
  de: "Erfahren Sie, wie SIMSDIG Ihre persönlichen Daten erfasst, verwendet und schützt. Unsere Datenschutzrichtlinie beschreibt die Datenverarbeitungspraktiken der Schulverwaltungsplattform in Übereinstimmung mit indonesischen Vorschriften.",
  ar: "تعرّف على كيفية جمع SIMSDIG لبياناتك الشخصية واستخدامها وحمايتها. تغطي سياسة الخصوصية الخاصة بنا ممارسات معالجة البيانات لمنصة إدارة المدارس وفقًا للوائح الإندونيسية.",
  es: "Descubra cómo SIMSDIG recopila, utiliza y protege sus datos personales. Nuestra política de privacidad describe las prácticas de tratamiento de datos de la plataforma de gestión escolar conforme a las regulaciones indonesias.",
  fr: "Découvrez comment SIMSDIG collecte, utilise et protège vos données personnelles. Notre politique de confidentialité présente les pratiques de traitement des données de la plateforme de gestion scolaire, conformément aux réglementations indonésiennes.",
  it: "Scopra come SIMSDIG raccoglie, utilizza e protegge i Suoi dati personali. La nostra informativa sulla privacy illustra le pratiche di gestione dei dati per la piattaforma di gestione scolastica, in conformità con le normative indonesiane.",
  ko: "SIMSDIG가 귀하의 개인정보를 어떻게 수집, 이용, 보호하는지 알아보세요. 본 개인정보처리방침은 인도네시아 관련 법령을 준수하는 학교 관리 플랫폼의 데이터 처리 방식을 다룹니다.",
  ms: "Ketahui cara SIMSDIG mengumpul, menggunakan, dan melindungi data peribadi anda. Dasar privasi kami merangkumi amalan pengendalian data untuk platform pengurusan sekolah selaras dengan peraturan Indonesia.",
  ru: "Узнайте, как SIMSDIG собирает, использует и защищает ваши персональные данные. Наша политика конфиденциальности описывает практики обработки данных для платформы управления школой в соответствии с индонезийским законодательством.",
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
  es: {
    "privacy-policy": () => import("@/content/core/es/privacy-policy.mdx"),
  },
  fr: {
    "privacy-policy": () => import("@/content/core/fr/privacy-policy.mdx"),
  },
  it: {
    "privacy-policy": () => import("@/content/core/it/privacy-policy.mdx"),
  },
  ko: {
    "privacy-policy": () => import("@/content/core/ko/privacy-policy.mdx"),
  },
  ms: {
    "privacy-policy": () => import("@/content/core/ms/privacy-policy.mdx"),
  },
  ru: {
    "privacy-policy": () => import("@/content/core/ru/privacy-policy.mdx"),
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
