"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var FirebaseService = (function () {
    function FirebaseService() {
    }
    FirebaseService.prototype.add = function () {
        console.log("HELLO WORLD");
        return firebase.push("/user", {
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
        });
    };
    FirebaseService = __decorate([
        core_1.Injectable()
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsdURBQTBEO0FBRzFEO0lBQUE7SUErQkEsQ0FBQztJQTlCRyw2QkFBRyxHQUFIO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3hCO1lBQ0ksT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixhQUFhLEVBQUU7b0JBQ1gsV0FBVyxFQUFFLE1BQU07b0JBQ25CLFVBQVUsRUFBRSxLQUFLO29CQUNqQixZQUFZLEVBQUUsOEJBQThCO2lCQUMvQztnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsV0FBVyxFQUFFLFFBQVE7b0JBQ3JCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLFdBQVcsRUFBRSxFQUFFO29CQUNmLFlBQVksRUFBRSxFQUFFO29CQUNoQixXQUFXLEVBQUUsRUFBRTtpQkFDbEI7Z0JBQ0QsY0FBYyxFQUFFLEVBQUU7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04scUJBQXFCLEVBQUUsRUFBRTtnQkFDekIsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLG9CQUFvQixFQUFFLEVBQUU7YUFDM0I7U0FDSixDQUNKLENBQUM7SUFDTixDQUFDO0lBOUJRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0ErQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIRUxMTyBXT1JMRFwiKTtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcIi91c2VyXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd1c2Vycyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndXNlcklEJzogJ3VzZXJJRDEyMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJQcm9maWxlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlyc3ROYW1lJzogJ0phbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFzdE5hbWUnOiAnRG9lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVQaWMnOiAnaHR0cHM6Ly9waWN0dXJlLmNvbS9qYW5lLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnaGVhbHRoSW5mbyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnRCUCc6ICcxMjAvNzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFzdDdCUCc6IFsxLCAyLCAzLCA0LCA1LCA2LCA3XSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdyZWNpcGVMaXN0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbXlSZWNpcGVzJzogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdteUNvbW1lbnRzJzogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdteVJhdGluZ3MnOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vaWZpY2F0aW9ucyc6IFtdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdzeXN0ZW0nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlY2lwZXNXaXRoQ29tbWVudHMnOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAnaGVhbHRoVGlwcyc6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICdtb3N0UG9wdWxhclJlY2lwZXMnOiBbXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=