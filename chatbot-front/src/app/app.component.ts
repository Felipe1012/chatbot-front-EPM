import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { resetFakeAsyncZone, async } from '@angular/core/testing';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot-front';
  item: string;
  items = [];
  respuesta = [];
  resjs=''
  vector=[]

  constructor(private http: Http) { }


  

   onClick() {
    var datos = {
      "text": this.item
    }
    console.log(datos)
    this.http.post('http://localhost:3000/conversation/',datos).subscribe( 
      (res) => {

        this.respuesta.push(res.json())  
        for(let i in this.respuesta){
          this.vector[i]=this.respuesta[i].result

        }
        console.log("eyeye "+this.vector)
        
      },
      (err)=>{
        console.log(err)
      }
    )

    console.log(this.item)
    if (this.item.trim().length)
    {
      this.items.push({ name: this.item });
      this.item = '';
    }   
    
    

  }

}
