import Home from "../components/pages/home/Home";
import MovieDetail from "../components/pages/movieDetail/MovieDetail";
import Favorites from "../components/pages/favorites/Favorites";
import LoginPage from "../components/auth/LoginPage";
import Layout from "../components/layout/User/Layout"
import AdminLayout from "../components/layout/Admin/AdminLayout";
import AdminPage from "../components/pages/admin/AdminPage";
import ProfilePage from "../components/pages/profile/ProfilePage";

const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminPage />,
      }
    ],
  },
];

export default AppRoutes;