export const STORAGE = {
  TOKEN: 'token',
  CURRENT_USER: 'currentUser',
  CURRENT_LANGUAGE_STATE_KEY: 'clsk',
};

export const API_ROUTES = {
  dbConnectionApi: ''
}

export const ENCRYPT_SECRET_KEY = 'bfdsjhfgdjhfdsfjh'

export enum ErrorCode {
  'notFound' = 404,
  'internalServer' = 500,
  'unauthorized' = 401,
  'forbidden' = 403,
}

export enum MessageType {
  error = 'error',
  success = 'success',
  info = 'info',
  warning = 'warning',
}
