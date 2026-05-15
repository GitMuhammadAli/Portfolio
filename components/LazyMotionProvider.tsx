'use client'

/**
 * LazyMotion was previously enabled with `strict`, which required every
 * motion-using component to import the `m` namespace instead of `motion`.
 * The codebase (and third-party components like SparklesCore) all use
 * `motion`, so LazyMotion's tree-shake benefit was unrealized AND it threw
 * runtime invariant errors. Rendered children directly — no behavior change
 * for consumers, just removes the broken wrapper.
 */
export function LazyMotionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
