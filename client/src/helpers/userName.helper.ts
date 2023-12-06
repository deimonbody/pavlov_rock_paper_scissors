export const getUserNameFromLS = () => {
  return localStorage.getItem('userName');
};

export const setUserNameLS = (value: string) => {
  localStorage.setItem('userName', value);
};
