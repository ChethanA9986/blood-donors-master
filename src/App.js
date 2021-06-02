import Router from './navigation/router'
import { useSelector, useDispatch } from "react-redux";
import * as updateUser from "./redux/actions/userDetailsAction";
function App() {
  const dispatch = useDispatch();
  dispatch(updateUser.updateUser(localStorage.getItem("userToken")));
  return (
    <Router />
  );
}

export default App;
