const initialState = {
  cities: [{ name: "- - Select City - -", value: "" }],
  loading: false,
  stateName: "",
  cityName: "",
  bloodType: "",
  donorsList: null
};

function donorSearchReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return { ...state, cities: [...action.payload], cityName: action.payload[0].value, loading: false };
    case "CHANGE_CITY":
      return { ...state, cityName: action.payload };
    case "CHANGE_BLOOD_TYPE":
      return { ...state, bloodType: action.payload };
    case "DONORS_LIST":
      return { ...state, loading: false, donorsList: action.payload };
    case "LOADING":
      return { ...state, loading: true, stateName: action.payload };
    default:
      return state;
  }
}

export default donorSearchReducer;