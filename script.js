// http://api.weatherapi.com/v1/current.json?key=b1db2a6a009a49488c8210144252703&q=Mumbai&aqi=no

const temperatureField = document.querySelector('.temp');
const locationField = document.querySelector('.time_location');
const dateandTimeField = document.querySelector('.time_location p span');
const conditionField = document.querySelector('.condition p');
const searchField = document.querySelector('.search_area');
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target ='Mumbai';

const fetchResult = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=b1db2a6a009a49488c8210144252703&q=${targetLocation}&aqi=no`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    

    updateDetails(locationName, time, temp, condition);
}

function updateDetails(locationName, time, temp, condition) {
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = time;
    conditionField.innerText = condition;
   
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResult(target);
}

fetchResult(target);