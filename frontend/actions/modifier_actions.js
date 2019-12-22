import * as APIUtil from "../util/modifier_api_util";

export const RECEIVE_MODIFIERS = "RECEIVE_MODIFIERS";
export const RECEIVE_MODIFIER = "RECEIVE_MODIFIER";
export const REMOVE_MODIFIER = "REMOVE_MODIFIER";
export const CLEAR_MODIFIERS = "CLEAR_MODIFIERS";
export const RECEIVE_MODIFIER_ERRORS = "RECEIVE_MODIFIER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// needs to specify for which company is logged in
const receiveModifiers = modifiers => ({
  type: RECEIVE_MODIFIERS,
  modifiers
});

const receiveModifier = modifier => ({
  type: RECEIVE_MODIFIER,
  modifier
});

const removeModifier = id => {
  const idsStr = id.config.data.slice(1, id.config.data.length - 1);
  const splitIds = idsStr.split(",");
  const userId = +splitIds[0];

  return {
    type: REMOVE_MODIFIER,
    id: userId
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_MODIFIER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchModifiers = () => dispatch => {
  APIUtil.fetchModifiers()
    .then(modifier => dispatch(receiveModifiers(modifier)))
    .catch(error => dispatch(receiveErrors(error.response.data)));
};

// export const fetchItem = id => dispatch =>
//   APIUtil.fetchItem(id)
//     .then(item => dispatch(recieveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const createModifier = modifier => dispatch =>
  APIUtil.createModifier(modifier)
    .then(modifier => dispatch(receiveModifier(modifier)))
    .catch(error => dispatch(receiveErrors(error.response.data)));

// export const updateItem = item => dispatch =>
//   APIUtil.updateItem(item)
//     .then(item => dispatch(recieveItem(item)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const deleteModifier = (modifierId, userId) => dispatch =>
  APIUtil.deleteModifier(modifierId, userId)
    .then(modifierId => dispatch(removeModifier(modifierId)))
    .catch(error => dispatch(receiveErrors(error.responseJSON)));

// export const searchItems = search_id => dispatch =>
//   APIUtilSearch.searchItems(search_id)
//     .then(items => dispatch(receiveFilteredItems(items)))
//     .catch(error => dispatch(receiveErrors(error.responseJSON)));

export const clearModifiers = () => {
  return {
    type: CLEAR_MODIFIERS
  };
};
