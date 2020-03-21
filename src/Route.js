import React from 'react';
import nanorouter  from "nanorouter"

const useRouter = (routes) => {
  const _router = (routes, initialPath) => React.useMemo(() => {
    const router = nanorouter({ default: '/' })
    let nextComponent = null

    Object.keys(routes).forEach(path => {
      router.on(path, param => { nextComponent = routes[path] })
    })

    router.emit(initialPath)

    return nextComponent
  }, [routes, initialPath])

  return initialPath => _router(routes, initialPath)
}

export const Route = routes => {
  const router = useRouter(routes)
  const nextComponent = router(window.location.pathname)

  return (
    <div className="container">
      {nextComponent}
    </div>
  )
}
