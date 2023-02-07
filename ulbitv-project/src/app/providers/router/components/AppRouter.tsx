import { Suspense } from 'react'
import {Routes, Route} from 'react-router-dom'
import { routes } from '../config/routes'

export default function AppRouter() {
  return (
    <Suspense fallback={<>Loading</>}>
        <Routes>
          {Object.values(routes).map(routeProps => {
            return <Route  key={routeProps.path} {...routeProps}/>
          })}
        </Routes>
    </Suspense>
  )
}
