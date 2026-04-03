import { useRef, useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";
import { soundoff, soundon } from "./assets/icons";
import bgMusic from "./assets/claire_de_lune_lite.mp3";

const App = () => {
  const audioRef = useRef(new Audio(bgMusic));
  audioRef.current.volume = 0.5;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Three-D-Portfolio' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <div className='fixed bottom-2 left-2 z-20'>
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </main>
  );
};

export default App;