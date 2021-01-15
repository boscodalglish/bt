import React from 'react';
import './App.scss';
import MetaTags from 'react-meta-tags';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
        <MetaTags>
          <meta charSet="utf-8" />
          <title>Dalglish Fernandes</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="" />
          <meta property="og:type" content="" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />

          <meta name="theme-color" content="#fafafa" />
        </MetaTags>
        <Header />
        <Search />
        <Footer />
    </div>
  );
}

export default App;
