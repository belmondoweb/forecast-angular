// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiKey: 'f1OOAUVBYM3psgyY6AzrvT1kK5MApmzT',


  apiSearch:  'http://dataservice.accuweather.com/locations/v1/cities/search',
  apiDaily: 'https://dataservice.accuweather.com/currentconditions/v1',
  apiWeekly: 'https://dataservice.accuweather.com/forecasts/v1/daily/5day',
  apiAuto: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',

  apiGeo: 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
api_key: 'efe5cf80014b819a0d87795088944e35',

weatherUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
weatherParms: '&appid=0d7303c17ee3d3482cd82a2ad273a90d&units=',
weatherIconURL: 'https://openweathermap.org/img/w/',
api: 'https://api.openweathermap.org/data/2.5/'
};