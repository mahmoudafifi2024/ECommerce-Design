import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginPage: React.FC = () => {
  return (
    <Container style={{ minHeight: "690px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            value="example@example.com"
            placeholder="الايميل..."
            type="email"
            className="user-input my-3 text-center mx-auto"
            disabled
          />
          <input
            value="********"
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
            disabled
          />
          <button className="btn-login mx-auto mt-4" disabled>
            تسجيل الدخول
          </button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
          <label className="mx-auto my-4">
            <Link to="/user/forget-password" style={{ textDecoration: "none", color: "red" }}>
              هل نسيت كلمه السر
            </Link>
          </label>

          <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{ textDecoration: "none", color: "red" }}>
              Login Admin
            </Link>
          </label>

          <label className="mx-auto my-4">
            <Link to="/user/allorders" style={{ textDecoration: "none", color: "red" }}>
              Login User
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
