import { ServicesService } from './../../../../shared/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../../../shared/model/service.model';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html'
})
export class ServicesItemComponent implements OnInit {
  service: Service = new Service();

  constructor(
    private routes: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.routes.params
      .subscribe( params => {
        this.servicesService.get(params['id'])
          .subscribe( service => this.service = service);
      });
  }

}
