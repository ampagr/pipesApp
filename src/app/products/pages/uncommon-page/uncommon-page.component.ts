import { Component } from '@angular/core';

import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Amparo';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Fernando';
    this.gender = 'male';
  }

   //i18n Plural

   public clients: string[] = ['María', 'Pedro', 'Hernando', 'Eduardo', 'Natalia'];
   public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos dos clientes esperando.',
    'other': 'Tenemos # clientes esperando.'
   }

   public deleteClient(): void {
    this.clients.shift();
   }

   //KeyValue Pipe

   public person = {
    name: 'Amparo',
    age: 40,
    address: 'Otawa, Canada'
   }

   //Async Pipe

   public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) )
   );

   public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa.' );
    },3550);
   })

}
