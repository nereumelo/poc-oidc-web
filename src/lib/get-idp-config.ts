
export function getIdPConfig() {
    const country = new URLSearchParams(window.location.search).get("country") || "PE";
    localStorage.setItem("country", country);

    let IdPConfig = {};
    if (country === "BR") {
      IdPConfig = {
        authority: "http://localhost:8080/realms/xpto-realm",
        client_id: "xpto",
        client_secret: "DedzIR0svc49otii8h1IuX3X5qPcakjw",
        redirect_uri: "http://localhost:3001?country=BR",
        response_type: "code",
        scope: "openid",
      }
    } else {
      IdPConfig = {
        authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_x710SOXIr",
        client_id: "5ogqq1bqve78jj7dsid8jvniit",
        client_secret: "ubbftbjrmvp5msrisv735bt058p4vtcj3260gjifrejc7g5bjfu",
        redirect_uri: "http://localhost:3001",
        response_type: "code",
        scope: "email openid phone",
      }
    }

    return IdPConfig;
  }