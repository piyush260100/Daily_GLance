let loc=document.getElementById("location");
let temp_icon=document.getElementById("temp-icon");
let temp_value=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click',(e)=>{

    e.prevenntDefault();
    getWeather(searchInput.value);
    searchInput.value='';

});

const getWeather=async(city)=>{

    try{

        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ed3842d1e937cebabed5afecdd53575`,
        {mode:'cors'});

        const weatherData=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        temp_value.textContent=Math.round(feels_like-273);

        if(id<300 && id>200)
                    {
                        temp_icon.src="./iconfile/thunderstorm.svg"
                    }

                   else if(id<400 && id>300)
                    {
                        temp_icon.src="./iconfile/clouds.svg"
                    }

                   else  if(id<600 && id>500)
                    {
                        temp_icon.src="./iconfile/rain.svg"
                    }

                    else if(id<700 && id>600)
                    {
                        temp_icon.src="./iconfile/sun and clouds.svg"
                    }

                   else if(id<800 && id>700)
                    {
                        temp_icon.src="./iconfile/sun.svg"
                    }





    }

    catch(error)
    {
        alert('city not found');
    }

};





//fetching weather for current location
window.addEventListener("load", ()=>{

    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) =>
        {

               long=position.coords.longitude;
               lat=position.coords.latitude;
               const proxy="https://www.npmjs.com/package/cors-anywhere";
               
               const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7ed3842d1e937cebabed5afecdd53575`

               fetch(api).then((response)=>{

                return response.json();
               })

               .then(data =>
                {

                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];


                    loc.textContent=name;
                    climate.textContent=main;
                    temp_value.textContent=Math.round(feels_like-273);
                    if(id<300 && id>200)
                    {
                        temp_icon.src="./iconfile/thunderstorm.svg"
                    }

                   else if(id<400 && id>300)
                    {
                        temp_icon.src="./iconfile/clouds.svg"
                    }

                   else  if(id<600 && id>500)
                    {
                        temp_icon.src="./iconfile/rain.svg"
                    }

                    else if(id<700 && id>600)
                    {
                        temp_icon.src="./iconfile/sun and clouds.svg"
                    }

                   else if(id<800 && id>700)
                    {
                        temp_icon.src="./iconfile/sun.svg"
                    }



                    console.log(data);



                })

        }

        )}
})
