# AngularGameProgression

## Dev notes

### TO DO

- ~~App Layout~~
- ~~View Profile~~
- Edit Profile (continue here)
- Dashboard
- Games Listing
- Edit Game
- Add Game
- Games Listing Filters

### Docs

- [Requirements](https://github.com/rangle/game-progression/blob/master/docs/requirements.md)
- [API](https://github.com/rangle/game-progression/blob/master/docs/api.md)

### Folder structure

```javascript
/app
  /dashboard
  /games
    /add-game
    /edit-game
  /profile
    /edit-profile
  /ui
    /card
```

```javascript
stuff/
  components/  // templates, styles, presentation logic
    stuff/  // smart component - only one in this module
      stuff.component.ts
      stuff.component.html
      stuff.component.scss
    child1/ - dumb components
    child2/
    …
    childN/
  modules/
    games/  // contents of the module is the exact same
    dashboard/
    profile/
  services/  // api calls, etc. available to stuff and children
    stuff.service.ts
  store/
    stuff.actions.ts
    stuff.effects.ts
    stuff.reducer.ts
    stuff.store.ts  // high level wrapper around ngrx store, selects, action dispatches
  types/
    stuff-state/
      stuff-state.functions.ts  // createStuffState()
      stuff-state.interface.ts  // type
    customer/
      customer.interface.ts
      customer.functions.ts  // business logic e.g. getCustomerFullName()
  stuff.module.ts  // @NgModule
  stuff-routing.module.ts  // Angular.io blog on lazy loading
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
