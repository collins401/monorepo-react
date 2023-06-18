import { Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'

import './App.css'

function App() {
  const Routes = () => {
    const main = useRoutes(routes)
    return main
  }
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  )
}

export default App
