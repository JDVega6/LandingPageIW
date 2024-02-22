import { Component, Input, OnInit } from '@angular/core';
import { IMainCarouselItem } from '../main-carousel/Imain-carousel-item-metadata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-logos.component.html',
  styleUrl: './carousel-logos.component.css'
})
export class CarouselLogosComponent implements OnInit {

@Input() images: IMainCarouselItem[] = [];
@Input() indicators = true;
@Input() controls = true;
@Input() autoSlide = false;
@Input() sliderInterval = 3000;
 
selectedIndex = 0;

ngOnInit(): void {
  if(this.autoSlide){
    this.autoSlideImage();
  }
}


//sets index of image whit dots
selectImage(index: number): void{
  this.selectedIndex = index;
}


onPrevClick(): void{
  if(this.selectedIndex === 0){
    this.selectedIndex = this.images.length - 1;
  }
  else{
    this.selectedIndex--;
  }
}

onNextClick(): void{
  if(this.selectedIndex === this.images.length - 1){
    this.selectedIndex = 0;
  }
  else{
    this.selectedIndex++;
  }
}

autoSlideImage(): void{
setInterval(()=>{
  this.onNextClick();

},this.sliderInterval);
}



}
