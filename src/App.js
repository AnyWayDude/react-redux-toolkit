import React from "react";
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./pages/fixed/Footer";
import Header from "./pages/fixed/Header";
import './styles/style.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
          <AppRouter/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
