import jwtDecode from "jwt-decode";
import { IJWTDecode } from "models/IJWTDecode";
import { useEffect, useState } from "react";
import { userAPI } from "services/UserService";
import { removeUser, selectUser, setUser } from "store/slices/userSlice";
import { trimDate } from "utils/trimDate";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [
    refreshToken,
    {
      data: newLoginData,
      isError: isRefreshError,
      isSuccess: isRefreshSuccess,
      error: refreshError,
    },
  ] = userAPI.useRefreshTokenMutation();



  return { isAuth, setIsAuth };
};
