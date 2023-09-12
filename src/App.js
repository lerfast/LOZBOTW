import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './slices/dataSlice';
import Navbar from './components/NavBar';
import CategoryList from './components/CategoryList';
import CategoryView from './components/CategoryView';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.data.categories);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<CategoryList categories={categories} />} />
  <Route path="/category/:category" element={<CategoryView />} />
  <Route path="/detail/:id" element={<Detail />} />
</Routes>
    </Router>
  );
}

export default App;
