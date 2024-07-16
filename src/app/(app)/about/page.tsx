import React from 'react'
import Aside from '@/components/Aside'
import About from '@/components/About'
import StyleSwitcher from '@/components/Style-Switcher'

const page = () => {
  return (
    <>
        <Aside/>
        <StyleSwitcher/>
        <About />
    </>
  )
}

export default page
