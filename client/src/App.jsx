import React from "react";
import { Button } from './components/ui/Button'; // Make sure to import Button if it's a custom component
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth"element={<Auth />}/>
      <Route path="/chat"element={<Chat />}/>
      <Route path="/profile"element={<Profile />}/>

      <Route path="/*"element={<Auth />}/>

    </Routes>
    </BrowserRouter>
  );
};

export default App;

