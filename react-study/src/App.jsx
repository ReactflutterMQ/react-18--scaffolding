import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
        <h1 className='box'>hello react</h1>
        {/* <Outlet /> */}
        <Link to='/'>首页</Link> |
        <Link to='/about'>关于</Link>
        <Outlet />
    </div>
  );
}

export default App;
