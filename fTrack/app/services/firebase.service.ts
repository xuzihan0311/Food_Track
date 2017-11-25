import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FirebaseService {
    add() {
        console.log("HELLO WORLD");
        return firebase.push("/user", {"Name": "Kim"});
    }
}