import { Component } from "solid-js";
import Header from "./components/Header";
import Main from "./components/Main";


const App: Component = () => {
  return (
    <div class="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
