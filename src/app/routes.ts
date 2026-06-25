import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ArticlePage from "./pages/ArticlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "solutions", Component: Solutions },
      { path: "products", Component: Products },
      { path: "projects", Component: Projects },
      { path: "partners", Component: Partners },
      { path: "resources", Component: Resources },
      { path: "resources/:slug", Component: ArticlePage },
      { path: "contact", Component: Contact },
    ],
  },
]);
