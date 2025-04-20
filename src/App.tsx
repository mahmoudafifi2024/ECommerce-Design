import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";

// Lazy Loading for performance optimization
const HomePage = lazy(() => import("./Page/Home/HomePage"));
const LoginPage = lazy(() => import("./Page/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./Page/Auth/RegisterPage"));
const AllCategoryPage = lazy(() => import("./Page/Category/AllCategoryPage"));
const AllBrandPage = lazy(() => import("./Page/Brand/AllBrandPage"));
const ShopProductsPage = lazy(() => import("./Page/Products/ShopProductsPage"));
const ProductDetalisPage = lazy(() => import("./Page/Products/ProductDetailsPage"));
const CartPage = lazy(() => import("./Page/Cart/CartPage"));
const ChoosePayMethoudPage = lazy(() => import("./Page/Checkout/ChoosePayMethodPage"));

// // Admin Pages
const AdminAllProductsPage = lazy(() => import("./Page/Admin/AdminAllProductsPage"));
const AdminAllOrdersPage = lazy(() => import("./Page/Admin/AdminAllOrdersPage"));
const AdminOrderDetalisPage = lazy(() => import("./Page/Admin/AdminOrderDetailsPage"));
const AdminAddBrandPage = lazy(() => import("./Page/Admin/AdminAddBrandPage"));
const AdminAddCategoryPage = lazy(() => import("./Page/Admin/AdminAddCategoryPage"));
const AdminAddSubCategoryPage = lazy(() => import("./Page/Admin/AdminAddSubCategoryPage"));
const AdminAddProductsPage = lazy(() => import("./Page/Admin/AdminAddProductsPage"));
const AdminEditProductsPage = lazy(() => import("./Page/Admin/AdminEditProductsPage"));
const AdminAddCouponPage = lazy(() => import("./Page/Admin/AdminAddCouponPage"));
const AdminEditCouponPage = lazy(() => import("./Page/Admin/AdminEditCouponPage"));

// // User Pages
const UserAllOrdersPage = lazy(() => import("./Page/User/UserAllOrdersPage"));
const UserFavoriteProductsPage = lazy(() => import("./Page/User/UserFavoriteProductsPage"));
const UserAllAddresPage = lazy(() => import("./Page/User/UserAllAddressPage"));
const UserAddAddressPage = lazy(() => import("./Page/User/UserAddAddressPage"));
const UserEditAddressPage = lazy(() => import("./Page/User/UserEditAddressPage"));
const UserProfilePage = lazy(() => import("./Page/User/UserProfilePage"));

// Login and Recovery Pages
const ForgetPasswordPage = lazy(() => import("./Page/Auth/ForgetPasswordPage"));
const VerifyPasswordPage = lazy(() => import("./Page/Auth/VerifyPasswordPage"));
const ResetPasswordPage = lazy(() => import("./Page/Auth/ResetPasswordPage"));

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBarLogin />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Home Page */}
            <Route index element={<HomePage />} />

            {/* Login and Register */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Store and Products */}
            <Route path="/allcategory" element={<AllCategoryPage />} />
            <Route path="/allbrand" element={<AllBrandPage />} />
            <Route path="/products" element={<ShopProductsPage />} />
            <Route path="/products/:id" element={<ProductDetalisPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />

            {/* Admin Pages */}
            <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
            <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />

            {/* User Pages */}
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />

            {/* Account Recovery */}
            <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
            <Route path="/user/reset-password" element={<ResetPasswordPage />} />
          </Routes>
        </Suspense>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
