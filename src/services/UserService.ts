import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import { IDirectusLoginResponse } from "models/directus/IDirectusLoginResponse";
import { IDirectusRegisterRequest } from "models/directus/IDirectusRegisterRequest";
import { IUserCredentials } from "models/directus/IDirectusLoginRequest";
import { IDirectusLoginError } from "models/directus/IDirectusLoginError";
import { IDirectusRefreshRequest } from "models/directus/IDirectusRefreshRequest";
import { IDirectusLogOutRequest } from "models/directus/IDirectusLogOutRequest";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://f4twooal.directus.app",
    mode: "cors",
  }) as BaseQueryFn<string | FetchArgs, unknown, IDirectusLoginError, {}>,  

  endpoints: (build) => ({
    loginUser: build.mutation<IDirectusLoginResponse, IUserCredentials>({
      query: (userCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: userCredentials,
      }),  
    }),  
    registerUser: build.mutation<{}, IDirectusRegisterRequest>({
      query: (newUserCredentials) => ({
        url: "/users",
        method: "POST",
        body: newUserCredentials,
      }),  
    }),  
    refreshToken: build.mutation<
      IDirectusLoginResponse,
      IDirectusRefreshRequest
    >({
      query: (refreshBody) => ({
        url: "/auth/refresh",
        method: "POST",
        body: refreshBody,
      }),  
    }),  
    logOutUser: build.mutation<{}, IDirectusLogOutRequest>({
      query: (refreshBody) => ({
        url: "/auth/refresh",
        method: "POST",
        body: refreshBody,
      }),  
    }),  
  }),  
});  


