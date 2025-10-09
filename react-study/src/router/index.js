import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Foo from '../views/Foo/Foo';
import Bar from '../views/Bar/Bar';
import { redirect } from 'react-router-dom';

// 路由表
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'foo/:id',
                        element: <Foo />
                    },
                    {
                        path: 'bar',
                        element: <Bar />
                    }
                ]
            }
        ]
    }
];

// 路由表组件写法
/* const routes = createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
    </Route>
) */

// history模式
const router = createBrowserRouter(routes)

export default router