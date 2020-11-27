import { Component } from '@angular/core';
import { Report, ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage {
  constructor(
    private reportService: ReportService,
  ) { }

  public report$ = this.reportService.report$;

  public openInfo(r: Report) {
    console.log(r);
  }

}
