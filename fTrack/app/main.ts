import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");

firebase.init({
    persist: false,
    storageBucket: 'gs://ftrack-e97be.appspot.com'});
platformNativeScriptDynamic().bootstrapModule(AppModule);
