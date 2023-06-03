import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../ui/registerForm";
import AuthWrapper from "../common/authWrapper";
import TextWithLogo from "../common/textWithLogo";

const SignUpPage = () => {
  return (
    <AuthWrapper>
      <TextWithLogo text="Sign Up" />
      <>
        <RegisterForm />
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log In
          </Link>
        </p>
      </>
    </AuthWrapper>
  );
};

export default SignUpPage;
