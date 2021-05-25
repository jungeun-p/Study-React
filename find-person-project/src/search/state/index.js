import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../common/redux-helper";

export const Types = {
  SetValue: "search/SetValue",
  FetchAutoComplete: "search/FetchAutoComplete",
};

export const actions = {
  setValue: createSetValueAction(Types.setValue),
  fetchAutoComplete: (keyword) => ({
    type: Types.FetchAutoComplete,
    keyword,
  }),
};

const INITIAL_STATE = {
  keyword: "",
  AutoComplete: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
