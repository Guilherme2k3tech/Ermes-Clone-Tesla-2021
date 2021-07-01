import { useContext, useEffect } from 'react'

import { useMotionValue } from "framer-motion"


import ModelsContext from './ModelsWrapper/ModelsContext'

export default function useWrapperScroll(){

    const { wrapperRef } = useContext(ModelsContext)



    const scrollY = useMotionValue(0)
    const scrollYProgress = useMotionValue(0)

  useEffect(() => {

    const elemento = wrapperRef.current


    if (elemento) {
      const updateScrollValue = () => {
        if (wrapperRef.current) {


          const { scrollTop, scrollHeight, offsetHeight } = elemento

          const fullScroll = scrollHeight - offsetHeight

          scrollY.set(scrollTop)
          scrollYProgress.set(scrollTop / fullScroll)
        }
      }

      elemento.addEventListener('scroll', updateScrollValue)

      return () =>
       elemento.removeEventListener('scroll', updateScrollValue)
    }
  }, [wrapperRef, scrollY, scrollYProgress])






    return{scrollY, scrollYProgress}
    
}