import {inject, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/userModels/userModels";

@Injectable({
  providedIn: 'any'
})
export class UsersService {
  private readonly API = 'https://jsonplaceholder.typicode.com'

  private http = inject(HttpClient)

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.API}/users`)
  }
}
