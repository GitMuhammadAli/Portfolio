/**
 * Skeuomorphic icon configuration.
 *
 * How to use:
 * 1. Go to https://www.skeudesign.com/
 * 2. Generate each icon using the prompt below
 * 3. Download the 1024x1024 PNG
 * 4. Save it to public/icons/<section>/<key>.png
 * 5. The components will auto-detect and use the PNG over the Lucide fallback
 *
 * Example: Generate "full-stack" icon, save as public/icons/about/full-stack.png
 */

export interface SkeuIcon {
  key: string
  path: string
  prompt: string
}

// ─── About Section ─────────────────────────────────────────────────
export const aboutIcons: Record<string, SkeuIcon> = {
  "full-stack": {
    key: "full-stack",
    path: "/icons/about/full-stack.png",
    prompt:
      "A 3D skeuomorphic icon of stacked code editor layers with brackets and terminal, indigo and violet gradient, glossy finish, dark background, 1024x1024",
  },
  backend: {
    key: "backend",
    path: "/icons/about/backend.png",
    prompt:
      "A 3D skeuomorphic icon of a server rack with glowing connection nodes, purple gradient, metallic texture, dark background, 1024x1024",
  },
  learner: {
    key: "learner",
    path: "/icons/about/learner.png",
    prompt:
      "A 3D skeuomorphic icon of a graduation cap on top of an open book with glowing pages, indigo and amber accents, dark background, 1024x1024",
  },
}

// ─── Contact Section ───────────────────────────────────────────────
export const contactIcons: Record<string, SkeuIcon> = {
  email: {
    key: "email",
    path: "/icons/contact/email.png",
    prompt:
      "A 3D skeuomorphic icon of a sealed envelope with a glowing @ symbol, indigo metallic finish, soft shadow, dark background, 1024x1024",
  },
  linkedin: {
    key: "linkedin",
    path: "/icons/contact/linkedin.png",
    prompt:
      "A 3D skeuomorphic icon of the LinkedIn logo on a glossy rounded square, blue-purple gradient, reflective surface, dark background, 1024x1024",
  },
  github: {
    key: "github",
    path: "/icons/contact/github.png",
    prompt:
      "A 3D skeuomorphic icon of the GitHub octocat logo on a glossy dark circle, subtle cyan glow, metallic rim, dark background, 1024x1024",
  },
}

// ─── Education Section ─────────────────────────────────────────────
export const educationIcons: Record<string, SkeuIcon> = {
  degree: {
    key: "degree",
    path: "/icons/education/degree.png",
    prompt:
      "A 3D skeuomorphic icon of a graduation cap with tassel and diploma scroll, indigo gradient, gold accents, glossy, dark background, 1024x1024",
  },
  certifications: {
    key: "certifications",
    path: "/icons/education/certifications.png",
    prompt:
      "A 3D skeuomorphic icon of a golden award badge with a checkmark and ribbon, amber metallic finish, glossy, dark background, 1024x1024",
  },
}

// ─── Project Icons ─────────────────────────────────────────────────
export const projectIcons: Record<string, SkeuIcon> = {
  devradar: {
    key: "devradar",
    path: "/icons/projects/devradar.png",
    prompt:
      "A 3D skeuomorphic icon of a radar screen with data pulses and skill nodes, purple and green glow, metallic bezel, dark background, 1024x1024",
  },
  carecircle: {
    key: "carecircle",
    path: "/icons/projects/carecircle.png",
    prompt:
      "A 3D skeuomorphic icon of a green heart surrounded by a caring circle of connected people, emerald gradient, glossy, dark background, 1024x1024",
  },
  jobpilot: {
    key: "jobpilot",
    path: "/icons/projects/jobpilot.png",
    prompt:
      "A 3D skeuomorphic icon of a rocket launching from a briefcase with email trails, teal and blue gradient, glossy, dark background, 1024x1024",
  },
  rentwise: {
    key: "rentwise",
    path: "/icons/projects/rentwise.png",
    prompt:
      "A 3D skeuomorphic icon of a house with a key and rental document, warm orange and brown, glossy roof, dark background, 1024x1024",
  },
  stockpilot: {
    key: "stockpilot",
    path: "/icons/projects/stockpilot.png",
    prompt:
      "A 3D skeuomorphic icon of a bar chart rising from a clipboard with inventory boxes, blue and cyan gradient, glossy, dark background, 1024x1024",
  },
  authkit: {
    key: "authkit",
    path: "/icons/projects/authkit.png",
    prompt:
      "A 3D skeuomorphic icon of a padlock with a shield and key, gold and indigo gradient, metallic, dark background, 1024x1024",
  },
  "fitness-planner": {
    key: "fitness-planner",
    path: "/icons/projects/fitness-planner.png",
    prompt:
      "A 3D skeuomorphic icon of a dumbbell with a calendar and heart rate line, red and orange gradient, glossy, dark background, 1024x1024",
  },
  "apod-react": {
    key: "apod-react",
    path: "/icons/projects/apod-react.png",
    prompt:
      "A 3D skeuomorphic icon of a telescope pointing at a galaxy with stars, deep blue and purple, glossy lens, dark background, 1024x1024",
  },
  "nova-plus": {
    key: "nova-plus",
    path: "/icons/projects/nova-plus.png",
    prompt:
      "A 3D skeuomorphic icon of a lightning bolt on a layered platform with tenant isolation, electric yellow and purple, glossy, dark background, 1024x1024",
  },
}
