import MainFooter from 'layouts/MainFooter'
import MainNavbar from 'layouts/MainNavbar'
import * as React from 'react'
import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom'

import { useEffect } from 'react'

const Home = React.lazy(() => import('./pages/Home'))

export default function App() {
  useEffect(() => {}, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainNavbar />
              <Outlet />
              <div className="max-centered">
                <hr role="separator" />
                <MainFooter />
              </div>
            </>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
