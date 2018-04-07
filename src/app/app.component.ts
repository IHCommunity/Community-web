import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routerAnimation', [
      transition('1 => 3, 3 => 4', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', [
              animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ])
      ]),
      transition('4 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' }))
          ]),
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
