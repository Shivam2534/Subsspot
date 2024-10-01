import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DeployedBackendURL } from "../EmailConfirmation/Constant.js";
import { signUpUserSchema } from "@/zodSchemaValidation/schemas.js";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const validationResult = signUpUserSchema.safeParse(formData);

    if (validationResult.success) {
      setErrors({});
      return true;
    } else {
      const formattedErrors = validationResult.error.errors.reduce(
        (acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        },
        {}
      );
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      try {
        const res = await axios.post(
          `${DeployedBackendURL}/api/v1/user/signup`,
          formData
        );
        console.log(res);
        if (res.data.success) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        // Handle error (e.g., show error message to user)
      }
    } else {
      console.log("Form validation failed");
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
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#282828] rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your name"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#282828] rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Sign Up
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
