import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else return "";
  }
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo ">
        <a className="app-brand-link">
          <Link href="/">
            <img
              style={{ width: 130 }}
              src="../img/logo.jpg"
              className="img-fluid"
              alt="logo"
            />
          </Link>
        </a>
        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        {/* <li className="menu-item active"> */}
        <li className={`menu-item ${isActive("/")}`}>
          <Link href="/">
            <a className="menu-link">
              <i className="menu-icon bx bx-home-circle" />
              <div data-i18n="Analytics">Dashboard</div>
            </a>
          </Link>
        </li>
        <li className={`menu-item`}>
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-box" />
            <div data-i18n="User interface">Products</div>
          </a>
          <ul className="menu-sub">
            <li className={`menu-item ${isActive("/Services/AddProduct")}`}>
              <Link href="/Services/AddProduct">
                <a className="menu-link">
                  <div data-i18n="Accordion">Add Product</div>
                </a>
              </Link>
            </li>
            <li className={`menu-item ${isActive("/Services/MnageProduct")}`}>
              <Link href="/Services/MnageProduct">
                <a className="menu-link">
                  <div data-i18n="Alerts">Manage Product</div>
                </a>
              </Link>
            </li>
            <li className={`menu-item ${isActive("/Services/PopularProduct")}`}>
              <Link href="/Services/PopularProduct">
                <a className="menu-link">
                  <div data-i18n="Badges">Popular Product</div>
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${isActive("/Notifications")}`}>
          <Link href="/Notifications">
            <a h className="menu-link">
              <i className="menu-icon tf-icons bx bxs-bell" />
              <div data-i18n="Analytics">Notifications</div>
            </a>
          </Link>
        </li>
        <li className={`menu-item ${isActive("/Users")}`}>
          <Link href="/Users">
            <a className="menu-link">
              <i className="menu-icon tf-icons bx bxs-user" />
              <div data-i18n="Analytics">Users</div>
            </a>
          </Link>
        </li>
        {/* <li className={`menu-item ${isActive("/")}`}>
        <Link href="/Services/PopularProduct">

          <a className="menu-link">
            <i className="menu-icon tf-icons bx bx-book-open" />
            <div data-i18n="Analytics">Articles</div>
          </a>
          </Link>
        </li> */}
        <li className={`menu-item ${isActive("/ContactUs")}`}>
          <Link href="/ContactUs">
            <a className="menu-link">
              <i className="menu-icon tf-icons bx bxs-contact" />
              <div data-i18n="Analytics">Contact Us</div>
            </a>
          </Link>
        </li>
        <li className={`menu-item ${isActive("/Offers")}`}>
          <Link href="/Offers">
            <a className="menu-link">
              <i className="menu-icon tf-icons bx bxs-offer" />
              <div data-i18n="Analytics">Offers</div>
            </a>
          </Link>
        </li>
        <li className={`menu-item ${isActive("/Wishlist")}`}>
          <Link href="/Wishlist">
            <a className="menu-link">
              <i className="menu-icon tf-icons bx bxs-user-detail" />
              <div data-i18n="Analytics">Wishlist</div>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default NavBar;
