// React Router Dom imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Layout
import Layout, { LayoutLoader } from './Layout/Layout';

// Components
import Home, { HomeAction, HomeLoader } from './Components/Home';
import CollectionDisplayPage, { CollectionDisplayPageLoader } from './Components/CollectionPage/CollectionDisplayPage';
import MenDisplayPage, { MenDisplayPageLoader } from './Components/MenPage/MenDisplayPage';
import WomenDisplayPage, { WomenDisplayPageLoader } from './Components/WomenPage/WomenDisplayPage';
import NotFoundPage from './Components/NotFoundPage';
import ErrorPage from './Components/ErrorPage';
import CartDisplayItemsPage from './Components/CartDisplayItemsPage';
import AboutPage, { AboutPageLoader } from './Components/AboutPage';
import ContactPage, { ContactPageLoader } from './Components/ContactPage';

// LogoutAction Function
import { LogoutAction } from './Helpers/Logout';

// Library import (Toast Message)
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeProvider from "react-bootstrap/ThemeProvider"

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    loader: LayoutLoader,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: HomeLoader,
        action: HomeAction,
        errorElement: <ErrorPage/>
      },
      {
        path: "collections",
        element: <CollectionDisplayPage/>,
        loader: CollectionDisplayPageLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "men",
        element: <MenDisplayPage/>,
        loader: MenDisplayPageLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "women",
        element: <WomenDisplayPage/>,
        loader: WomenDisplayPageLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "about",
        element: <AboutPage/>,
        loader: AboutPageLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "contact",
        element: <ContactPage/>,
        loader: ContactPageLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "cart",
        element: <CartDisplayItemsPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "logout",
        action: LogoutAction
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <RouterProvider router={router}/>
          <ToastContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
