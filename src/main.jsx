import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx'; 
import About from './About.jsx';
import Contact from './Contact.jsx';


const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// this is taking the React component called 'App' and showing it inside the 'root' element on the page
root.render(<App />);
