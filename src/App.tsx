import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hello from './hello';

function App() {
  const [base, setBase] = useState("");

  useEffect(()=>{  if(window.location.hostname.includes('localhost')){
    setBase("");
  } else {
    setBase('/test/one')
  }}, [])
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route index element={
          <Hello></Hello>
        }></Route>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
