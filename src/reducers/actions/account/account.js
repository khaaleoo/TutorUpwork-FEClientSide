export const saveUserData = data => ({
  type: 'SAVE_USER_DATA',
  userData: data,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
