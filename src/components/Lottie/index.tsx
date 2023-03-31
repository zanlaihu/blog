import { AnimationConfig, AnimationItem } from 'lottie-web'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

export interface LottieProps extends Omit<AnimationConfig, 'container'> {
  animationDate?: any
  className?: string
  destroyAfterComplete?: boolean
  isObserver?: boolean
  path?: string
}

const Lottie = (props: LottieProps) => {
  const {
    path,
    loop = -1,
    autoplay = true,
    renderer = 'svg',
    className,
    isObserver = true,
    animationDate,
    destroyAfterComplete,
  } = props
  const [start, setStart] = useState<boolean>(false)
  const [inited, setInited] = useState<boolean>(false)
  const [target, setTarget] = useState<AnimationItem>()
  const container = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(!container.current||inited) return;
    
  },[container, props])



  return <div></div>
}

export default Lottie
