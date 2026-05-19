'use client'

import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'nav'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'max-w-none',
} as const

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Tag = 'div', size = 'lg', children, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          'mx-auto w-full px-4 sm:px-6 lg:px-8',
          sizeMap[size],
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    )
  },
)
Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
