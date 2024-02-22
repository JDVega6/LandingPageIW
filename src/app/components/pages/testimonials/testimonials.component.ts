import { Component, Input } from '@angular/core';
import { ITestimonialItem } from './Itestimonials-item-metadata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  @Input() items: ITestimonialItem[] = [];
}
