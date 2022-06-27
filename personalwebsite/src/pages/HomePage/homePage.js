import React from 'react'
import ScreenOne from './screens/screenOne/screenOne'
import ScreenTwo from './screens/screenTwo/screenTwo'
import ScreenThree from './screens/screenThree/screenThree'
import ScreenFour from './screens/screenFour/screenFour'
function homePage() {
  return (
    <div className='home_display'>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
    </div>
  )
}

export default homePage