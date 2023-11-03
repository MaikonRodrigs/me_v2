import React from 'react'
import SwitchToggle from '../Custom/SwitchToggle/SwitchToggle'
import { useStageStore } from '@/zustand/stages.store'
import useThemeStore from '@/zustand/theme.store'
import Text from '../Base/Text'
import { motion } from 'framer-motion'

interface ChoiceThemeProps {}

const ChoiceTheme: React.FC<ChoiceThemeProps> = ({}: ChoiceThemeProps) => {
  const [delay, setDelay] = React.useState<boolean>(true)
  const { setStage } = useStageStore()
  const { theme, toggleTheme } = useThemeStore()
  const bgTheme = `bg-${theme}-background`

  const ContinueDelay = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <Text
          onClick={() => console.log('Proxmi')}
          className='cursor-pointer hover:opacity-70'
        >
          Continue
        </Text>
      </motion.div>
    )
  }

  React.useEffect(() => {
    setTimeout(() => {
      setDelay(false)
    }, 1590)
  }, [])

  return (
    <div
      className={`${bgTheme} relative w-screen h-screen flex flex-col items-center justify-center`}
    >
      <div className='flex flex-col absolute h-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 20 }}
          exit={{ opacity: 100 }}
          transition={{ duration: 3 }}
          className='flex gap-4 items-center'
        >
          <SwitchToggle />
          <Text small={false}>{theme}</Text>
        </motion.div>
        <div className='text-center mt-4'>{delay ? '' : <ContinueDelay />}</div>
      </div>
    </div>
  )
}

export default ChoiceTheme
