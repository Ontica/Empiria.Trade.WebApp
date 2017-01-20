import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { DataOperation } from './data.operation';

import 'rxjs/add/operator/toPromise';


const TEST_SESSION_TOKEN = '2a3b02e6-9d59-41de-8698-6482ec4e9ce2-' +
  '3a951dab66a2360fa08564bf39b24b7d7e6a92e2ba86813cb24afc84cde2e572';


@Injectable()
export class HttpDataService {

  constructor(private http: Http) {

  }

  // region Public methods

  public getList<T>(dataOperation: DataOperation): Promise<T> {

    let url = dataOperation.getURI();
    let headers = new Headers({ 'Authorization': 'bearer ' + TEST_SESSION_TOKEN });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .toPromise()
      .then(response => response.json().data as T)
      .catch(this.handleError);
  }

  // endregion Public methods

  // region Private methods

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().data || error.message);
  }

  // endregion Private methods

}
