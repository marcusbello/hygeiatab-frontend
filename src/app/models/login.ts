export interface LoginRequest {
    username: string;
    password: string;
  }
  
export interface LoginResponse {
    refresh: string;
    access: string;
    // Additional properties for successful login response
  }
  
export interface LoginError {
    error: string;
    // Additional properties for error response
  }

export interface RefreshResponse {
  access: string;
}