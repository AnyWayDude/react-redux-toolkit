import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./pages/fixed/Footer";
import Header from "./pages/fixed/Header";
import './styles/style.css'
import { BookingContextProvider } from './context/booking-context'



function App() {
  return (
    <BookingContextProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </BookingContextProvider>
  );
}

export default App;
