import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from './profile.service';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile$;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
    this.profile$ = this.profileService.getDbProfile();
  }
  ngOnInit() {}
}
