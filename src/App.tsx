import { Component } from "solid-js";
import Header from "./Components/Header";
import Main from "./Components/Main";


const App: Component = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
