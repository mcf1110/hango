import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ReportDetailsComponent } from 'src/app/components/report-details/report-details.component';
import { PersonWithIndividualValue, Report, ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage {
  constructor(
    private reportService: ReportService,
    private modalController: ModalController
  ) { }

  public report$ = this.reportService.report$;

  public async openInfo(p: PersonWithIndividualValue) {
    const modal = await this.modalController.create({
      component: ReportDetailsComponent,
      componentProps: {
        person: p
      }
    });
    modal.present();
  }

}
