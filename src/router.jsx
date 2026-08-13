import { createBrowserRouter } from 'react-router'
import  App from './app'
import NavBar from './ui/navbar.comp'
import {Toggle} from './tabs/toggle'
import Counter from './tabs/counter'
import FavColor from './tabs/favcolor'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/foo',
        element:
        <>
            <NavBar />
          <div> Hello </div>
        </>
    },
    {
        path: '/toggle',
        element:
        <>
          <NavBar /> <br/>
        <div> <Toggle /> </div>
      </>
    },
    {
        path: '/counter',
        element:  <>
          <NavBar /> <br />
        <div> <Counter /> </div>
      </>,
    },
    {
        path: '/favcolor',
        element:  <>
          <NavBar />
        <div> <FavColor /> </div>
      </>,
    },

])
