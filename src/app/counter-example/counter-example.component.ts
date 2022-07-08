import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  templateUrl: './counter-example.component.html',
  styleUrls: ['./counter-example.component.scss']
})
export class CounterExampleComponent implements OnInit {
addlike=0
dislike=0
uplike=0
downlike=0

  constructor() { }
  add(type:string){
    this.addlike++
  
  }
  dis(type:string){
    this.dislike++
  
  }
  A(type:string){
    this.uplike++
  }
  B(type:string){
    this.downlike++
  }

  ngOnInit(): void {
  }


counter=[
  
  {'image':'assets/images/bike2.png'}
 
]
counter1=[
  {'image':'assets/images/bike3.png'}
  
]
counter2=[
  {'image':'assets/images/bike4.png'}
]
counter3=[
  {'image':'assets/images/bike5.png'}
  
]
counter4=[
  {'image':'assets/images/bike6.png'}
  
]
counter5=[
  {'image':'assets/images/bike.png'}
]
}

