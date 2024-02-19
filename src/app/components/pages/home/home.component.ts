import { Component } from '@angular/core';
import { RelevanteComponent } from "../relevante/relevante.component";
import { OfertaComponent } from "../oferta/oferta.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RelevanteComponent, OfertaComponent]
})
export class HomeComponent {

}
