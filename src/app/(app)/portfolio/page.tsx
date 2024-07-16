import Aside from '@/components/Aside'
import Portfolio from '@/components/Portfolio'
import StyleSwitcher from '@/components/Style-Switcher'
import React from 'react'

const page = () => {
  return (
    <>
        <Aside/>
        <StyleSwitcher />
        <Portfolio />
    </>
  )
}

export default page
