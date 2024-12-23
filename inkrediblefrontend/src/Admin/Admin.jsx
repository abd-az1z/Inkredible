import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdInventory2,
  MdPerson,
  MdAddChart,
} from "react-icons/md";
import AdminDashboard from "./components/AdminDashboard";
import CreateProductForm from "./components/CreateProductForm";
import CustomersTable from "./components/CustomersTable";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <MdDashboard className="w-6 h-6" /> },
  { name: "Products", path: "/admin/products", icon: <MdInventory2 className="w-6 h-6" /> },
  { name: "Customers", path: "/admin/customers", icon: <MdPerson className="w-6 h-6" /> },
  { name: "Add Product", path: "/admin/product/create", icon: <MdAddChart className="w-6 h-6" /> },
];

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen text-gray-100 flex bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-900">
      {/* Sidebar */}
      <div className="w-[20%] border-r ">
        <div className="py-4 px-6 border-b ">
          <h1 className="text-lg font-semibold text-gray-200">Admin Panel</h1>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menu.map((item) => (
              <li
                key={item.name}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                onClick={() => navigate(item.path)}
              >
                <span>{item.icon}</span>
                <span className="text-gray-200">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-[80%] p-2 overflow-y-auto">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/products" element={<ProductsTable />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/order" element={<OrdersTable />} />
          <Route path="/customers" element={<CustomersTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;