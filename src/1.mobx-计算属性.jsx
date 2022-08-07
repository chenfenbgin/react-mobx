import React from "react";
import { counterStore } from "./store/counter.Store.js";
// 3.导入中间件连接 mobx react 完成响应式变化
import { observer } from "mobx-react-lite";
const App = () => {
  return (
    <div>
      app
      <br />
      {/* 1.把store中的counter进行渲染 */}
      {counterStore.count} <br />
      {/* 4. 使用计算属性, 数据形式不能直接渲染 */}
      {counterStore.filterList.join("-")}
      {/* 2.点击事件触发action函数里的count值 */}
      <button onClick={counterStore.addCount}>+</button>
      {/* 5.修改list */}
      <button onClick={counterStore.addList}> 修改list</button>
    </div>
  );
};

// 3.1 包裹App
export default observer(App);
