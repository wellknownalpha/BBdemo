'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const variants = {
  glass: 'glass',
  gradient: 'card-gradient',
  hover: 'glass hover-lift',
  elevated: 'glass shadow-lg shadow-black/20',
  outline: 'border border-neutral-800 bg-transparent',
  ghost: 'bg-transparent border-none',
} as const

type CardVariant = keyof typeof variants

interface CardProps {
  className?: string
  variant?: CardVariant
  as?: 'div' | 'section' | 'article'
  children?: React.ReactNode
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  id?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', as: Component = 'div', children, onClick, onMouseEnter, onMouseLeave, id }, ref) => {
    const MotionTag = motion[Component as keyof typeof motion] as typeof motion.div

    return (
      <MotionTag
        ref={ref}
        id={id}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={variant === 'hover' ? { y: -4 } : undefined}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={cn(
          'rounded-2xl',
          variants[variant],
          className,
        )}
      >
        {children}
      </MotionTag>
    )
  },
)
Card.displayName = 'Card'

interface CardHeaderProps {
  className?: string
  children?: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn('mb-4', className)}>
      {children}
    </div>
  ),
)
CardHeader.displayName = 'CardHeader'

interface CardTitleProps {
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  children?: React.ReactNode
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Tag = 'h3', children }, ref) => (
    <Tag
      ref={ref}
      className={cn('text-heading-sm font-semibold text-white', className)}
    >
      {children}
    </Tag>
  ),
)
CardTitle.displayName = 'CardTitle'

interface CardDescriptionProps {
  className?: string
  children?: React.ReactNode
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children }, ref) => (
    <p ref={ref} className={cn('text-sm text-neutral-400', className)}>
      {children}
    </p>
  ),
)
CardDescription.displayName = 'CardDescription'

interface CardContentProps {
  className?: string
  children?: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  ),
)
CardContent.displayName = 'CardContent'

interface CardFooterProps {
  className?: string
  children?: React.ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn('mt-4 flex items-center gap-2', className)}>
      {children}
    </div>
  ),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export type { CardProps, CardVariant }
