import React from 'react';
import nanorouter  from "nanorouter"
import { createBrowserHistory } from 'history'

export const useRouter = (routes) => {
  const history = React.useRef(createBrowserHistory())
  const [currentPath, setCurrentPath] = React.useState(history.current.location.pathname)

  React.useEffect(() => {
    history.current.listen((location, action) => {
      setCurrentPath(location.pathname)
    })
  }, [])

  const nextComponent = React.useRef(null)
  const router = nanorouter({ default: "/" })

  Object.keys(routes).forEach(path => {
    router.on(path, param => { nextComponent.current = routes[path] })
  })

  router.emit(currentPath)

  return [history.current, nextComponent.current]
}
