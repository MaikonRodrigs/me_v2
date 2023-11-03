import useThemeStore from '@/zustand/theme.store'
import { SendHorizontal, UserCircle } from 'lucide-react'
import Loader from 'react-loading'
import React from 'react'

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  className?: string
  inputRef?: string
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  inputRef,
  ...props
}: InputProps) => {
  const { theme, toggleTheme } = useThemeStore()
  const textTheme = `text-${theme}-text`
  return (
    <>
      <div
        className={`flex items-center justify-center border-2 p-2 rounded-lg 
      ${theme === 'dark' ? 'border-gray-700' : textTheme}`}
      >
        <UserCircle className={`${textTheme}`} />
        <input
          type={type}
          className={`${textTheme} focus:outline-none ml-4 bg-transparent ${className} text-sm 
        placeholder:${textTheme}`}
          ref={inputRef}
          {...props}
        />
      </div>
    </>
  )
}

export default Input
