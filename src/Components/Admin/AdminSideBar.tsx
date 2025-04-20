import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string;
  title: string;
  path: string;
}

const AdminSideBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: 'orders',
      title: 'إدارة الطلبات',
      path: '/admin/allorders'
    },
    {
      id: 'products',
      title: 'إدارة المنتجات',
      path: '/admin/allproducts'
    },
    {
      id: 'categories',
      title: 'إدارة التصنيفات',
      path: '/admin/addcategory'
    },
    {
      id: 'subcategories',
      title: 'إدارة التصنيفات الفرعية',
      path: '/admin/addsubcategory'
    },
    {
      id: 'brands',
      title: 'اضف الماركات',
      path: '/admin/addbrand'
    },
    {
      id: 'product',
      title: 'اضف المنتجات',
      path: '/admin/addproduct'
    },
    {
      id: 'coupons',
      title: 'إدارة الكوبونات',
      path: '/admin/coupons'
    }
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item) => (
        <div key={item.id} className="admin-side-text my-1 border-bottom p-2">
          <Link to={item.path} className="text-decoration-none text-dark">
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AdminSideBar; 