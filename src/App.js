import React from 'react'
import { useRouter } from './Route'
import { PageA } from './PageA'
import { PageB } from './PageB'

function App() {
  const router = useRouter({
    '/hello': <PageA />,
    '/world': <PageB />,
  })

  return (
    <div className="container">
      {router(window.location.pathname)}
    </div>
  )
}

export default App;
