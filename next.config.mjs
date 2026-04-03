import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/core/privacy-policy",
        destination: "/core/en/privacy-policy",
        permanent: true,
      },
      {
        source: "/core/privacy-rights",
        destination: "/core/en/privacy-rights",
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX()

export default withMDX(nextConfig)
