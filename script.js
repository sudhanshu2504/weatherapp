function f(){
    var d = new Date().toDateString();
    date.innerHTML = " Date : " + d;
    var d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    time.innerHTML =  `Time :  ${h%12} :  ${m} :  ${s} `;
}
setInterval(f,10)
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    
    loc.innerHTML = city[0].toUpperCase() + city.substr(1);
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        temperature.innerHTML = `${response.temp}<span>&#8451;</span>`
        cloud_pct.innerHTML = ` ${response.cloud_pct}`
        humidity.innerHTML = ` ${response.humidity}`
        min_temp.innerHTML = ` ${response.min_temp}`
        max_temp.innerHTML = ` ${response.max_temp}`
        wind_s.innerHTML = ` ${response.wind_speed}`
        wind_d.innerHTML = ` ${response.wind_degrees}`
        sunrise.innerHTML = ` ${response.sunrise}`
        sunset.innerHTML = ` ${response.sunset}`
    })
    .catch(err => console.error(err));
    console.log(city)
    } 
submit.addEventListener ("click", (e)=>{
    e.preventDefault();
    getWeather(city.value);
});
getWeather("Delhi");

