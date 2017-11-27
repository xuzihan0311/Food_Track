import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FirebaseService {
    add() {
        console.log("HELLO WORLD");
        return firebase.push("/user",
            {
                'users': {
                    'userID': 'userID123',
                    'userProfile': {
                        'firstName': 'Jane',
                        'lastName': 'Doe',
                        'profilePic': 'https://picture.com/jane.jpg',
                    },
                    'healthInfo': {
                        'currentBP': '120/70',
                        'last7BP': [1, 2, 3, 4, 5, 6, 7],
                    },
                    'recipeList': {
                        'myRecipes': [],
                        'myComments': [],
                        'myRatings': []
                    },
                    'noifications': [],
                },
                'system': {
                    'RecipesWithComments': [],
                    'healthTips': [],
                    'mostPopularRecipes': [],
                }
            }
        );
    }
}