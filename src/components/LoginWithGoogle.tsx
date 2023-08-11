import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { gapi } from "gapi-script";

import config from "../config/default";

import { redirect } from "react-router-dom";
const clientId = config.google.clientId;

if (!clientId) {
  throw new Error("No client Id");
}

const LoginWithGoogle = () => {
  gapi.load("auth2", () => {
    gapi.auth2.init({
      client_id: clientId,
    });
  });
  const responseGoogle = async (response: GoogleLoginResponse) => {
    try {
      // Send the response.idToken to your backend for verification
      const idToken = response?.tokenId; // tokenId is specific to react-google-login

      if (!idToken) {
        throw new Error("No idToken received");
      }

      const backendResponse = await fetch(
        "http://localhost:8001/v1/oauth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: idToken }),
        }
      );

      console.log(backendResponse);

      if (!backendResponse.ok) {
        throw new Error("Authentication failed");
      }

      // Handle successful login
      const responseData = await backendResponse.json();
      const { user, token } = responseData;

      // Perform actions based on the user data or token
      console.log("User:", user);
      console.log("Token:", token);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    responseGoogle(res as GoogleLoginResponse);
    return redirect("/home");
  };

  const onFailure = (res: GoogleLoginResponse) => {
    return redirect("/login");
  };

  if (!clientId) {
    throw Error("No client Id found");
  }

  return (
    <div className="mt-3">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default LoginWithGoogle;
