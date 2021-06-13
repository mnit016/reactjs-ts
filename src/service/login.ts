export const doLogin = (username: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == "sa" && password == "sa")
                return "Login Successful"
            else
                return "Incorrect Username or Password"
        }, 1000)
    })
}