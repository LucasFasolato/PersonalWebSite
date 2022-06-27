import React from 'react'
import ScreenOne from './screens/screenOne/screenOne'
import ScreenTwo from './screens/screenTwo/screenTwo'
import ScreenThree from './screens/screenThree/screenThree'
import ScreenFour from './screens/screenFour/screenFour'
import ScreenFive from './screens/screenFive/screenFive'
function homePage() {
  return (
    <div>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
    </div>
  )
}

export default homePage