import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(), 
  endpoints: (builder) => ({
    
    registerUser: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          return { 
            data: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "Anonymous User",
            }
          };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    

    loginUser: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          return { 
            data: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "Anonymous",
            }
          };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    

    logoutUser: builder.mutation({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: "Logged out" };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi;
