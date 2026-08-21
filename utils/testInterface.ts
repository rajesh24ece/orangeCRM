export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginData {
    invalidPassword: LoginCredentials;
    invalidUserName: LoginCredentials;
    nullUserNamePassword: LoginCredentials;
    validUser: LoginCredentials;
}