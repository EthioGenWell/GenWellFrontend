import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import { redirect } from "react-router-dom";
const clientId = process.env.GOOGLE_CLIENT_ID ?? ""


const LoginWithGoogle = () => {
    const responseGoogle = async (response:GoogleLoginResponse) => {
        try {
          // Send the response.idToken to your backend for verification
          const idToken = response?.tokenId; // tokenId is specific to react-google-login
          console.log(idToken);
          
      
          if (!idToken) {
            throw new Error("No idToken received");
          }
      
          // Send the idToken to your backend for verification
          const backendResponse = await fetch("/api/oauth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ idToken }),
          });
      
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
      responseGoogle(res as GoogleLoginResponse)
      // return redirect("/home")
    }

    const onFailure = (res: GoogleLoginResponse) => {
      alert("Login with google faild");
      return redirect("/login")
    }
  
    return (
      <div className="mt-3">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"/"}
        />
      </div>
    );
}

export default LoginWithGoogle;