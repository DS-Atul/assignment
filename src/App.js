import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import 'font-awesome/css/font-awesome.min.css';
import Routers from './routers/Routers';


function App() {
  return (
    <>
      <Routers />
      <Layout />
    </>
  )
}

export default App;
