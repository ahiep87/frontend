import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./shared/contexts/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.Suspense fallback={() => <Loader />}>

  // </React.Suspense>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals