// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseApi: 'http://localhost:3000',

  firebase: {
      dialogFlowClientAccessToken: "b256a63d1b31460da4960ff022713d53",
      apiKey: "AIzaSyBRR_Y8h3uw5gI4X0L-PvQJcA0Ui4YXTS8",
      authDomain: "community-200317.firebaseapp.com",
      // databaseURL: "https://community-200317.firebaseio.com",
      databaseURL: "https://localhost:3000",
      projectId: "community-200317",
      storageBucket: "community-200317.appspot.com",
      messagingSenderId: "154953353338"
  }
};
