import { ACTION_TYPE } from "../constants";
import { action } from "typesafe-actions";
export const login = (un: string, pw: string) => action(ACTION_TYPE.LOGIN, {username: un, password: pw})
export const loginMessage = (message: string) => action(ACTION_TYPE.LOGIN_SUCCESS, {message: message})