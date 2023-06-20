import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'
import { Loading } from 'ui'

function App() {
  const router = createBrowserRouter(routes)
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
