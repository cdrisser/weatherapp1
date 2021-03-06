

const getWeatherFromParams = async(userLocation)=>{
    const injectParams = !userLocation.latitude ? `${userLocation.param}=${userLocation.value},us`:`lat=${userLocation.latitude}&lon=${userLocation.longitude}`;
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?${injectParams}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`);
    const parseResult = await result.json();
    return parseResult;
  
}

export {getWeatherFromParams}