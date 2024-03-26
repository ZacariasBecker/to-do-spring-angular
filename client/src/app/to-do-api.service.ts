import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ITaskResponse } from './models/i-task-response';
import { ITaskRequest } from './models/i-task-request';

@Injectable({
  providedIn: 'root'
})
export class ToDoApiService {

  url = "http://localhost:8080/task";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllTasks(): Observable<ITaskResponse[]> {
    return this.http.get<ITaskResponse[]>(this.url).pipe(retry(2));
  }

  getTaskById(id: string): Observable<ITaskResponse> {
    return this.http.get<ITaskResponse>(this.url + '/' + id).pipe(retry(2));
  }

  postTask(task: ITaskRequest): Observable<ITaskResponse> {
    return this.http.post<ITaskResponse>(this.url, JSON.stringify(task), this.httpOptions).pipe(retry(2));
  }

  putTask(id: string, task: ITaskRequest): Observable<ITaskResponse> {
    return this.http.put<ITaskResponse>(this.url + '/' + id, JSON.stringify(task), this.httpOptions).pipe(retry(2));
  }

  deteleTask(id: string): Observable<ITaskResponse> {
    return this.http.delete<ITaskResponse>(this.url + '/' + id).pipe(retry(2));
  }

}