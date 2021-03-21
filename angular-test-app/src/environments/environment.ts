// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint_one: `https://postman-echo.com/get?foo=bar1`,
  endpoint_two: `https://postman-echo.com/get?foo=bar2`,
  endpoint_three: `https://postman-echo.com/get?foo=bar3`,
  post_endpoint: `https://postman-echo.com/post`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
