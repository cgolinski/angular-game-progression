import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from '../../store/index.reducer';
import { AppEffects } from './app.effects';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: AppHeaderComponent }, // dashboardComponent
  { path: 'games', component: AppFooterComponent }, // gamesComponent
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: AppHeaderComponent }, // dashboardComponent
];

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

// @NgModule({
//   imports: [
//     BrowserModule,
//     StoreModule.forRoot(reducers, { metaReducers }),
//     EffectsModule.forRoot([AppEffects]),
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
export class AppModule {}
