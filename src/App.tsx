// App.js

import { SignoutRedirectArgs } from "oidc-client-ts";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    let signOutSettings: SignoutRedirectArgs = {};
    if (localStorage.getItem("country") === "BR") {
      signOutSettings = {
        id_token_hint: auth.user?.id_token,
        post_logout_redirect_uri: auth.settings.redirect_uri,
      }
    } else {
      signOutSettings = {
        extraQueryParams: {
            redirect_uri: auth.settings.redirect_uri,
            response_type: auth.settings.response_type!,
            client_id: auth.settings.client_id
        }
      }
    }

    auth.signoutRedirect(signOutSettings);
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}
  
export default App;