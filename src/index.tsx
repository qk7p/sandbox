import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import "index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { persistor, store } from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useAuth } from "hooks/useAuth";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}



const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
