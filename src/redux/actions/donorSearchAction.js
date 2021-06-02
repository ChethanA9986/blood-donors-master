import { URL } from './../../constants/constants';
import { addValue } from './../../constants/helper';
export function loading(data) {
  return {
    type: "LOADING", payload: data
  };
}

export function donorSearchCity(data) {
  return { type: "CHANGE_STATE", payload: data };
}

export function setCity(data) { 
  return { type: "CHANGE_CITY", payload: data };
}

export function setBloodType(data) {
  return { type: "CHANGE_BLOOD_TYPE", payload: data };
}
export function updateDonorsList(data){
  return {type: "DONORS_LIST", payload: data}
}

export function donorSearchCityAsync(data) {
  return async dispatch => {
    dispatch(loading(data));
    try {
      const areaList = await fetch(`${URL}location/by_state?state=${data}`);
      if (areaList.status === 200) {
        const jsonData = await areaList.json();
        if (jsonData.length != 0) {
          dispatch(donorSearchCity(addValue(jsonData)));
        }
        else {
          dispatch(donorSearchCity([{ name: "- - No Cities are Available - -", value: "" }]));
        }
      }
    }
    catch (e) {
    }
  };
}

export function donorSearch(data) {
  return async dispatch => {
    dispatch(loading(data.state));
    try {
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "locationId": data._id,
          "bloodType": data.bloodType.toUpperCase()
        })

      }
      const donorsList = await fetch(`https://api.sonuforyou.com/api/user/search`, options);
      if (donorsList.status === 201) {
        const jsonData = await donorsList.json();
        dispatch(updateDonorsList(jsonData));
      }
      else{

      }
    }
    catch (e) {

    }
  }
}