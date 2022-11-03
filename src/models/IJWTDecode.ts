export interface IJWTDecode {
  id: string;
  role: string;
  app_access: number;
  admin_access: number;
  iat: number;
  exp: number;
  iss: string;
}
