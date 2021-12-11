import React, { useState, useEffect } from "react";
import { PageHeader } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";

const routes = [
  {
    path: "setting",
    breadcrumbName: "Setting",
    color: "orange",
    clickable: true
  },
  {
    path: "company_settings",
    breadcrumbName: "Company Settings",
    color: "red",
    clickable: false
  },
  {
    path: "project_settings",
    breadcrumbName: "Project Settings",
    color: "brown",
    clickable: true
  }
];

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (routes?.length > 2) {
      setShow(true);
    }
  }, []);

  function itemRender(route, params, routes, paths) {
    return !route.clickable ? (
      <span style={{ color: route.color }}>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join("/")} style={{ color: route.color }}>
        {route.breadcrumbName}
      </Link>
    );
  }

  return (
    <Router>
      <PageHeader
        className="site-page-header"
        title="4th path is here"
        breadcrumb={{ routes, itemRender }}
        onBack={() => window.history.back()}
        backIcon={show ? <ArrowLeftOutlined /> : null}
      />
    </Router>
  );
}
