import { Component } from "@angular/core";
import { CommonService } from "../Services/common.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  OneTimeApiResponse: any;
  MultipleTimesApiResponse: any;

  constructor(private commonSvc: CommonService) {}

  ngOnInit(): void {
    this.SingleApiCall();
    this.MultipleApiCall();
  }

  SingleApiCall() {
    let param = 1;
    this.commonSvc.getDataForOneTime(param).subscribe((res) => {
      this.OneTimeApiResponse = res;
    });
  }

  MultipleApiCall() {
    let params=[1,2,3,4,5];
    this.commonSvc.getDataForMultipleTimes(params).subscribe((res) => {
      this.MultipleTimesApiResponse = res;
    });
  }
}
