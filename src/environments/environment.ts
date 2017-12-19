// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyA1tdxUcgu7O-pcJUHeWMV4r4VS4hMzGBk",
    authDomain: "myprofile-dre.firebaseapp.com",
    databaseURL: "https://myprofile-dre.firebaseio.com",
    projectId: "myprofile-dre",
    storageBucket: "myprofile-dre.appspot.com",
    messagingSenderId: "533966672439"
  }
};
