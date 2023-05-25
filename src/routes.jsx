import { Navigate } from "react-router-dom";
import Main from "./app/layouts/main";
import CitiesLayout from "./app/layouts/citiesLayout";
import CitiesListPage from "./app/components/page/citiesListPage/index";
import HotelsListPage from "./app/components/page/hotelsListPage/index";
import HotelPage from "./app/components/page/hotelPage/index";
import AuthLayout from "./app/layouts/authLayout";
import LoginPage from "./app/components/page/loginPage";
import SignUpPage from "./app/components/page/signUpPage";
import ProtectedRoute from "./app/components/common/protectedRoute";
import MyRoomsPage from "./app/components/page/myRoomsPage/myRoomsPage";
import ProfilePage from "./app/components/page/profilePage";
import BookedRoomsPage from "./app/components/page/bookedRoomsPage/bookedRoomsPage";
import AdminProtectedRoute from "./app/components/common/adminProtectedRoute";
import BookedRoomsLayout from "./app/layouts/bookedRoomsLayout";
import LogOut from "./app/components/ui/logOut";

const routes = () => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "cities",
    element: <CitiesLayout />,
    children: [
      {
        path: "",
        element: <CitiesListPage />,
      },
      {
        path: ":cityId",
        element: <HotelsListPage />,
      },
      {
        path: ":cityId/:hotelId",
        element: <HotelPage />,
      },
      {
        path: "*",
        element: <Navigate to="/cities/list" />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/auth/signup" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/signup" />,
      },
    ],
  },
  {
    path: "profile",
    element: (
      <ProtectedRoute redirectTo={"/auth/login"}>
        <ProfilePage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":userId",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "bookedrooms",
    element: (
      <ProtectedRoute redirectTo={"/auth/login"}>
        <AdminProtectedRoute redirectTo={"/cities"}>
          <BookedRoomsLayout>
            <BookedRoomsPage />
          </BookedRoomsLayout>
        </AdminProtectedRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":cityId",
        element: "",
      },
    ],
  },
  {
    path: "myrooms",
    element: (
      <ProtectedRoute redirectTo={"/auth/login"}>
        <MyRoomsPage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":userId",
        element: <MyRoomsPage />,
      },
    ],
  },
  {
    path: "signout",
    element: <LogOut />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
