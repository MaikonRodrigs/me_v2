import { ParagraphTypes } from '@/enums/Paragraph'
import useThemeStore from '@/zustand/theme.store'
import React from 'react'

interface ParagraphProps extends React.HTMLProps<HTMLSpanElement> {
  children: React.ReactNode
  className?: string
  small?: boolean
}

const Text: React.FC<ParagraphProps> = ({
  className,
  small = true,
  children,
}: ParagraphProps) => {
  const { theme } = useThemeStore()
  return (
    <div
      className={`${
        small ? 'text-[10px]' : 'text-base'
      } ${className} text-${theme}-text`}
    >
      {children}
    </div>
  )
}

export default Text
