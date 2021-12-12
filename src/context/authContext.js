import React, { useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { provider, auth } from "../firebase/firebaseAuth";
import { signInWithPopup, signOut, GoogleAuthProvider } from "@firebase/auth";

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [online, setOnline] = useState();
  //the ternary is for keeping the user info on page refresh
  const [user, setUser] = useState(
    sessionStorage.getItem("user-profile")
      ? JSON.parse(sessionStorage.getItem("user-profile"))
      : null
  );
  const [profile, setProfile] = useState({
    name: null,
    email: null,
    photo: null,
  });

  const logIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // const credential = GoogleAuthProvider.credentialFromResult(res);
        // console.log(credential);
        // const token = credential.accessToken;
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (user === null) return;
    // stores user info into session in order to keep user info upon page refresh
    sessionStorage.setItem("user-profile", JSON.stringify(user));
    setProfile({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    });
  }, [user]);

  useEffect(() => {
    console.log(profile);
    console.log(user);
  }, [profile]);
  // //

  const logOut = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };

  onAuthStateChanged(auth, (user) => {
    user ? setOnline(true) : setOnline(false);
  });

  return (
    <AuthContext.Provider value={{ online, logIn, logOut, profile, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
