import React from 'react'
import { Route } from './Route'
import { PageA } from './PageA'
import { PageB } from './PageB'

function App() {
  return Route({
    '/hello': <PageA />,
    '/world': <PageB />,
  })
}

export default App;
