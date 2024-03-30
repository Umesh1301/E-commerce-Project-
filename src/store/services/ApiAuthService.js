class ApiAuthService {
  BASE_URL = import.meta.env.VITE_BASE_URL;
  API_KEY = import.meta.env.VITE_API_KEY;
  static getInstance() {
    return new ApiAuthService();
  }

  userSignUp = async (userObj) => {
    console.log("3", userObj);
    const response = await fetch(
      this.BASE_URL + ":signUp?key=" + this.API_KEY,
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
