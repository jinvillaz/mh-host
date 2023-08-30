import { CustomLoadError } from '../components/CustomLoadError'

export const loadMF1Home = async () => {
  try {
    const module = await import('mf1/Home')
    return module
  } catch (error) {
    return { default: CustomLoadError }
  }
}

export const loadMF2Home = async () => {
  try {
    const module = await import('mf2/Home')
    return module
  } catch (error) {
    return { default: CustomLoadError }
  }
}
