import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMainCarouselItem } from './Imain-carousel-item-metadata';
import { setInterval } from 'timers';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css'
})
export class MainCarouselComponent implements OnInit {

@Input() height = 550;
@Input() isFullScreen = false;
@Input() items: IMainCarouselItem[] = [];

public finalHeight:string |number = 0;
public currentPosition = 0;


/**
 *
 */
constructor() {
  this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`; 
}

ngOnInit(){
  this.items.map((i, index) =>{
    i.id = index;
    i.marginLeft = 0;
  })
}

setCurrentPosition(position:number){
  this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
}

setNext(){
  let finalPercentage = 0;
  let nextPosition = this.currentPosition + 1;
  if(nextPosition <= this.items.length -1){
    finalPercentage = -100 * nextPosition;
  }else{
    nextPosition = 0;
  }
  this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
  this.currentPosition = nextPosition;
}

setPrev(){
  let finalPercentage = 0;
  let prevPosition = this.currentPosition - 1;
  if(prevPosition >= 0){
    finalPercentage = -100 * prevPosition;
  }else{
    prevPosition = this.items.length -1;
    finalPercentage = -100 * prevPosition;
  }
  this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
  this.currentPosition = prevPosition;
}

}
