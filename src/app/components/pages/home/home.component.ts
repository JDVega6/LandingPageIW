import { Component } from '@angular/core';
import { RelevanteComponent } from "../relevante/relevante.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RelevanteComponent]
})
export class HomeComponent {

}
