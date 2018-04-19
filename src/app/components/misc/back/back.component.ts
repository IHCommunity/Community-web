import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html'
})
export class BackComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
