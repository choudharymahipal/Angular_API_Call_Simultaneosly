import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  Url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getDataForOneTime(param: number) {
    return this.http.get(this.Url + "/" + param);
  }

  getDataForMultipleTimes(params: any) {
    return forkJoin(
      params.map((req: number) => {
        return this.http.get(this.Url + "/" + req);
      })
    );
  }
}
