import { StageTypesContext } from '@/types/Stages.types'
import { create } from 'zustand'

interface StageTypes {
  stage: StageTypesContext
  name: string
  setName: (name: string) => void
  setStage: (stage: StageTypesContext) => void
}

const Store = create<StageTypes>()

export const useStageStore = Store((set) => ({
  stage: 'InsertName',
  name: '',
  setStage: (stage: StageTypesContext) => set({ stage }),
  setName: (name: string) => set({ name }),
}))
