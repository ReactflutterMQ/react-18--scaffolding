import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, Navigate, redirect } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Foo from '../views/Foo/Foo';
import Bar from '../views/Bar/Bar';

// 路由表
const routes = [
    {
        path: '/',
        element: <App />,
        // errorElement: <div>404，出错了</div>, //全局配置，所有路由都生效
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
                        index: true,
                        // element: <div>默认展示内容</div> //默认子路由
                        element: <Navigate to="/about/foo/123" /> //实际上就是重定向，类似于vue的redirect
                    },
                    {
                        path: 'foo/:id',
                        element: <Foo />
                    },
                    {
                        path: 'bar',
                        element: <Bar />,
                        loader:async() => { //react路由独享守卫
                            /* console.log('bar');
                            let ret = await new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve({ errcode: 0 })
                                }, 2000);
                            })
                            return ret */
                            let ret = await new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve({ errcode: Math.random() > 0.5 ? 0 : -1 })
                                }, 2000);
                            })
                            if (ret.errcode === 0) {
                                return ret
                            } else {
                                console.log('/login');
                                // return <Navigate to='/login' />
                                return redirect('/login') //loader中不能返回组件，只能返回redirect
                            }
                        }
                    },
                    {
                        path: '*', //当about路由下的子路由没有匹配到时，展示当前路由404页面
                        element: <div>about路由下的404</div>
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