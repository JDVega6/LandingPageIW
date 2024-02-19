import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-main-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-btn.component.html',
  styleUrl: './main-btn.component.css'
})
export class MainBtnComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
