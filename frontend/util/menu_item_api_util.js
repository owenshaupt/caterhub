export const fetchMenuItems = () => {
  return axios({
    method: "get",
    url: "/api/menu_items"
  });
};

export const fetchSelectedMenuItems = company_id => {
  return axios({
    method: "get",
    url: `/api/menu_items/filter?company=${company_id}`
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

export const deleteMenuItem = (itemId, userId) => {
  return axios({
    method: "delete",
    url: `/api/menu_items/${itemId}`,
    data: [itemId, userId]
  });
};
