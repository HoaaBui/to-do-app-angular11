import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {User} from '../models/userModel';

const apiUrl = {
    getUsers: 'http://localhost:3000/api/users-list',
    createUser: 'http://localhost:3000/api/add-user',
    deleteUser: 'http://localhost:3000/api/delete-user',
    updateUser: 'http://localhost:3000/api/update-user',
}

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private httpClient: HttpClient) {

    }

    getAllUsers():Observable<User[]>{
        return this.httpClient.get<User[]>(apiUrl.getUsers).pipe(
        )
    }

    getUser(id: String):Observable<User[]>{
        return this.httpClient.get<User[]>(apiUrl.getUsers + `/${id}`).pipe(
        )
    }

    createUser(value: any):Observable<User[]>{
        return this.httpClient.post<User[]>(apiUrl.createUser, value).pipe(
        )
    }

    updateUser(value: any):Observable<User[]>{
        return this.httpClient.post<User[]>(apiUrl.updateUser, value).pipe(
        )
    }

    deleteUser(value: any):Observable<User[]>{
        return this.httpClient.post<User[]>(apiUrl.deleteUser + `/${value}`, value).pipe(
        )
    }
}