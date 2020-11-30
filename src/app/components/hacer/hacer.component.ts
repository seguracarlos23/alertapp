import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { session } from 'src/app/services/session';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-hacer',
  templateUrl: './hacer.component.html',
  styleUrls: ['./hacer.component.scss']
})
export class HacerComponent implements OnInit {
static places=[];
static map;
static marker=null;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!session.getSesion())
      this.router.navigate(['login']);

      fetch('https://shrouded-thicket-66753.herokuapp.com/getPlaces/')
      .then(function(response){
        return response.json()
      })
      .then(function(places){
        HacerComponent.places= places;
        HacerComponent.init()
      })
      .catch(function(err){
        console.log(err)
      })
  }

  static async init(){
    const myCoords:Array<any> = [];
    await this.drawMap(myCoords);
  }
 static async drawMap(myCoords) {
  const position:any = await this.getLocation();
  myCoords[0] = position.coords.longitude;
  myCoords[1] = position.coords.latitude;
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsb3BleiIsImEiOiJjanVoYmh2YXYweTR1NDRtZnR4MWdkM3ZzIn0.o3lbqvuQ_uU18VX6drOTlA'; 
  HacerComponent.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: myCoords,
    zoom: 15
  });
  HacerComponent.map.addControl(new mapboxgl.NavigationControl());
  let posMenor=this.getNearestPosition(myCoords);

  this.addMarker(myCoords);
  for(let i=0;i<HacerComponent.places.length;i++){
    if(i==posMenor){
      this.addMarker(HacerComponent.places[i], true);
    }else{
      this.addMarker(HacerComponent.places[i])
    }
    
  }
 }

 static getNearestPosition(myCoords){

  let degtorad = 0.01745329;
  let radtodeg = 57.29577951;
  let menor=9999999999; 
  let posPlaceMenor=0;
  for(let i=0;i<HacerComponent.places.length;i++){

    var dlong = (myCoords[0] - HacerComponent.places[i].longitud);
    var dvalue = (Math.sin(myCoords[1] * degtorad) * Math.sin(HacerComponent.places[i].latitud * degtorad))+ (Math.cos(myCoords[1] * degtorad) 
    * Math.cos(HacerComponent.places[i].latitud * degtorad) * Math.cos(dlong * degtorad));
    var dd = Math.acos(dvalue) * radtodeg;

    var km = (dd * 111.302);
    km = (km * 100)/100;
    if(km<menor){
      menor=km;
      posPlaceMenor=i;
    }
  }
  return posPlaceMenor;

 }

  static addMarker(ltlng,isMenor=false) {
      let color,coordPlace;
      if(Array.isArray(ltlng)==false){
        coordPlace=[ltlng.longitud,ltlng.latitud]
        if(isMenor){
          color='#006400'
        }else{
        color='#d02922'
        }
      }else{
        coordPlace=ltlng
        color='#10ADDF'
      }  
      HacerComponent.marker = new mapboxgl.Marker({ draggable: false, color: color })
        .setLngLat(coordPlace)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3 class="popup_heading">${(ltlng.nombre)?ltlng.nombre:'Yo'}</h3><p>${ltlng.Direccion}</p><br>`))
        .addTo( HacerComponent.map)
        .on('dragend', onDragEnd);


        function onDragEnd() {
          var lngLat = HacerComponent.marker.getLngLat();
        }
}


 static async getLocation(){
  return new Promise(function (resolve, reject) {
    navigator.geolocation.watchPosition(function(position){
      resolve(position);
    }, reject, { enableHighAccuracy: true, maximumAge: 10000 });
  })
 }
}
