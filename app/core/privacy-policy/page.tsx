import PrivacyPolicyContent from "@/content/en/privacy-policy.mdx"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-svh px-6 py-24">
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <PrivacyPolicyContent />
      </article>
    </main>
  )
}
