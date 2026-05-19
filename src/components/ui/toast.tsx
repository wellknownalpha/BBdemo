'use client'

import { Toaster as SonnerToaster } from 'sonner'
import { cn } from '@/lib/utils'

interface ToastProviderProps {
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'
  richColors?: boolean
  closeButton?: boolean
}

const defaultProps: ToastProviderProps = {
  position: 'top-right',
  richColors: true,
  closeButton: true,
}

function ToastProvider({ position, richColors, closeButton }: ToastProviderProps) {
  return (
    <SonnerToaster
      position={position ?? defaultProps.position}
      richColors={richColors ?? defaultProps.richColors}
      closeButton={closeButton ?? defaultProps.closeButton}
      toastOptions={{
        className: cn(
          '!border !border-white/10 !shadow-lg !shadow-black/20',
          '!bg-neutral-900/95 !backdrop-blur-xl',
        ),
        descriptionClassName: '!text-neutral-400',
      }}
      theme="dark"
    />
  )
}

export { ToastProvider }
export type { ToastProviderProps }
