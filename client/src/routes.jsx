import { Navigate } from "react-router-dom";
import MainPage from "./app/components/page/mainPage";
import AuthLayout from "./app/layouts/authLayout";
import CitiesLayout from "./app/layouts/citiesLayout";
import BookedRoomsLayout from "./app/layouts/bookedRoomsLayout";
import LoginPage from "./app/components/page/loginPage";
import SignUpPage from "./app/components/page/signUpPage";
import ProtectedRoute from "./app/components/common/protectedRoute";
import AdminProtectedRoute from "./app/components/common/adminProtectedRoute";
import CitiesListPage from "./app/components/page/citiesListPage";
import BookedRoomsPage from "./app/components/page/bookedRoomsPage";
import HotelsListPage from "./app/components/page/hotelsListPage";
import HotelPage from "./app/components/page/hotelPage";
import MyRoomsPage from "./app/components/page/myRoomsPage/myRoomsPage";
import ProfilePage from "./app/components/page/profilePage";
import LogOut from "./app/components/ui/logOut";

const routes = () => [
  {
    path: "/",
    element: <MainPage />,
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
      {
        path: "*",
        element: <Navigate to="/profile" />,
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
      {
        path: "*",
        element: <Navigate to="/myrooms" />,
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
      {
        path: "*",
        element: <Navigate to="/bookedrooms" />,
      },
    ],
  },
  {
    path: "signout",
    element: <LogOut />,
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
        element: <Navigate to="/cities" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
