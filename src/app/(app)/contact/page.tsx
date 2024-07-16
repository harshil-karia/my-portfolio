import Aside from '@/components/Aside'
import Contact from '@/components/Contact'
import StyleSwitcher from '@/components/Style-Switcher'
import React from 'react'

const page = () => {
  return (
    <>
        <Aside />
        <StyleSwitcher />
        <Contact />
    </>
  )
}

export default page
