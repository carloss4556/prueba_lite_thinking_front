import { useState } from 'react'

import  {LoginView} from './views/LoginView/AppLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < LoginView>
      </LoginView>
    </>
  )
}

export default App
