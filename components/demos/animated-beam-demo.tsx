"use client"

import React, { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})
Circle.displayName = "Circle"

export default function AnimatedBeamDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <span className="text-xl">📱</span>
          </Circle>
          <Circle ref={div2Ref}>
            <span className="text-xl">🌐</span>
          </Circle>
          <Circle ref={div3Ref}>
            <span className="text-xl">💻</span>
          </Circle>
          <Circle ref={div4Ref}>
            <span className="text-xl">⌚</span>
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <span className="text-2xl">⚙️</span>
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div5Ref}>
            <span className="text-xl">🗄️</span>
          </Circle>
          <Circle ref={div7Ref}>
            <span className="text-xl">☁️</span>
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div5Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
    </div>
  )
}
