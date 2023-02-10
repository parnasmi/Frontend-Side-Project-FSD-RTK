import { Suspense } from 'react'
import {Routes, Route} from 'react-router-dom'
import { routes } from '../config/routes'

export default function AppRouter() {
  return (
    <Suspense fallback={<>Loading</>}>
        <Routes>
          {Object.values(routes).map((routeProps) => {
            return <Route  key={routeProps.path} 
            {...routeProps}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="page-wrapper">
                    {routeProps.element}
                </div>
              </Suspense>
            }
            />
          })}
        </Routes>
    </Suspense>
  )
}
