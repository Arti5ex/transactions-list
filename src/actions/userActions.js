
export function getCurrentUser() {
    return { type: "USER_GET", _: '' }
}

export function setUser(user) {
  return { type: "USER_SET", payload: user }
}

export function logoutUser() {
  return { type: "USER_LOGOUT", _: '' }
}