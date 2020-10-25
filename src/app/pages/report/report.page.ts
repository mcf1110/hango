import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PeopleService, Person } from 'src/app/services/people.service';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage {

  public people = this.peopleService.allAlphatically$;
  constructor(
    private alertController: AlertController,
    private peopleService: PeopleService,
  ) { }

}
