import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles.js';
import Home from './Home/Home.js';
import Signin from './Signin/Signin.js';
import Signup from './Signup/Signup.js';
import Ranking from './Ranking/Ranking.js';
import Header from '../components/Header.js';
import Logo from '../components/Logo.js';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Logo />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signin" element={ <Signin /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/ranking" element={ <Ranking /> } />
      </Routes>
    </BrowserRouter>
  );
}
