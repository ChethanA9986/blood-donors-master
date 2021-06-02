import { genderList } from './constants';
import _ from 'lodash'
export const addValue = (data) => {
    const newData = [...data]
    for (let i = 0; i < newData.length; i++) {
        newData[i].value = newData[i].name
    }
    return newData
}

export const dateToTimeStamp = (data) => {
    let date = JSON.stringify(data)
    date = date.slice(1, 11)
    return Date.parse(date)
}

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const returnGender = (data) => {
    return _.find(genderList, function (o) { return o.value === data }).name;
}
export const returnGenderNumber = (data) => {
    return _.find(genderList, function (o) { return o.name === data }).value;
}

export const getLocation = () => {
    return new Promise(function (resolve) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position)
            }, (error) => {
                resolve(null)
            });
        }
    });
}

export const getEighteenYearAgoDate = () => {
    let eighteenYearsAgo = new Date();
    eighteenYearsAgo = eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    return JSON.stringify(new Date(eighteenYearsAgo)).slice(1, 11);
}

export const getThreeMonthsBackDate = () => {
    var d = new Date();
    d.setMonth(d.getMonth() - 3);
    return JSON.stringify(new Date(d)).slice(1, 11);
}