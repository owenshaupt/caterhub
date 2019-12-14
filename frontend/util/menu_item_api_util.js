export const fetchMenuItems = () => {
  return axios({
    method: "get",
    url: "/api/menu_items"
  });
};

// export const fetchMenuItem = id => {
//   return $.ajax({
//     url: `/api/items/${id}`
//     // error: (err) => console.log(err)
//   });
// };

export const createMenuItem = itemData => {
  return axios({
    method: "post",
    url: "/api/menu_items",
    data: itemData
  });
};

// export const updateMenuItem = item => {
//   return $.ajax({
//     url: `/api/items/${item.id}`,
//     method: "PATCH",
//     data: item,
//     contentType: false,
//     processData: false
//     // error: (err) => console.log(err)
//   });
// };

export const deleteMenuItem = id => {
  return axios({
    method: "delete",
    url: `/api/menu_items/${id}`
  });
};
