import { Employee } from '../types';
import { Project, Issue } from '../types';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

export enum ActionType {
  FIND,
  UPDATE,
  NEW,
  DELETE
}

export interface IAction {
  type?: ActionType;
  query?: Object;
  skip?: number;
  limit?: number;
  sort?: Object;
  model?: string;
  populate?: string;
  newObject?: Object
}




@Injectable()
export class DbService {
  private IP = 'http://47.94.167.230';
  project = { do: (type: ActionType, action: IAction = {}) => { action.type = type; action.model = 'projectModel'; return this.do<Project>(action) } };
  employee = { do: (type: ActionType, action: IAction = {}) => { action.type = type; action.model = 'employeeModel'; return this.do<Employee>(action) } };
  issue = { do: (type: ActionType, action: IAction = {}) => { action.type = type; action.model = 'issueModel'; return this.do<Issue>(action) } };


  private do<T>(action: IAction): Promise<T[]> {
    return this.http.post(this.IP + '/api.rest.go', action).toPromise().then(response => {
      let result = response.json();
      if (result.ok) {
        return result.data;
      } else {
        alert(result.data);
      }
    })
  }
  constructor(public http: Http) { }

}
