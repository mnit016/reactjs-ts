const USERNAME_KEY = 'un'
const PASSWORD_KEY = 'pw'
const localStorage = window.localStorage
export const saveUser = (un: string, pw: string) => {
    localStorage.setItem(USERNAME_KEY , un)
    localStorage.setItem(PASSWORD_KEY , pw)
}
export const getUsername = () => {
    return localStorage.getItem(USERNAME_KEY) === 'null' ? null : localStorage.getItem(USERNAME_KEY)
}
export const getPassword = () => {
    return localStorage.getItem(PASSWORD_KEY) === 'null' ? null : localStorage.getItem(PASSWORD_KEY)
}