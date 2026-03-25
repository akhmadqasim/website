export function ObfuscatedEmail({
  user,
  domain,
}: {
  user: string
  domain: string
}) {
  const reversed = [...`${user}@${domain}`].reverse().join("")

  return (
    <label className="inline cursor-pointer">
      <input type="checkbox" className="peer sr-only" />
      <span className="peer-checked:hidden underline decoration-dotted underline-offset-4 text-inherit">
        [Click to reveal email]
      </span>
      <span
        className="hidden peer-checked:inline"
        role="text"
        aria-label={`${user} at ${domain}`}
        style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
      >
        {reversed}
      </span>
    </label>
  )
}
