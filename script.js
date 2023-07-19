import fetch from "node-fetch";
fetch("http://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data)=>{
   
     data.map((country)=>{
        console.log(country);
   });
});
//to create html elements
// let ele=document.createElement("h1")
// ele.innerHTML="Restcountries & Weather"
// document.body.appendChild(ele)

//to get country name(country.name.common)
//to get capital(country.capital)   
//to get region(country.region)
//to get flags(country.flags.png)