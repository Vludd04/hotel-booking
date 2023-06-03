import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../ui/loginForm";
import AuthWrapper from "../common/authWrapper";
import TextWithLogo from "../common/textWithLogo";

const LoginPage = () => {
  return (
    <AuthWrapper>
      <TextWithLogo text="Login" />
      <>
        <LoginForm />
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </>
    </AuthWrapper>
  );
};

export default LoginPage;
