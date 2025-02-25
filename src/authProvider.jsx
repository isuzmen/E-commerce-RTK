import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, clearUser } from "./redux/authSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "Anonymous User",
        }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
