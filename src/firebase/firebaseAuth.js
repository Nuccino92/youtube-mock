import { app } from "./config";
import "firebase/auth";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// everytime logIn called it will now give the option to chose the account
provider.setCustomParameters({
  prompt: "select_account",
});
