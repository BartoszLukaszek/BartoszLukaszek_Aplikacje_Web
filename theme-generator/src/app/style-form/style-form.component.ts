import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-style-form',
  templateUrl: './style-form.component.html',
  styleUrls: ['./style-form.component.css']
})
export class StyleFormComponent {
  @Output() stylesChange = new EventEmitter<any>();

  styles = {
    color: '',
    backgroundColor: '',
    border: '',
    boxShadow: ''
  };

  updateStyles() {
    this.stylesChange.emit(this.styles);
  }
}
