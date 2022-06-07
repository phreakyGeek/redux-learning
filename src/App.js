import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import PizzaContainer from "./components/PizzaContainer";
import HooksPizzaContainer from "./components/HooksPizzaContainer";
import ChipsContainer from "./components/ChipsContainer";
import HooksChipsContainer from "./components/HooksChipsContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        <ItemContainer cake />
        <ItemContainer/>
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <HooksIceCreamContainer/>
        <PizzaContainer/>
        <HooksPizzaContainer/>
        <ChipsContainer/>
        <HooksChipsContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
