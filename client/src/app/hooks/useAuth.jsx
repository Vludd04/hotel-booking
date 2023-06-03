import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import userService from "../services/user.service";
import localStorageService, {
  setTokens,
} from "../services/localStorage.service";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../components/icons/spinnerLoader";

export const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function signUp({ email, password, ...rest }) {
    try {
      const { data } = await httpAuth.post(`accounts:signUp`, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await createUser({ id: data.localId, email, ...rest });
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const emailErrorObject = {
            email: "User with this Email already exists",
          };
          throw emailErrorObject;
        }
      }
    }
  }

  async function logIn({ email, password }) {
    try {
      const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await getUserData();
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        switch (message) {
          case "INVALID_PASSWORD":
            return "Email or password entered incorrectly";
          case "EMAIL_NOT_FOUND":
            return "Email or password entered incorrectly";
          default:
            throw new Error("Too many login attempts. Please try later");
        }
      }
    }
  }

  function SignOut() {
    localStorageService.removeAuthData();
    setUser(null);
    navigate("/");
  }

  async function createUser(data) {
    try {
      const { content } = await userService.create(data);
      setUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  async function getUserData() {
    try {
      const { content } = await userService.getCurrentUser();
      setUser(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateUser(data) {
    try {
      const { content } = await userService.update(data);
      setUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, SignOut, updateUser, currentUser }}
    >
      {!isLoading ? (
        children
      ) : (
        <div className="text-center mt-64">
          <SpinnerLoader />
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
