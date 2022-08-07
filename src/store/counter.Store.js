// 编写第一个mobx
import { makeAutoObservable } from "mobx";

class CounterStore {
  // 1.定义数据
  count = 0;
  // 5. 定义一个原始数据: list
  list = [1, 2, 3, 4, 5];
  constructor() {
    // 2. 把数据弄成响应式
    makeAutoObservable(this);
  }
  // 3. 定义action函数（修改数据）
  addCount = () => {
    this.count++;
  };

  // 6.定义计算属性
  get filterList() {
    return this.list.filter((item) => item > 2);
  }
  // 7.修改list
  addList = () => {
    this.list.push(6, 7, 8, 9);
  };
}
// 4. 实例化 然后导出给react使用
// const counterStore = new CounterStore();
// export { counterStore };
export { CounterStore };
