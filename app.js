
let input=document.querySelector("#input");
const fetchData = async (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '04d4ddc38cmsh8d92ad93dbeb66dp11d997jsnd797b4f1f591',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      console.log(response);
      const result = await response.json();
      console.log(result);
      console.log(city);
      if(city!=="lucknow"&&city!="kolkata"&&city!="haryana"&&city!="mizoram")
      {
      document.querySelector(".temp").innerHTML=result.temp;
      document.querySelector(".min_temp").innerHTML=result.min_temp;
      document.querySelector(".max_temp").innerHTML=result.max_temp;
      document.querySelector(".humidity").innerHTML=result.humidity;
      document.querySelector(".cloud_pct").innerHTML=result.cloud_pct;
      document.querySelector(".feels_like").innerHTML=result.feels_like;
      document.querySelector(".wind_speed").innerHTML=result.wind_speed;
      document.querySelector(".wind_degrees").innerHTML=result.wind_degrees;
      document.querySelector(".sunrise").innerHTML=result.sunrise;
      document.querySelector(".sunset").innerHTML=result.sunset;
      }
      else
      {
      getweather(result,city);
      }
    } catch (error) {
    
      console.error(error);
    }
  };
  let getweather=(data,city)=>{
    document.querySelector(`#${city}_temp`).innerHTML=data.temp;
    document.querySelector(`#${city}_min_temp`).innerHTML=data.min_temp;
    document.querySelector(`#${city}_max_temp`).innerHTML=data.max_temp;
    document.querySelector(`#${city}_humidity`).innerHTML=data.humidity;
    document.querySelector(`#${city}_cloud_pct`).innerHTML=data.cloud_pct;
    document.querySelector(`#${city}_Feels_Like`).innerHTML=data.feels_like;
    document.querySelector(`#${city}_Wind_Speed`).innerHTML=data.wind_speed;
    document.querySelector(`#${city}_Wind_Degrees`).innerHTML=data.wind_degrees;
    document.querySelector(`#${city}_sunrise`).innerHTML=data.sunrise;
    document.querySelector(`#${city}_sunset`).innerHTML=data.sunset;
  }

  // Call the async function
  let names=document.querySelector("#names");
  let submit=document.querySelector("#submit");
                      
  submit.addEventListener("click",(e)=>{
    e.preventDefault();
    names.innerHTML=input.value;
    fetchData(input.value);
  })
  
  fetchData("Delhi");
 let arr=["lucknow","kolkata","haryana","mizoram"];
 arr.forEach(city=>{
fetchData(city);
})
//   let promises = arr.map(city => fetchData(city));

// Promise.all(promises)
//     .then(() => {
//         // Now that all requests are completed, you can continue with other code.
//         fetchData("lucknow");
//     })
//     .catch(error => {
//         console.error("Error fetching weather data:", error);
//     });    
  
  