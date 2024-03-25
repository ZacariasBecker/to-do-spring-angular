import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoApiService {

  url = "http://localhost:8080/task";

  async getTasks<T>(): Promise<T> {
    const data = await fetch(`${this.url}`);
    return await data.json();
  };

  constructor() { }
}
