import React from 'react';
import nanorouter  from "nanorouter"

export const Route = routes => {
  const router = nanorouter({ default: '/' })
  let nextComponent = null

  Object.keys(routes).forEach(path => {
    router.on(path, param => { nextComponent = routes[path] })
  })

  router.emit(window.location.pathname)

  return (
    <div className="container">
      {nextComponent}
    </div>
  )
}