import useThemeStore from '@/zustand/theme.store'
import React from 'react'
import Switch from 'react-switch'

interface SwitchToggleProps {}

const SwitchToggle: React.FC<SwitchToggleProps> = ({}) => {
  const { theme, toggleTheme } = useThemeStore()
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === 'light' ? false : true}
      checkedIcon={false}
      uncheckedIcon={false}
      height={20}
      width={40}
      handleDiameter={16}
      offHandleColor='#333333'
      offColor='#C4C4C4'
      onColor='#666'
    />
  )
}

export default SwitchToggle
