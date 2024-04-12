import { toast } from "react-toastify";

class ApiAuthService {
  BASE_URL = import.meta.env.VITE_BASE_URL;
  API_KEY = import.meta.env.VITE_API_KEY;
  static getInstance() {
    return new ApiAuthService();
  }

  userSignUp = async (userObj) => {
    console.log("3", userObj);
    try {
      const response = await fetch(
        this.BASE_URL + ":signUp?key=" + this.API_KEY,
        {
          method: "POST",
          body: JSON.stringify({
            email: userObj.Email,
            password: userObj.Password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Sign up successful");
        return data;
      } else {
        const errorData = await response.json();
        alert("Sign up failed: " + errorData.error.message);
        throw new Error("Sign up failed: " + errorData.error.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
      throw error;
    }
  };

  userSignIn = async (userObj) => {
    console.log("3", userObj);
    const response = await fetch(
      this.BASE_URL + ":signInWithPassword?key=" + this.API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          email: userObj.email,
          password: userObj.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const data = await response.json();
    return data;
  };
  forgotPassword = async (userObj) => {
    console.log("3", userObj);
    const response = await fetch(
      this.BASE_URL + ":sendOobCode?key=" + this.API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: userObj.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const data = await response.json();
    return data;
  };
}

export const apiAuthService = ApiAuthService.getInstance();
