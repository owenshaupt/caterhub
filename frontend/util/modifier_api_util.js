export const fetchModifiers = () => {
  return axios({
    method: "get",
    url: "/api/modifiers"
  });
};

// export const fetchItem = id => {
//   return $.ajax({
//     url: `/api/items/${id}`
//     // error: (err) => console.log(err)
//   });
// };

export const createModifier = modData => {
  return axios({
    method: "post",
    url: "/api/modifiers",
    data: modData
  });
};

// export const updateItem = item => {
//   return $.ajax({
//     url: `/api/items/${item.id}`,
//     method: "PATCH",
//     data: item,
//     contentType: false,
//     processData: false
//     // error: (err) => console.log(err)
//   });
// };

export const deleteModifier = (modifierId, userId) => {
  return axios({
    method: "delete",
    url: `/api/modifiers/${modifierId}`,
    data: [modifierId, userId]
  });
};
