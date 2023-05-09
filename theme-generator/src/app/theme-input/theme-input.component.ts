import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-input',
  templateUrl: './theme-input.component.html',
  styleUrls: ['./theme-input.component.css'] // dodaj rozszerzenie ".css"
})

export class ThemeInputComponent {
  styles = {
    backgroundColor: '',
    color: '',
    border: '',
    boxShadow: ''
  };

  @Output() stylesChange = new EventEmitter<object>();

  onSubmit() {
    this.stylesChange.emit(this.styles);
  }
}
