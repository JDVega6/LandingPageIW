import { Component } from '@angular/core';
import { RelevanteComponent } from "../relevante/relevante.component";
import { OfertaComponent } from "../oferta/oferta.component";
import { MainBtnComponent } from "../main-btn/main-btn.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { CollageStudentsComponent } from "../collage-students/collage-students.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RelevanteComponent, OfertaComponent, MainBtnComponent, TestimonialsComponent, CollageStudentsComponent]
})
export class HomeComponent {

}
