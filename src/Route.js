import React from 'react';
import nanorouter  from "nanorouter"

export const useRouter = (routes) => {
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
