// initialization of google sheets api
import { google } from "googleapis";

function getAuth() {
  return new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });
}

export {getAuth};


