import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  profile = { firstName: 'Bob', lastName: 'Smith', image: 'Nope' };

  getProfile() {
    return this.profile;
  }

  resetProfile() {
    this.profile = { firstName: 'Bob2', lastName: 'Smith2', image: 'Nope2' };
    return this.profile;
  }

  getDbProfile() {
    return this.http.get('http://localhost:3000/profile');
  }
}
