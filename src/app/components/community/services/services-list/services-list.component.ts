import { Service } from './../../../../shared/model/service.model';
import { ServicesService } from './../../../../shared/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html'
})
export class ServicesListComponent implements OnInit {
  services: Array<Service> = [];

  constructor(private serviceService: ServicesService) { }

  ngOnInit() {
    this.serviceService.list()
      .subscribe( services => this.services = services );
  }

}
