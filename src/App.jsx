import { useState, useEffect } from 'react';
import Landing from "./Assets/components/landing.jsx";
import Splashscreen from "./Assets/components/splashscreen.jsx";
import Portfolio from "./Assets/components/portfolio.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? 
  <Splashscreen /> : 
  <Landing /> ||
  <Portfolio />;
  
}
