import React from 'react'
import Input from '../Base/Input'
import { useFormik } from 'formik'
import useThemeStore from '@/zustand/theme.store'
import { useStageStore } from '@/zustand/stages.store'
import Paragraph from '../Base/Paragraph'
import { ParagraphTypes } from '@/enums/Paragraph'
import Text from '../Base/Text'
import Loader from 'react-loading'

interface InsertNameProps {}

const InsertName: React.FC<
  InsertNameProps
> = ({}: InsertNameProps) => {
  const [show, setShow] = React.useState<boolean>(false)
  const { setStage, setName, name } = useStageStore()
  const { theme, toggleTheme } = useThemeStore()
  const bgTheme = `bg-${theme}-background`
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      setName(values.name)
      setShow(true)
      setTimeout(() => {
        setStage('LoadingPreference')
      }, 5000)
    },
  })

  return (
    <div
      className={`${bgTheme} w-screen h-screen flex items-center justify-center flex-col`}
    >
      {show ? (
        <div className='gap-8 flex flex-col items-center justify-center'>
          <Loader
            type='spokes'
            color={`${
              theme === 'light' ? 'black' : 'white'
            }`}
            height={40}
            width={40}
            delay={0}
            className=''
          />
          <Paragraph type={ParagraphTypes.Title}>
            Hy, {name}
          </Paragraph>
          <Text className='opacity-40 mt-[-20px]' >
            One moment, please
          </Text>
        </div>
      ) : (
        <form
          className='flex flex-col items-center h-auto'
          onSubmit={formik.handleSubmit}
        >
          <Input
            type='text'
            id='name'
            autoComplete='off'
            name='name'
            placeholder='Insert your name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text className='opacity-40 mt-4'>
            Hey, press enter for submit.
          </Text>
        </form>
      )}
    </div>
  )
}

export default InsertName
