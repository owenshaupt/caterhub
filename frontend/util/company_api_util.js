// export const fetchCompanies = () => {
//   return axios({
//     method: "get",
//     url: "/api/menu_items"
//   });
// };

export const fetchCompany = companyString => {
  return axios({
    method: "get",
    url: `/api/companies/${companyString}`
  });
};