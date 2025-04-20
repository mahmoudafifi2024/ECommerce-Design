import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string;
  title: string;
  path: string;
}

const UserSideBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { id: "1", title: "اداره الطلبات", path: "/user/allorders" },
    { id: "2", title: "المنتجات المفضلة", path: "/user/favoriteproducts" },
    { id: "3", title: "العنوانين الشخصية", path: "/user/addresses" },
    { id: "4", title: "الملف الشخصي", path: "/user/profile" }
  ];

  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path} style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserSideBar; 