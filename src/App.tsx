import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './src/cart2';
// TODO, 加个路由页面
console.log(Cart);
const App: React.FC = () => {
  return (
    <div className="App"> 
        <div>233</div>
        <Cart name='wori'>
            <p>{'很难解决好凉快接口连接可理解奥斯卡来得及'}</p>
        </Cart>
    </div>
  );
}

export default App;
