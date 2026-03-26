'use client'
import { useId } from 'react'
import { cn } from '@/lib/utils'

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function FloatingLabelInput({ label, className, ...props }: FloatingLabelInputProps) {
  const id = useId()
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-zinc-500 transition-all
          group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-indigo-400
          has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-indigo-400"
      >
        <span className="inline-flex bg-[#0a0a0f] px-2">{label}</span>
      </label>
      <input
        id={id}
        className={cn(
          'flex h-10 w-full rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-sm text-white',
          'shadow-sm transition-shadow placeholder:text-transparent',
          'focus-visible:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20',
          className
        )}
        placeholder=""
        {...props}
      />
    </div>
  )
}
