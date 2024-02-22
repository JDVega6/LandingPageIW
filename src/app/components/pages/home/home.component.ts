import { Component } from '@angular/core';
import { RelevanteComponent } from "../relevante/relevante.component";
import { OfertaComponent } from "../oferta/oferta.component";
import { MainBtnComponent } from "../main-btn/main-btn.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { CollageStudentsComponent } from "../collage-students/collage-students.component";
import { ITestimonialItem } from '../testimonials/Itestimonials-item-metadata';
import { TESTIMONIAL_DATA } from '@app/data/constants/testimonials.const';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RelevanteComponent, OfertaComponent, MainBtnComponent, TestimonialsComponent, CollageStudentsComponent]
})
export class HomeComponent {
    public testimonialData: ITestimonialItem[] = TESTIMONIAL_DATA;
}
