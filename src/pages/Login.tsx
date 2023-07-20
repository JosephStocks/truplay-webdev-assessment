import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTitle } from "../utils";
import { useEffect } from "react";

type FormValues = {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = () => {
    navigate("/settings");
  };

  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-foreground rounded-lg shadow border border-text-faint md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            Sign in to your account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                {...register("email", {
                  required: true,
                  validate: (val: string) => {
                    if (
                      !Object.prototype.hasOwnProperty.call(localStorage, val)
                    ) {
                      return "email doesn't exist";
                    }
                  },
                })}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border text-black sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            {errors.email?.message && (
              <p className="p-1 text-sm font-normal tracking-wider text-white bg-red rounded-md">
                {errors.email?.message}
              </p>
            )}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  validate: (val: string) => {
                    // This value should be hashed then compared to the stored hashed password.
                    // For simplicity and time, I am comparing plaintext to stored plaintext password.
                    const userObj: FormValues = JSON.parse(
                      localStorage.getItem(getValues("email")) || ""
                    ) as FormValues;
                    console.log(val, userObj.password);
                    if (val !== userObj.password) {
                      return "Incorrect password!";
                    }
                  },
                })}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border text-black sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            {errors.password?.message && (
              <p className="p-1 text-sm font-normal tracking-wider text-white bg-red rounded-md">
                {errors.password?.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-button-gradient-green via-button-gradient-blue to-button-gradient-green bg-[position:_0%] bg-[size:_200%] hover:bg-[position:_100%] transition-all duration-200 flex items-center justify-center hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-white hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
