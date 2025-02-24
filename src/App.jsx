import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// layout che include il navbar
import Layout from "../src/layouts/Layout";
// pagina home
import Home from "../src/pages/Home";
// pagina chi siamo
import About from "../src/pages/About";
import ArticleList from '../src/components/ArticleList';
import './App.css'

const App = () => {

  return (

    <Router>

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleList />} />

        </Routes>

      </Layout>

    </Router>

    // <div>

    //   <h1>Lista degli Articoli</h1>
    //   <ArticleList />

    // </div>

  );

};

export default App



