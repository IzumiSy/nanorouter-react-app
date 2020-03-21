import React from 'react'
import { useRouter } from './Route'
import { PageA } from './PageA'
import { PageB } from './PageB'

function App() {
  const [history, router] = useRouter({
    '/hello': <PageA />,
    '/world': <PageB />,
  })

  return (
    <div className="container">
      {router}
      <button onClick={() => history.push("/world")}>world</button>
      <button onClick={() => history.push("/hello")}>hello</button>
    </div>
  )
}

export default App;
