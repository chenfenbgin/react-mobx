import { observer } from "mobx-react-lite";
import { useStore } from "./store/index";
const App = () => {
  // 当然这里直接可以解构
  // const {counterStore} = useStore();
  const rootStore = useStore();
  console.log(rootStore);

  return (
    <div>
      {rootStore.counterStore.count}
      <button onClick={rootStore.counterStore.addCount}>+</button>
    </div>
  );
};

// 3.1 包裹App
export default observer(App);
