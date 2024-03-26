import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { TaskInterface } from './models/task-interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoApiService {

  url = "http://localhost:8080/task";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.url).pipe(retry(2));
  }

  getTaskById(id: string): Observable<TaskInterface> {
    return this.http.get<TaskInterface>(this.url + '/' + id).pipe(retry(2));
  }

  postTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.url, JSON.stringify(task), this.httpOptions).pipe(retry(2));
  }

  putTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(this.url + '/' + task.id, JSON.stringify(task), this.httpOptions).pipe(retry(2));
  }

  deteleTask(id: string): Observable<TaskInterface> {
    return this.http.delete<TaskInterface>(this.url + '/' + id).pipe(retry(2));
  }

}