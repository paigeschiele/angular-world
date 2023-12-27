import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let country = document.querySelectorAll('path');

    country.forEach(function(country) {
        country.addEventListener("click", function() {
          let countryID = this.getAttribute('id');
          countryInfo(countryID!);
        })
    }) 
  }

}

async function countryInfo(countryId : string){


  const api = `https://api.worldbank.org/V2/country/${countryId}?format=json`

  try {
    const res = await fetch(api)
    const apiData = await res.json()
    let data = apiData[1][0];
  

    console.log('API info:', data); 

    let name = data.name
    document.getElementById('name')!.innerText = `${name}`
    let capital = data.capitalCity
    document.getElementById('capital')!.innerText = `${capital}`
    let region = data.region.value
    document.getElementById('region')!.innerText = `${region}`
    let income = data.incomeLevel.value
    document.getElementById('income')!.innerText = `${income}`
    let long = data.longitude
    document.getElementById('long')!.innerText = `${long}`
    let lat = data.latitude
    document.getElementById('lat')!.innerText = `${lat}`
  }
  catch(error) {
    document.getElementById('name')!.innerText = `N/A`
    document.getElementById('capital')!.innerText = `N/A`
    document.getElementById('region')!.innerText = `N/A`
    document.getElementById('income')!.innerText = `N/A`
    document.getElementById('long')!.innerText = `N/A`
    document.getElementById('lat')!.innerText = `N/A`
  }
  
}






