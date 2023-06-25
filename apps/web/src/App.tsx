import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'
import { Loading } from 'ui'
import AntConfigProvider from './layout/configProvider'

function App() {
  const router = createBrowserRouter(routes)
  return (
    <Suspense fallback={<Loading />}>
      <AntConfigProvider>
        <RouterProvider router={router} />
      </AntConfigProvider>
    </Suspense>
  )
}

export default App
