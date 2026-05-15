'use client'

import * as React from 'react'
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight, Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Cinematic footer — curtain-reveal pattern. The wrapper has a clip-path
 * that constrains its viewport, while the actual footer is `position: fixed`
 * underneath. As the user scrolls, the page slides up to expose the footer
 * sitting beneath everything else, creating a depth-layered reveal.
 *
 * Customized for Ali Shahid:
 *   - Giant background text: SHAHID
 *   - Marquee reflects his work pillars
 *   - Pills: Email, LinkedIn, GitHub
 *   - Copyright + crafted-with footer line
 *
 * The upstream spec uses shadcn CSS variables (--foreground, --background,
 * --primary, --destructive). This project doesn't define them, so every
 * color is hand-tuned with explicit zinc tones below.
 */

const STYLES = `
.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.9; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(239,68,68,0.5)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(239,68,68,0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 45s linear infinite; }
.animate-footer-heartbeat { animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--fg) 4%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--fg) 4%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in srgb, var(--accent) 12%, transparent) 0%,
    color-mix(in srgb, var(--accent) 6%, transparent) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, color-mix(in srgb, var(--fg) 5%, transparent) 0%, color-mix(in srgb, var(--fg) 2%, transparent) 100%);
  box-shadow:
    0 10px 30px -10px var(--shadow),
    inset 0 1px 1px color-mix(in srgb, var(--fg) 8%, transparent),
    inset 0 -1px 2px var(--shadow);
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, color-mix(in srgb, var(--fg) 10%, transparent) 0%, color-mix(in srgb, var(--fg) 3%, transparent) 100%);
  border-color: var(--border-strong);
  box-shadow:
    0 20px 40px -10px var(--shadow),
    inset 0 1px 1px color-mix(in srgb, var(--fg) 18%, transparent);
  color: var(--fg);
}

.footer-giant-bg-text {
  font-size: 17vw;
  line-height: 0.78;
  font-weight: 900;
  letter-spacing: -0.045em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--fg) 7%, transparent);
  background: linear-gradient(180deg, color-mix(in srgb, var(--fg) 12%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--fg) 0%, color-mix(in srgb, var(--fg) 45%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in srgb, var(--fg) 15%, transparent));
}
`

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType
  }

/**
 * Was a GSAP-driven magnetic button that tracked mousemove + rotated on
 * pointer pos every frame ("dancing" too aggressively + GPU compositor
 * cost). Now a plain forwardRef wrapper that just renders the element
 * with a tasteful CSS hover (subtle scale + brightening). API kept the
 * same so the existing call sites work unchanged.
 */
const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = 'button', ...props }, forwardedRef) => {
    return (
      <Component
        ref={forwardedRef}
        className={cn(
          'cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]',
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
MagneticButton.displayName = 'MagneticButton'

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Full-Stack MERN &amp; AI</span> <span className="text-accent">✦</span>
    <span>NestJS · Next.js · Postgres</span> <span className="text-fg-subtle">✦</span>
    <span>Lahore, Pakistan</span> <span className="text-accent">✦</span>
    <span>End-to-End Ownership</span> <span className="text-fg-subtle">✦</span>
    <span>Open To Ambitious Work</span> <span className="text-accent">✦</span>
  </div>
)

export function CinematicFooter() {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alishahid.dev@gmail.com').then(() => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    })
  }

  // Previously ran two GSAP ScrollTrigger scrub timelines (giant text +
  // heading/links stagger) tied to wrapperRef. Scrub fires on every scroll
  // frame and was a big contributor to the footer feeling laggy. The
  // curtain-reveal already gives a "rise into view" effect for free as
  // the page scrolls up; the content can just sit there.

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain-reveal wrapper: clip-path constrains visibility while the
          inner footer stays position:fixed underneath. Scrolling slides the
          page up, revealing the footer beneath the curtain. */}
      <div
        className="relative h-screen w-full"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-bg text-fg cinematic-footer-wrapper">
          {/* Ambient aurora glow + grid — blur dropped from 80px to 40px
              and the breathe animation removed. An 80px blurred radial that
              scales+opacity-pulses every 8s was the heaviest non-pill paint
              here; static glow reads the same in a glance and frees the GPU. */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[50vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[40px] opacity-70 pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
            ALI SHAHID
          </div>

          {/* Diagonal marquee strip — backdrop-blur removed for perf
              (was layering yet another backdrop-filter on top of the glass
              pills). Uses bg-elevated/70 + border tokens so the strip adapts
              in light mode too. */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-border bg-bg-elevated/80 py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-fg-muted uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Main center content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.4em] text-fg-subtle mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black footer-text-glow tracking-tighter mb-6 text-center leading-[0.95]">
              Let&apos;s Work Together
            </h2>

            <p className="max-w-2xl text-center text-base md:text-lg text-fg-muted font-light mb-12">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact pills — Email / LinkedIn / GitHub */}
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as="a"
                  href="mailto:alishahid.dev@gmail.com"
                  className="footer-glass-pill px-7 py-4 rounded-full text-fg font-semibold text-sm md:text-base inline-flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 text-fg-muted group-hover:text-fg transition-colors" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-fg-muted font-bold">Email</span>
                    <span className="text-fg">alishahid.dev@gmail.com</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-fg-subtle group-hover:text-fg group-hover:rotate-45 transition-all ml-1" />
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://www.linkedin.com/in/alishahid-fswebdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-7 py-4 rounded-full text-fg font-semibold text-sm md:text-base inline-flex items-center gap-3 group"
                >
                  <Linkedin className="w-5 h-5 text-fg-muted group-hover:text-fg transition-colors" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-fg-muted font-bold">LinkedIn</span>
                    <span className="text-fg">alishahid-fswebdev</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-fg-subtle group-hover:text-fg group-hover:rotate-45 transition-all ml-1" />
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://github.com/GitMuhammadAli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-7 py-4 rounded-full text-fg font-semibold text-sm md:text-base inline-flex items-center gap-3 group"
                >
                  <Github className="w-5 h-5 text-fg-muted group-hover:text-fg transition-colors" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-fg-muted font-bold">GitHub</span>
                    <span className="text-fg">GitMuhammadAli</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-fg-subtle group-hover:text-fg group-hover:rotate-45 transition-all ml-1" />
                </MagneticButton>
              </div>

              {/* Copy-email pill */}
              <button
                onClick={handleCopyEmail}
                className="footer-glass-pill px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 text-xs md:text-sm text-fg-muted hover:text-fg"
              >
                <span className="font-mono">alishahid.dev@gmail.com</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
                  {copied ? 'Copied' : 'Copy'}
                </span>
              </button>
            </div>
          </div>

          {/* Bottom bar — copyright + crafted-with + back-to-top */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-fg-subtle text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © 2026 Ali Shahid. All rights reserved.
            </div>

            <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default">
              <span className="text-fg-subtle text-[10px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-red-500">❤</span>
              <span className="text-fg-subtle text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
              <span className="text-fg font-black text-xs md:text-sm tracking-normal ml-1">Ali</span>
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-fg-muted hover:text-fg group order-3"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" />
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  )
}
