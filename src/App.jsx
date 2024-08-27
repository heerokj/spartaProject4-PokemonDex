import Router from "./shared/Router";
import "./App.css";

import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
