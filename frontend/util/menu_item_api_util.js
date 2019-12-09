// export const fetchItems = () => {
//   return $.ajax({
//     url: "/api/items"
//     // error: (err) => console.log(err)
//   });
// };

// export const fetchItem = id => {
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

// export const deleteItem = id => {
//   return $.ajax({
//     type: "DELETE",
//     url: `/api/items/${id}`
//     // error: (err) => console.log(err)
//   });
// };
