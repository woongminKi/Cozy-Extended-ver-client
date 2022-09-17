import { GoogleLogout } from "react-google-login";

const clientId = '558874201953-bnik5ln6t0j5ekuad0a2l788ds0g4898.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log("Log out successfull!!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
