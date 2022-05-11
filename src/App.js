import Layout from './components/Layout';
import Container from './components/Container';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Container />} />
          <Route path="india" element={<CountryDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
