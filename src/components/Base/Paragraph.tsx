import { ParagraphTypes } from '@/enums/Paragraph'
import useThemeStore from '@/zustand/theme.store'
import React from 'react'

interface ParagraphProps {
  children: React.ReactNode
  type: ParagraphTypes
  className?: string
}

const Paragraph: React.FC<ParagraphProps> = ({
  type,
  className,
  children,
}: ParagraphProps) => {
  const { theme } = useThemeStore()
  const Types = React.useMemo(() => {
    switch (type) {
      case ParagraphTypes.Title:
        return 'text-2xl'
      case ParagraphTypes.Subtitle:
        return 'text-lg'
    }
  }, [type])
  return (
    <div className={`${Types} ${className} text-${theme}-text`}>{children}</div>
  )
}

export default Paragraph
