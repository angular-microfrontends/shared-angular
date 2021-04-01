# ARCHIVED

This project was setup to test Ivy sharing. It is no longer part of the solution and it
**NOT RECOMMENDED**.


# SharedAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Ivy shared dependency

Straight to the point: **dependencies only work if you run `ngcc` on them before packing**.
When they are used by Angular applications the builder runs that on dependencies automatically, but
that does not happen when packing them separatedly.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
