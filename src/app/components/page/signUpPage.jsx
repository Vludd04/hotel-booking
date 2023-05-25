import React from "react";
import RegisterForm from "../ui/registerForm";
import AuthWrapper from "../common/authWrapper";
import TextWithLogo from "../common/textWithLogo";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <AuthWrapper>
      <TextWithLogo text="Sign Up" />
      <>
        <RegisterForm />
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <NavLink
            to="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log In
          </NavLink>
        </p>
      </>
    </AuthWrapper>
  );
};

export default SignUpPage;
