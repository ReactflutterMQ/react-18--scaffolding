import React from 'react'
import { routes } from '../../router';
import { useLocation, matchRoutes, Navigate } from 'react-router-dom';
export default function BeforeEach(props) {
    const location = useLocation();
    const match = matchRoutes(routes, location)
    console.log('beforeEach');
    // console.log('match', match);
    const meta = match[match.length - 1].route.meta
    
    if (meta.auth) { // 如果需要登录，重定向到登录页
        return <Navigate to="/login" />
    } else { // 否则显示路由内容
        return (
            <div>{props.children}</div>
        )
    }
}
