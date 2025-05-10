import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)




// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { BrowserRouter } from "react-router-dom";
// import { SavatProvider } from "./context/SavatProvider";
// import store from "./store/store";
// import { Provider } from "react-redux";

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <SavatProvider>
//         <App />
//       </SavatProvider>
//     </BrowserRouter>
//   </Provider>
// );
