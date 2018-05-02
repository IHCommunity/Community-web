import { Notification } from './../model/notification.model';
import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotificationsToastsService {

  	constructor(private _notifications: NotificationsService) { }

  	create(message: Notification) {

        const override = {
			timeOut: 4000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: true,
			animate: 'scale'
        };

		this._notifications.create(message.title, message.content, message.type, override);
	}
}
