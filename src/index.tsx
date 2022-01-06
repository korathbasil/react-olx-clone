import ReactDOM from "react-dom";
import App from "./App";

import { ContextProvider } from "./store/GlobalStore";
import { initialState, reducer } from "./store/reducer";

ReactDOM.render(
  <ContextProvider initialState={initialState} reducer={reducer}>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
