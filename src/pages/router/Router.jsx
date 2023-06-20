import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import EmployeeAdd from '../employeeAdd/EmployeeAdd';
import EmployeeList from '../employeesList/EmployeeList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import mockData from '../../assets/data/data.json';
import { getUsers } from '../../redux/users.slice';

const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(mockData));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<EmployeeAdd />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
