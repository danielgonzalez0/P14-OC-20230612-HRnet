import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import EmployeeAdd from '../employeeAdd/EmployeeAdd';
import EmployeeList from '../employeesList/EmployeeList';
import Footer from '../../components/footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
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
