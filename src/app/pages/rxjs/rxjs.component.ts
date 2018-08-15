import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 
  	this.regresaObservable()
  	.retry(2) //Reintenta hacer el código del observable => () infinitos intentos, (n) n intentos
  	.subscribe(
	  	numero=>console.log('Subs', numero), //1. Callback ==Recibe información a través de next==
	  	error=> console.error("Error en el obs (dos veces)", error), //Cuando hay error observer.error()
	  	()=> console.log('El observador terminó') //Cuando se llama a complete en el observer
  	);

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<number>{
  	return new Observable(observer=>{
  		let contador = 0; 
  		let intervalo = setInterval(()=>{
  			contador +=1;
  			observer.next(contador); //Notificar cada vez que llegue a esta función
	  		if(contador===3){
	  			clearInterval(intervalo);
	  			observer.complete(); //Notificar que el observable acabó 
	  		}
	  		if(contador ===2){
	  		
	  			observer.error('Auxilio');
	  		}
  		}, 1000);
  	});
  	
  	//Fin observer
  }

}
