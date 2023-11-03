import { useStageStore } from '@/zustand/stages.store'
import React from 'react'
import LoadingPreference from './Presentation'
import InsertName from './InsertName'
import ChoiceTheme from './ChoiceTheme'

interface StagesProps {}

const Stages: React.FC<StagesProps> = ({}: StagesProps) => {
  const { stage, setStage } = useStageStore()

  const StageSelect = React.useMemo(() => {
    switch (stage) {
      case 'LoadingPreference':
        return <LoadingPreference />
      case 'ChoiseTheme':
        return <ChoiceTheme />
      case 'InsertName':
        return <InsertName />
    }
  }, [stage])

  return <>{StageSelect}</>
}

export default Stages
