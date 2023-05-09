import { Component } from '@angular/core';
styleUrls: ['./app.component.scss']

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  styles = {
    color: '',
    backgroundColor: '',
    border: '',
    boxShadow: ''
  };

  updateStyles(styles: any) {
    this.styles = styles;
  }
}
