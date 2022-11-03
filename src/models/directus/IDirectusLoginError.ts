export interface IDirectusLoginError {
  data: {
    [x: string]: any;
    errors: Array<{ message: string }>;
    message: string;
  };
  status: number;
}
