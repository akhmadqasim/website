import UserConsentContent from "@/content/en/user-consent.mdx"

export default function UserConsentPage() {
  return (
    <main className="min-h-svh px-6 py-24">
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <UserConsentContent />
      </article>
    </main>
  )
}
