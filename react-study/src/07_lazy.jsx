import React, { lazy, Suspense, useState, startTransition } from 'react'
import ErrorBoundary from './08_ErrorBoundary'
// import Welcome from './components/Welcome' //只要import组件后，不管是不是用，都会进行加载

const Welcome = lazy(() => import('./components/Welcome')) //lazy按需载入
const Welcome2 = lazy(() => import('./components/Welcome2'))

/**
 * 主应用组件
 * 使用了React的状态管理和Suspense特性来实现懒加载和状态切换
 */
export default function App() {
    // 使用useState钩子来管理show状态，初始值为true
    const [show, setShow] = useState(true)
    // 定义切换show状态的函数
    // 使用startTransition来将状态更新标记为非紧急状态，避免阻塞UI
    const changeShow = () => {
        startTransition(() => {
            setShow(!show)
        })
    }

    return (
        <div>
            {/* 页面标题 */}
            <h2>hello lazy</h2>
            {/* 切换按钮，点击时触发changeShow函数 */}
            <button onClick={changeShow}>切换</button>
            {/* 使用Suspense包裹懒加载组件，提供加载时的fallback UI */}
            <ErrorBoundary>
                <Suspense fallback={<div>loading...</div>}>
                    {show ? <Welcome /> : <Welcome2 />}
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
