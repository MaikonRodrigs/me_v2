import useThemeStore from '@/zustand/theme.store'
import React from 'react'
import ToggleSwitch from '../Custom/SwitchToggle/SwitchToggle'
import Loader from 'react-loading'
import Paragraph from '../Base/Paragraph'
import { ParagraphTypes } from '@/enums/Paragraph'
import { useStageStore } from '@/zustand/stages.store'

interface LoadingPreferencProps {}

const LoadingPreference: React.FC<
  LoadingPreferencProps
> = ({}: LoadingPreferencProps) => {
  const { theme, toggleTheme } = useThemeStore()
  const { setStage } = useStageStore()
  const bgTheme = `bg-${theme}-background`

  React.useEffect(() => {
    setTimeout(() => {
      setStage('ChoiseTheme')
    }, 3000)
  }, [])
  return (
    <div
      className={`${bgTheme} w-screen h-screen flex items-center justify-center flex-col`}
    >
      <div className='flex flex-col items-center'>
        <Paragraph type={ParagraphTypes.Subtitle} className='mb-4'>
          Please, choise your prefence theme, better experience...
        </Paragraph>
        <Loader
          type='bars'
          color={`${theme === 'light' ? 'black' : 'white'}`}
          height={30}
          width={30}
          delay={10}
          className='animate-slow'
        />
        {/* <ToggleSwitch /> */}
      </div>
    </div>
  )
}

export default LoadingPreference
