'use client'

import { cn } from '@/lib/utils'

interface SkeuIconProps {
  icon: keyof typeof icons
  size?: number
  className?: string
}

export function SkeuIcon({ icon, size = 48, className }: SkeuIconProps) {
  const IconSvg = icons[icon]
  return (
    <div
      className={cn('relative shrink-0', className)}
      style={{ width: size, height: size }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-40"
        style={{ background: iconGlows[icon] }}
      />
      {/* Icon body */}
      <div className="relative w-full h-full">
        <IconSvg size={size} />
      </div>
    </div>
  )
}

// ─── Glow colors per icon ──────────────────────────────────────────
const iconGlows: Record<string, string> = {
  'full-stack': '#6366f1',
  backend: '#8b5cf6',
  learner: '#f59e0b',
  email: '#6366f1',
  linkedin: '#8b5cf6',
  github: '#06b6d4',
  degree: '#6366f1',
  certifications: '#f59e0b',
  devradar: '#8b5cf6',
  carecircle: '#10b981',
  jobpilot: '#14b8a6',
  rentwise: '#f97316',
  stockpilot: '#3b82f6',
  authkit: '#eab308',
  'fitness-planner': '#ef4444',
  'apod-react': '#6366f1',
  'nova-plus': '#a855f7',
}

// ─── Shared wrapper for 3D base plate ──────────────────────────────
function IconBase({
  children,
  size,
  bg1,
  bg2,
  border,
}: {
  children: React.ReactNode
  size: number
  bg1: string
  bg2: string
  border: string
}) {
  const r = size * 0.25
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`bg-${bg1.replace('#', '')}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
        <filter id="skeu-shadow" x="-20%" y="-10%" width="140%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
        </filter>
        <linearGradient id="sheen" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Base plate */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx={r}
        fill={`url(#bg-${bg1.replace('#', '')})`}
        filter="url(#skeu-shadow)"
      />
      {/* Inner highlight */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx={r}
        fill="url(#sheen)"
      />
      {/* Border */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx={r}
        stroke={border}
        strokeWidth="1.5"
        fill="none"
      />
      {children}
    </svg>
  )
}

// ─── Icon SVGs ─────────────────────────────────────────────────────

function FullStackIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#4338ca" bg2="#6366f1" border="rgba(255,255,255,0.15)">
      {/* Code brackets */}
      <text x="30" y="58" fontSize="32" fontFamily="monospace" fontWeight="bold" fill="#c7d2fe" opacity="0.9">&lt;/&gt;</text>
      {/* Bottom layer accent */}
      <rect x="28" y="66" width="44" height="4" rx="2" fill="#818cf8" opacity="0.5" />
      <rect x="34" y="73" width="32" height="3" rx="1.5" fill="#818cf8" opacity="0.3" />
    </IconBase>
  )
}

function BackendIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#6d28d9" bg2="#8b5cf6" border="rgba(255,255,255,0.15)">
      {/* Server rack lines */}
      <rect x="30" y="30" width="40" height="10" rx="3" fill="#c4b5fd" opacity="0.3" />
      <rect x="30" y="44" width="40" height="10" rx="3" fill="#c4b5fd" opacity="0.3" />
      <rect x="30" y="58" width="40" height="10" rx="3" fill="#c4b5fd" opacity="0.3" />
      {/* Status dots */}
      <circle cx="36" cy="35" r="2" fill="#4ade80" />
      <circle cx="36" cy="49" r="2" fill="#4ade80" />
      <circle cx="36" cy="63" r="2" fill="#facc15" />
      {/* Drive slots */}
      <rect x="56" y="33" width="10" height="4" rx="1" fill="#ddd6fe" opacity="0.4" />
      <rect x="56" y="47" width="10" height="4" rx="1" fill="#ddd6fe" opacity="0.4" />
      <rect x="56" y="61" width="10" height="4" rx="1" fill="#ddd6fe" opacity="0.4" />
    </IconBase>
  )
}

function LearnerIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#b45309" bg2="#f59e0b" border="rgba(255,255,255,0.15)">
      {/* Book base */}
      <rect x="28" y="42" width="44" height="30" rx="3" fill="#fde68a" opacity="0.3" />
      <line x1="50" y1="42" x2="50" y2="72" stroke="#fde68a" strokeWidth="1" opacity="0.5" />
      {/* Graduation cap */}
      <polygon points="50,24 30,36 50,48 70,36" fill="#fef3c7" opacity="0.8" />
      <polygon points="50,48 30,36 30,42 50,54 70,42 70,36" fill="#fcd34d" opacity="0.4" />
      <line x1="66" y1="36" x2="66" y2="50" stroke="#fcd34d" strokeWidth="1.5" />
      <circle cx="66" cy="52" r="2" fill="#fcd34d" />
    </IconBase>
  )
}

function EmailIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#4338ca" bg2="#6366f1" border="rgba(255,255,255,0.15)">
      {/* Envelope body */}
      <rect x="26" y="36" width="48" height="32" rx="4" fill="#c7d2fe" opacity="0.25" stroke="#a5b4fc" strokeWidth="1" />
      {/* Envelope flap */}
      <path d="M26 40 L50 56 L74 40" stroke="#a5b4fc" strokeWidth="1.5" fill="none" />
      {/* @ symbol */}
      <text x="42" y="33" fontSize="14" fontWeight="bold" fill="#e0e7ff" opacity="0.7">@</text>
    </IconBase>
  )
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#4338ca" bg2="#7c3aed" border="rgba(255,255,255,0.15)">
      <text x="34" y="65" fontSize="40" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#e0e7ff" opacity="0.85">in</text>
    </IconBase>
  )
}

function GithubIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#0e7490" bg2="#06b6d4" border="rgba(255,255,255,0.15)">
      {/* Octocat simplified */}
      <circle cx="50" cy="46" r="16" fill="#cffafe" opacity="0.25" stroke="#a5f3fc" strokeWidth="1" />
      {/* Eyes */}
      <circle cx="44" cy="43" r="2.5" fill="#ecfeff" opacity="0.8" />
      <circle cx="56" cy="43" r="2.5" fill="#ecfeff" opacity="0.8" />
      {/* Tentacles */}
      <path d="M38 54 Q34 62 30 64" stroke="#a5f3fc" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M62 54 Q66 62 70 64" stroke="#a5f3fc" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Mouth */}
      <path d="M44 50 Q50 54 56 50" stroke="#a5f3fc" strokeWidth="1" fill="none" opacity="0.4" />
    </IconBase>
  )
}

function DegreeIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#4338ca" bg2="#6366f1" border="rgba(255,255,255,0.15)">
      {/* Graduation cap */}
      <polygon points="50,26 28,40 50,54 72,40" fill="#e0e7ff" opacity="0.7" />
      <polygon points="50,54 28,40 28,48 50,62 72,48 72,40" fill="#a5b4fc" opacity="0.4" />
      {/* Tassel */}
      <line x1="68" y1="40" x2="68" y2="58" stroke="#fbbf24" strokeWidth="2" />
      <circle cx="68" cy="60" r="3" fill="#fbbf24" opacity="0.8" />
    </IconBase>
  )
}

function CertificationsIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#b45309" bg2="#d97706" border="rgba(255,255,255,0.15)">
      {/* Medal body */}
      <circle cx="50" cy="48" r="16" fill="#fef3c7" opacity="0.25" stroke="#fcd34d" strokeWidth="1.5" />
      {/* Star */}
      <polygon
        points="50,36 53,44 62,44 55,50 58,58 50,53 42,58 45,50 38,44 47,44"
        fill="#fcd34d"
        opacity="0.7"
      />
      {/* Ribbon */}
      <path d="M38 60 L34 74 L42 68 L50 74 L58 68 L66 74 L62 60" fill="#f59e0b" opacity="0.4" />
    </IconBase>
  )
}

function DevradarIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#6d28d9" bg2="#8b5cf6" border="rgba(255,255,255,0.12)">
      <circle cx="50" cy="50" r="22" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="50" cy="50" r="14" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.2" />
      <circle cx="50" cy="50" r="6" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.15" />
      <line x1="50" y1="28" x2="50" y2="72" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.2" />
      <line x1="28" y1="50" x2="72" y2="50" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.2" />
      {/* Sweep line */}
      <line x1="50" y1="50" x2="68" y2="34" stroke="#4ade80" strokeWidth="2" opacity="0.8" />
      {/* Blips */}
      <circle cx="60" cy="38" r="3" fill="#4ade80" opacity="0.7" />
      <circle cx="42" cy="42" r="2" fill="#4ade80" opacity="0.4" />
    </IconBase>
  )
}

function CarecircleIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#047857" bg2="#10b981" border="rgba(255,255,255,0.12)">
      {/* Heart */}
      <path
        d="M50 65 C50 65 30 50 30 40 C30 32 38 28 44 32 L50 38 L56 32 C62 28 70 32 70 40 C70 50 50 65 50 65Z"
        fill="#6ee7b7"
        opacity="0.6"
      />
      {/* Plus */}
      <rect x="47" y="42" width="6" height="16" rx="2" fill="#ecfdf5" opacity="0.8" />
      <rect x="42" y="47" width="16" height="6" rx="2" fill="#ecfdf5" opacity="0.8" />
    </IconBase>
  )
}

function JobpilotIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#0f766e" bg2="#14b8a6" border="rgba(255,255,255,0.12)">
      {/* Rocket body */}
      <path d="M50 28 L42 52 L50 48 L58 52 Z" fill="#ccfbf1" opacity="0.7" />
      {/* Flames */}
      <path d="M44 52 L50 68 L56 52" fill="#fbbf24" opacity="0.6" />
      {/* Fins */}
      <path d="M42 48 L34 56 L42 52Z" fill="#99f6e4" opacity="0.4" />
      <path d="M58 48 L66 56 L58 52Z" fill="#99f6e4" opacity="0.4" />
      {/* Window */}
      <circle cx="50" cy="40" r="4" fill="#5eead4" opacity="0.5" />
    </IconBase>
  )
}

function RentwiseIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#c2410c" bg2="#f97316" border="rgba(255,255,255,0.12)">
      {/* House */}
      <path d="M50 28 L28 46 L72 46Z" fill="#fed7aa" opacity="0.6" />
      <rect x="36" y="46" width="28" height="24" fill="#fdba74" opacity="0.3" />
      {/* Door */}
      <rect x="44" y="52" width="12" height="18" rx="2" fill="#fed7aa" opacity="0.4" />
      {/* Key */}
      <circle cx="54" cy="62" r="2" fill="#fef3c7" opacity="0.7" />
    </IconBase>
  )
}

function StockpilotIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#1d4ed8" bg2="#3b82f6" border="rgba(255,255,255,0.12)">
      {/* Chart bars */}
      <rect x="30" y="56" width="8" height="16" rx="2" fill="#93c5fd" opacity="0.5" />
      <rect x="42" y="44" width="8" height="28" rx="2" fill="#93c5fd" opacity="0.6" />
      <rect x="54" y="36" width="8" height="36" rx="2" fill="#93c5fd" opacity="0.7" />
      <rect x="66" y="28" width="8" height="44" rx="2" fill="#bfdbfe" opacity="0.8" />
      {/* Trend line */}
      <polyline points="34,54 46,42 58,34 70,26" stroke="#dbeafe" strokeWidth="2" fill="none" opacity="0.6" />
    </IconBase>
  )
}

function AuthkitIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#a16207" bg2="#ca8a04" border="rgba(255,255,255,0.12)">
      {/* Shield */}
      <path
        d="M50 26 L30 36 L30 52 C30 64 50 74 50 74 C50 74 70 64 70 52 L70 36Z"
        fill="#fef3c7"
        opacity="0.25"
        stroke="#fcd34d"
        strokeWidth="1.5"
      />
      {/* Lock */}
      <rect x="42" y="48" width="16" height="14" rx="3" fill="#fcd34d" opacity="0.6" />
      <path d="M45 48 L45 42 C45 38 55 38 55 42 L55 48" stroke="#fcd34d" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="50" cy="55" r="2" fill="#422006" opacity="0.6" />
    </IconBase>
  )
}

function FitnessPlannerIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#b91c1c" bg2="#ef4444" border="rgba(255,255,255,0.12)">
      {/* Dumbbell */}
      <rect x="28" y="44" width="12" height="14" rx="3" fill="#fecaca" opacity="0.5" />
      <rect x="60" y="44" width="12" height="14" rx="3" fill="#fecaca" opacity="0.5" />
      <rect x="40" y="48" width="20" height="6" rx="2" fill="#fca5a5" opacity="0.4" />
      {/* Heart rate */}
      <polyline points="30,68 38,68 42,60 46,74 50,64 54,68 70,68" stroke="#fca5a5" strokeWidth="2" fill="none" opacity="0.6" />
    </IconBase>
  )
}

function ApodReactIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#3730a3" bg2="#6366f1" border="rgba(255,255,255,0.12)">
      {/* Telescope */}
      <rect x="46" y="30" width="8" height="30" rx="2" fill="#c7d2fe" opacity="0.4" transform="rotate(-20 50 45)" />
      <circle cx="42" cy="32" r="6" fill="#a5b4fc" opacity="0.3" stroke="#c7d2fe" strokeWidth="1" />
      {/* Stars */}
      <circle cx="64" cy="30" r="2" fill="#fcd34d" opacity="0.8" />
      <circle cx="70" cy="42" r="1.5" fill="#fcd34d" opacity="0.6" />
      <circle cx="34" cy="62" r="1" fill="#fcd34d" opacity="0.5" />
      <circle cx="66" cy="56" r="1.5" fill="#e0e7ff" opacity="0.4" />
      {/* Tripod legs */}
      <line x1="50" y1="58" x2="38" y2="72" stroke="#a5b4fc" strokeWidth="1.5" opacity="0.4" />
      <line x1="50" y1="58" x2="62" y2="72" stroke="#a5b4fc" strokeWidth="1.5" opacity="0.4" />
    </IconBase>
  )
}

function NovaPlusIcon({ size }: { size: number }) {
  return (
    <IconBase size={size} bg1="#7e22ce" bg2="#a855f7" border="rgba(255,255,255,0.12)">
      {/* Lightning bolt */}
      <polygon points="54,24 38,52 48,52 46,76 62,48 52,48" fill="#e9d5ff" opacity="0.7" />
      {/* Platform layers */}
      <ellipse cx="50" cy="72" rx="20" ry="4" fill="#d8b4fe" opacity="0.2" />
      <ellipse cx="50" cy="68" rx="16" ry="3" fill="#d8b4fe" opacity="0.15" />
    </IconBase>
  )
}

// ─── Icon registry ─────────────────────────────────────────────────
const icons = {
  'full-stack': FullStackIcon,
  backend: BackendIcon,
  learner: LearnerIcon,
  email: EmailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  degree: DegreeIcon,
  certifications: CertificationsIcon,
  devradar: DevradarIcon,
  carecircle: CarecircleIcon,
  jobpilot: JobpilotIcon,
  rentwise: RentwiseIcon,
  stockpilot: StockpilotIcon,
  authkit: AuthkitIcon,
  'fitness-planner': FitnessPlannerIcon,
  'apod-react': ApodReactIcon,
  'nova-plus': NovaPlusIcon,
} as const

export type SkeuIconName = keyof typeof icons
