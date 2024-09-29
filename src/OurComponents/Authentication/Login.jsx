import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DeployedBackendURL } from "../EmailConfirmation/Constant";
import { loginUserSchema } from "@/zodSchemaValidation/schemas.js";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice.js";

export default function Login() {
  const [formData, setFormData] = useState({
    loginEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const isValideData = loginUserSchema.safeParse(formData);

    if (isValideData.success) {
      setErrors({});
      return true;
    } else {
      const formattedErrors = isValideData.error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const res = await axios.post(
        `${DeployedBackendURL}/api/v1/user/login`,
        formData
      );
      console.log(res);
      if (res.data.success) {
        navigate("/dashboard");
        localStorage.setItem("UserData", JSON.stringify(res.data.user));
        dispatch(login(res.data.user));
      }
    } else {
      console.log("something is wrong in the form ");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="loginEmail"
                className="block text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                value={formData.loginEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#282828] rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
              {errors.loginEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.loginEmail}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#282828] rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="text-red-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Log In
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
