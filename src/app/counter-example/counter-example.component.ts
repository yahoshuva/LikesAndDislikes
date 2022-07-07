import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  templateUrl: './counter-example.component.html',
  styleUrls: ['./counter-example.component.scss']
})
export class CounterExampleComponent implements OnInit {
addlike=0
dislike=0

  constructor() { }
  add(type:string){
    this.addlike++
  
  }
  dis(type:string){
    this.dislike++

    
  }

  ngOnInit(): void {
  }

}

