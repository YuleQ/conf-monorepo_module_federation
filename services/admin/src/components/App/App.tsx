import { Outlet } from 'react-router-dom'
import classes from './App.module.scss'

export const App = () => {

  return (
    <div>
      <h1 className={classes.test}>ADMIN MODULE</h1>
      <Outlet/>
    </div>
  )
}
