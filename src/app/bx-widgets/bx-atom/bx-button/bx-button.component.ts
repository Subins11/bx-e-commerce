import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bx-button',
  templateUrl: './bx-button.component.html',
  styleUrls: ['./bx-button.component.scss']
})
export class BxButtonComponent {

  @Output() buttonClick = new EventEmitter();

  @Input() class : string = ''
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() fontSize: string = ''
  @Input() disabled!: boolean;
  
  buttonClicked() {
    this.buttonClick.emit();
  }
}
