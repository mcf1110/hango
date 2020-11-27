import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonWithIndividualValue } from '../../services/report.service'

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent {

  constructor(private modalController: ModalController) { }

  @Input() person: PersonWithIndividualValue;

  public close() {
    this.modalController.dismiss();
  }

}
