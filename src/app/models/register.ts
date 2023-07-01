export interface RegisterRequest {
    first_name: string;
    last_name: string
    username: string;
    email: string;
    password: string;
  }
  
export interface RegisterResponse {
    id: number
    username: string;
    email: string;
  }
  
export interface RegisterError {
    error: string;
  }