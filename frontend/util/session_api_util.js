export const signup = user => {
  return axios({
    method: "post",
    url: "/api/users",
    data: userData
  });
};

export const login = userData => {
  return axios({
    method: "post",
    url: "/api/session",
    data: userData
  });
};

export const logout = () => {
  return axios({
    method: "delete",
    url: "/api/session"
  });
};
