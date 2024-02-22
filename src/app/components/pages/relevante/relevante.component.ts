import { Component } from '@angular/core';
import { MainBtnComponent } from "../main-btn/main-btn.component";
import { MainCarouselComponent } from "../main-carousel/main-carousel.component";
import { IMainCarouselItem } from '../main-carousel/Imain-carousel-item-metadata';
import { MAIN_CAROUSEL_DATA } from '@app/data/constants/main-carousel.const';
import { CarouselLogosComponent } from "../carousel-logos/carousel-logos.component";

@Component({
    selector: 'app-relevante',
    standalone: true,
    templateUrl: './relevante.component.html',
    styleUrl: './relevante.component.css',
    imports: [MainBtnComponent, MainCarouselComponent, CarouselLogosComponent]
})
export class RelevanteComponent {
public carouselData: IMainCarouselItem[] = MAIN_CAROUSEL_DATA;
}
