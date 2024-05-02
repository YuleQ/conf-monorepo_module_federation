import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from './App.module.scss'

export const App = () => {

  return (
    <div>
        <h1 className={classes.testing}>SHOP Dodule </h1>
        <Outlet/>
    </div>
  )
}
