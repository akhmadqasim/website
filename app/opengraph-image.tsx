import { ImageResponse } from "next/og"

export const alt = "Akhmad Qasim"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f8fafc",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Akhmad Qasim
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Backend & iOS Developer
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            akhmadqasim.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
