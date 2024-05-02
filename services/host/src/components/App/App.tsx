import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { adminRoutes } from '@packages/shared/src/routers/admin'
import { shopRoutes } from '@packages/shared/src/routers/shop'

export const App = () => {
  return (
    <div>
      <div>
        <h1>PAGE</h1>
      </div>
        <Link to={ adminRoutes.about}>about</Link>
        <br />
        <Link to={shopRoutes.main}>shop</Link>
        <Outlet/>
    </div>
  )
}
