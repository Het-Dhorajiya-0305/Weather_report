const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=delhi';
const url1 = 'https://weather-api138.p.rapidapi.com/weather?city_name=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '945c8cebf0msh616a8d73418e682p1eaf8djsn032257ed5f7f',
		'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
	}
};

// const res=fetch(url,options);
// res.then(response=>{
// 	return response.json();
// })
// .then(data=>{
// 	console.log(data);
// })

const t = document.querySelector(".temp_unit");
const tma = document.querySelector(".maxtemp_var");
const tmi = document.querySelector(".mintemp_var");
const feel = document.querySelector(".feellike_var");
const hum = document.querySelector(".hum_unit");
const pre = document.querySelector(".pre_var");
const wi = document.querySelector(".wind_var");
const visi = document.querySelector(".visibility_var");

const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const title = document.querySelector(".name");
const form_btn = document.querySelector(".form_data");
// getcity(delhi);

form_btn.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(search.value);
	getcity(search.value);
	title.textContent = search.value;
	

})


async function getcity(city) {
	try {
		const URL = url1 + city;
		console.log(URL);
		const response = await fetch(URL, options);
		console.log(response);
		const result = await response.json();
		console.log(result);
		const data = result.main;
		const wind = result.wind;

		// Temperature data 

		const t_data = Math.floor(Number(data.temp) - 273);
		const tma_data = Math.floor(Number(data.temp_max) - 273);
		const tmi_data = Math.floor(Number(data.temp_min) - 273);
		const feel_data = Math.floor(Number(data.feels_like) - 273);

		t.innerHTML = `${t_data} <span class="wob_t" style="display:inline" aria-label="°Celsius"
	aria-disabled="true" role="button">°C</span>`
		tma.textContent = tma_data;
		tmi.textContent = tmi_data;
		feel.textContent = feel_data;

		// humidity
		const hum_data = data.humidity;
		const pre_data = data.pressure;
		const wi_data = wind.speed;
		const visi_data = Math.floor(Number(result.visibility) / 1000);

		hum.innerHTML = `${hum_data} <span>%</span>`;
		pre.textContent = pre_data;
		wi.textContent = wi_data;
		visi.textContent = visi_data;
	}
	catch(error)
	{
		alert("please enter correct city name");
		title.textContent = "";
		
	}
	console.dir(search);	
}



