import Home from '../../screens/Home/Home'
import About from '../../screens/About/About'
import Param from '../../screens/Params/Param'
import Error from '../../screens/Error/Error'

export const RouteList = [
   
    {path: '/',
element: <Home />},



{path: '/card',
element: <Param />},
{path: '/card/:productId',
element: <Param />},
    {path: '/about',
element: <About />},
    {path: '/about/:id',
element: <About />},
    {path: '*',
element: <Error />},
]