import { Routes, Route } from 'react-router';
import Layout from './components/Layout/main';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="details/:coinId" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
