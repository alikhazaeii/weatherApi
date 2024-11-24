"use strict";
const video = document.querySelector('video');
const fewClouds = 'https://static.videezy.com/system/resources/previews/000/038/718/original/alb_cldfx0302_1080p.mp4';
video.src = fewClouds;
const main = document.querySelector('main');
const ul = document.createElement('ul');
ul.innerHTML = `
<img src="asset/img/663baf675cba5460408fc016_Clip path group.webp" alt="">
<li>wheater forcast</li>
<li>home</li>
<li>application</li>
<li>  </li>
<div>
<input type="text"  placeholder="search your city" >
<i class="bi bi-search"></i>
</div>

<li></li>

`;
const date = new Date();
setInterval(() => {
    const sec = date.getSeconds();
    // console.log(sec);
    const min = date.getMinutes();
    // console.log(min);
    const hour = date.getHours();
    // console.log(hour);
    ul.children[4].innerHTML = `
  ${hour}:${min}
  `;
    if (hour < 10) {
        ul.children[4].innerHTML = `
    ${'0' + hour}:${min}
    `;
    }
    if (min < 10) {
        ul.children[4].innerHTML = `
    ${hour}:${'0' + min}
    `;
    }
}, 10);
const day = new Date().getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
// console.log(day);
// console.log(month);
// console.log(year);
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const nameMonth = monthName[month];
ul.children[6].innerHTML = `
<span>${day}</span>
<span>${nameMonth}</span>
<span>${year}</span>`;
main.appendChild(ul);
const inp = document.querySelector('ul>div>input');
// console.log(inp);
const i = document.querySelector('ul>div>i');
i === null || i === void 0 ? void 0 : i.addEventListener('click', () => {
    const inpValue = inp.value;
    // console.log(inpValue);
    if (!inpValue) {
        alert('enter your name');
    }
    //////////////////////////////}]/////////////////////
    fetch(`https://api.weatherbit.io/v2.0/current?city=${inpValue}&key=b808b76333fa4609819c1c8eabd99ef6`, {
        method: 'GET',
        headers: { 'content-type': 'application/json', },
        mode: 'cors'
    }).then(res => {
        if (res.ok) {
            // console.log(res);
            return res.json();
        }
        // handle error
        else {
            console.log('its error');
        }
    })
        .then(tasks => {
            // Do something with the list of tasks
            // console.log(tasks.data[0].city_name);
            const artInput = tasks.data[0];
            // console.log(artInput.city_name);
            let art = document.createElement('article');
            art.innerHTML = `
       <h2> ${artInput.temp}°C</h2>
     <h1>City: ${artInput.city_name}, ${artInput.country_code}</h1>
        <p>Feels Like: ${artInput.app_temp}°C</p>
        <p>Weather: ${artInput.weather.description}</p>
        <img src="https://www.weatherbit.io/static/img/icons/${artInput.weather.icon}.png">
    `;
            const oldArt = main.querySelector('article');
            if (oldArt) {
                oldArt.remove();
            }
            main.appendChild(art);
            const clearSky = 'https://static.videezy.com/system/resources/previews/000/038/877/original/2_19_08_19.mp4';
            const scatteredClouds = 'https://static.videezy.com/system/resources/previews/000/046/985/original/beyaz_bulutlar_2_b11_c_5.mp4';
            const brokenClouds = 'https://static.videezy.com/system/resources/previews/000/039/188/original/stockvideo4k_011.mp4';
            const showerRain = 'https://static.videezy.com/system/resources/previews/000/049/914/original/Rain_Drops_1.mp4';
            const rain = 'https://static.videezy.com/system/resources/previews/000/048/142/original/rain-on-ground.mp4';
            const thunderStorm = 'https://static.videezy.com/system/resources/previews/000/045/150/original/stockvideo_05473.mp4';
            const snow = 'https://static.videezy.com/system/resources/previews/000/051/040/original/stockvideo_01569.mp4';
            const mist = 'https://static.videezy.com/system/resources/previews/000/036/796/original/over_mountain10.mp4';
            switch (artInput.weather.description) {
                case 'Haze':
                    video.src = scatteredClouds;
                    break;
                case 'Few clouds':
                    video.src = fewClouds;
                    break;
                case 'Clear sky':
                    video.src = clearSky;
                    break;
                case 'Scattered clouds':
                    video.src = scatteredClouds;
                    break;
                case 'Broken clouds':
                    video.src = brokenClouds;
                    break;
                case 'Overcast clouds':
                    video.src = brokenClouds;
                    break;
                case 'Fog':
                    video.src = mist;
                    break;
                case 'Mix snow/rain':
                    video.src = snow;
                    break;
                case 'Light rain':
                    video.src = showerRain;
                    break;
                case 'Drizzle':
                    video.src = rain;
            }
            const section = document.createElement('section');
            section.innerHTML = `
     <p>sunrise: <span>${artInput.sunrise}</span></p>
     <p>sunset: <span>${artInput.sunset}</span> </p>
     <p>lat: <span>${artInput.lat}</span></p>
     <p>lon: <span>${artInput.lon}</span></p>
     
     `;
            const oldsec = main.querySelector('section');
            if (oldsec) {
                oldsec.remove();
            }
            // console.log(artInput.lat);
            // console.log(artInput.lon);
            main.appendChild(section);
        

            renderMap(artInput.lat, artInput.lon);


        }).catch(error => {
            // handle error
        });
});




function renderMap(lat, lon) {

    const mapContainer = document.querySelector('#map');
    mapContainer.innerHTML = '';

    const platform = new H.service.Platform({
        apikey: 'cbZlGApSSWEenlyF9B3PHd4Cl1STGNjYQSNPaeLzMwM',
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
        mapContainer,
        defaultLayers.vector.normal.map,
        {
            center: { lat, lng: lon },
            zoom: 8,
            pixelRatio: window.devicePixelRatio || 1,
        }
    );

    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    H.ui.UI.createDefault(map, defaultLayers);

    map.setCenter({ lat, lng: lon });
    map.setZoom(8);

    console.log(`Map rendered at lat: ${lat}, lon: ${lon}`);
}
