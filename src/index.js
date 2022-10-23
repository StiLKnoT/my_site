import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './hooks/i18n'

import Loading from "./components/Loading/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <App />
    </Suspense>
  </React.StrictMode>
);


