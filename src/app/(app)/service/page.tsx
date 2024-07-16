import Aside from '@/components/Aside'
import Services from '@/components/Services'
import StyleSwitcher from '@/components/Style-Switcher'
import React from 'react'

const page = () => {
  return (
    <>
      <Aside/>
      <StyleSwitcher />
      <Services />
    </>
  )
}

export default page
