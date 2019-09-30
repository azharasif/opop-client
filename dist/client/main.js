(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _channel_settings_channel_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel-settings/channel-settings.component */ "./src/app/channel-settings/channel-settings.component.ts");
/* harmony import */ var _create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-channel/create-channel.component */ "./src/app/create-channel/create-channel.component.ts");
/* harmony import */ var _creating_video_creating_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./creating-video/creating-video.component */ "./src/app/creating-video/creating-video.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _previous_trends_previous_trends_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./previous-trends/previous-trends.component */ "./src/app/previous-trends/previous-trends.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _visiting_other_channel_visiting_other_channel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visiting-other-channel/visiting-other-channel.component */ "./src/app/visiting-other-channel/visiting-other-channel.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'feed',
        component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'channel',
        component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_4__["ChannelComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'channel/settings',
        component: _channel_settings_channel_settings_component__WEBPACK_IMPORTED_MODULE_5__["ChannelSettingsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'channel/add',
        component: _create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_6__["CreateChannelComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'video/add',
        component: _creating_video_creating_video_component__WEBPACK_IMPORTED_MODULE_7__["CreatingVideoComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'feedback',
        component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'trends',
        component: _previous_trends_previous_trends_component__WEBPACK_IMPORTED_MODULE_9__["PreviousTrendsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'user/profile',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'channel/info',
        component: _visiting_other_channel_visiting_other_channel_component__WEBPACK_IMPORTED_MODULE_11__["VisitingOtherChannelComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"cyan\">\n  <!-- <app-home></app-home> -->\n  <app-navbar></app-navbar>\n\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n\n  \n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cyan {\n  background: linear-gradient(45deg, #7158e2, #5758BB, #7158e2);\n  height: 500%; }\n\n#content {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-channel/create-channel.component */ "./src/app/create-channel/create-channel.component.ts");
/* harmony import */ var _creating_video_creating_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./creating-video/creating-video.component */ "./src/app/creating-video/creating-video.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _channel_settings_channel_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./channel-settings/channel-settings.component */ "./src/app/channel-settings/channel-settings.component.ts");
/* harmony import */ var _previous_trends_previous_trends_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./previous-trends/previous-trends.component */ "./src/app/previous-trends/previous-trends.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _display_trend_display_trend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./display-trend/display-trend.component */ "./src/app/display-trend/display-trend.component.ts");
/* harmony import */ var _visiting_other_channel_visiting_other_channel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./visiting-other-channel/visiting-other-channel.component */ "./src/app/visiting-other-channel/visiting-other-channel.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"],
                _create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_9__["CreateChannelComponent"],
                _creating_video_creating_video_component__WEBPACK_IMPORTED_MODULE_10__["CreatingVideoComponent"],
                _channel_channel_component__WEBPACK_IMPORTED_MODULE_11__["ChannelComponent"],
                _channel_settings_channel_settings_component__WEBPACK_IMPORTED_MODULE_12__["ChannelSettingsComponent"],
                _previous_trends_previous_trends_component__WEBPACK_IMPORTED_MODULE_13__["PreviousTrendsComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackComponent"],
                _display_trend_display_trend_component__WEBPACK_IMPORTED_MODULE_16__["DisplayTrendComponent"],
                _visiting_other_channel_visiting_other_channel_component__WEBPACK_IMPORTED_MODULE_17__["VisitingOtherChannelComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(route) {
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('Token')) {
            return true;
        }
        else {
            this.route.navigateByUrl('');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/channel-settings/channel-settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/channel-settings/channel-settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"setting-form\" method=\"POST\" (ngSubmit)=\"edit()\">\n  \n  \n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"\">First Name:</label>\n        <input type=\"text\"  class=\"form-control\" name=\"firstname\" [(ngModel)]=\"user.first_name\">\n      </div>\n    </div>\n    \n  \n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"\">Last Name:</label>\n        <input type=\"text\"  class=\"form-control\" name=\"lastname\" [(ngModel)]=\"user.last_name\">\n      </div>\n    </div>\n\n  \n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"\">E-mail:</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\">\n      </div>\t\n    </div>\n  \n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"\">Cell Number:</label>\n        <input type=\"text\" class=\"form-control\" name=\"cell\" [(ngModel)]=\"user.number\">\n      </div>\n    </div>\n    \n    <button id=\"button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Update</button>\n  \n\n\n  <p *ngIf=\"buttonClicked; then firstBtn\"></p>\n  <button id=\"button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Change Password</button>\n  <form id=\"oldPass\" method=\"POST\" (ngSubmit)=\"comparePass()\">\n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"\">Enter Old Password:</label>\n        <input type=\"text\"  class=\"form-control\" name=\"oldPass\" [(ngModel)]=\"changePass.pass\">\n      </div>\n    </div>\n    <button id=\"button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Check</button>\n  </form>\n  \n<ng-template #firstBtn>\n<p *ngIf=\"passCheck; then first else second \"></p>\n<ng-template #first>\n<form id=\"changePass\" method=\"POST\" (ngSubmit)=\"edit(1)\">\n  <div class=\"row col-md-offset-3\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"\">Passward:</label>\n      <input type=\"text\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"user.pass\">\n    </div>\n  </div>\n  <button id=\"button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Update</button>\n</form>\n</ng-template>\n<ng-template #second> <p>Incorret Passward</p></ng-template>\n</ng-template>\n\n\n\n</form>"

/***/ }),

/***/ "./src/app/channel-settings/channel-settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/channel-settings/channel-settings.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#setting-form {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px; }\n\n#button {\n  margin-left: 40%; }\n"

/***/ }),

/***/ "./src/app/channel-settings/channel-settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/channel-settings/channel-settings.component.ts ***!
  \****************************************************************/
/*! exports provided: ChannelSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSettingsComponent", function() { return ChannelSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChannelSettingsComponent = /** @class */ (function () {
    function ChannelSettingsComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            first_name: "",
            last_name: '',
            pass: '',
            email: '',
            number: ''
        };
        this.passCheck = false;
        this.buttonClicked = false;
        this.changePass = {
            email: '',
            pass: ''
        };
    }
    ChannelSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser(localStorage.getItem('UserId')).subscribe(function (res) {
            _this.data = res;
            _this.user.first_name = _this.data.first_name;
            _this.user.last_name = _this.data.last_name;
            _this.user.email = _this.data.email;
            _this.changePass.email = _this.data.email;
            _this.user.number = _this.data.number;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
        });
    };
    ChannelSettingsComponent.prototype.comparePass = function () {
        var _this = this;
        this.buttonClicked = true;
        this.userService.login(this.changePass).subscribe(function (res) {
            _this.passCheck = true;
            console.log("success");
        }, function (err) {
            console.log("Error");
            _this.passCheck = false;
        });
    };
    ChannelSettingsComponent.prototype.edit = function (monkey) {
        var _this = this;
        if (monkey === null) {
            this.data.first_name = this.user.first_name;
            this.data.last_name = this.user.last_name;
            this.data.email = this.user.email;
            this.data.number = this.user.number;
        }
        else {
            this.data.pass = this.user.pass;
        }
        console.log(this.user);
        this.userService.updateUser(this.data, localStorage.getItem('UserId')).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/channel');
        });
    };
    ChannelSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-settings',
            template: __webpack_require__(/*! ./channel-settings.component.html */ "./src/app/channel-settings/channel-settings.component.html"),
            styles: [__webpack_require__(/*! ./channel-settings.component.scss */ "./src/app/channel-settings/channel-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChannelSettingsComponent);
    return ChannelSettingsComponent;
}());



/***/ }),

/***/ "./src/app/channel.service.ts":
/*!************************************!*\
  !*** ./src/app/channel.service.ts ***!
  \************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChannelService = /** @class */ (function () {
    function ChannelService(http) {
        this.http = http;
    }
    ChannelService.prototype.registerChannel = function (channel) {
        return this.http.post("http://localhost:3000/channel/add", channel);
    };
    ChannelService.prototype.getUserChannel = function (userId) {
        return this.http.get("http://localhost:3000/channel/user/" + userId);
    };
    ChannelService.prototype.getChannelByUserId = function (userid) {
        return this.http.get("http://localhost:3000/channel/user/" + userid);
    };
    ChannelService.prototype.addVideoInChannel = function (data) {
        return this.http.post("http://localhost:3000/channel/video/add", data);
    };
    ChannelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChannelService);
    return ChannelService;
}());



/***/ }),

/***/ "./src/app/channel/channel.component.html":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form method=\"POST\" (ngSubmit)=\"settings()\">\n        <button type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >User Settings</button>\n    </form>\n\n\n    <div *ngFor=\"let video of videos[0].videos_list\" class=\"card\" style=\"width:300px;\">\n        <!-- <p>{{video.userId.first_name}}</p> -->\n        <p>{{ video.tags }}</p>\n        <p>{{ video.path }}</p>\n      \n        <p>{{ video.rating }}</p>\n        <video width=\"320\" height=\"240\" controls>\n          <source src=\"{{ video.path }}\" type=\"video/webm\">\n          Your browser does not support the video tag.\n       </video>\n      \n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/channel/channel.component.scss":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../channel.service */ "./src/app/channel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChannelComponent = /** @class */ (function () {
    function ChannelComponent(channelService, router) {
        this.channelService = channelService;
        this.router = router;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = localStorage.getItem('UserId');
        this.channelService.getChannelByUserId(this.id).subscribe(function (res) {
            _this.videos = res;
            console.log(_this.videos[0]);
        });
    };
    ChannelComponent.prototype.settings = function () {
        this.router.navigateByUrl("channel/settings");
    };
    ChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! ./channel.component.html */ "./src/app/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.scss */ "./src/app/channel/channel.component.scss")]
        }),
        __metadata("design:paramtypes", [_channel_service__WEBPACK_IMPORTED_MODULE_1__["ChannelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/create-channel/create-channel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-channel/create-channel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" (ngSubmit)=\"create()\">\n  \n  \n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"\">Channel Name:</label>\n        <input type=\"text\"  class=\"form-control\" name=\"channel-name\" [(ngModel)]=\"channel.channel_name\">\n      </div>\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Create Channel</button>\n  </form>\n  "

/***/ }),

/***/ "./src/app/create-channel/create-channel.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/create-channel/create-channel.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-channel/create-channel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-channel/create-channel.component.ts ***!
  \************************************************************/
/*! exports provided: CreateChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChannelComponent", function() { return CreateChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channel.service */ "./src/app/channel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateChannelComponent = /** @class */ (function () {
    function CreateChannelComponent(channelService, router) {
        this.channelService = channelService;
        this.router = router;
        this.channel = {
            channel_name: '',
            userId: ''
        };
    }
    CreateChannelComponent.prototype.ngOnInit = function () {
        this.channel.userId = localStorage.getItem("UserId");
    };
    CreateChannelComponent.prototype.create = function () {
        var _this = this;
        console.log(this.channel.channel_name);
        this.channelService.registerChannel(this.channel).subscribe(function (res) {
            console.log("success");
            console.log(res);
            _this.router.navigateByUrl("/feed");
        }, function (err) {
            console.log("Error");
            console.log(err);
        });
    };
    CreateChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-channel',
            template: __webpack_require__(/*! ./create-channel.component.html */ "./src/app/create-channel/create-channel.component.html"),
            styles: [__webpack_require__(/*! ./create-channel.component.scss */ "./src/app/create-channel/create-channel.component.scss")]
        }),
        __metadata("design:paramtypes", [_channel_service__WEBPACK_IMPORTED_MODULE_1__["ChannelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateChannelComponent);
    return CreateChannelComponent;
}());



/***/ }),

/***/ "./src/app/creating-video/creating-video.component.html":
/*!**************************************************************!*\
  !*** ./src/app/creating-video/creating-video.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n\n<div class=\"row\">\n  <button (click)=\"toggleControls()\" class=\"btn btn-success\">Toggle Controls</button>\n  <button (click)=\"pause()\" class=\"btn btn-warning\">Pause</button>\n  <button (click)=\"resume()\" class=\"btn btn-info\">Resume</button>\n  <button (click)=\"sound()\" class=\"btn btn-danger\">Play with Sound</button>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"text-center\">\n      <h3>\n        <video #videoElement id=\"videoElement\"></video>\n      </h3>\n    </div>\n  </div>\n</div>\n<div>\n  <button (click)=\"play()\" class=\"btn btn-danger\">Play</button>\n  <video #playVideoElement></video>\n\n</div>\n -->\n<div class=\"cyan\">\n\n<div class=\"container center\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <video #video class=\"video\"></video>\n    </div>\n  </div>\n\n     <input type=\"text\"  class=\"form-control\" name=\"Name\" [(ngModel)]=\"feedbackData.feedback_name\">\t\t\n\n\n  \n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n    \n      <button md-raised-button color=\"primary\" id=\"down\"  (click)=\"download()\"> Save</button>\n      <button md-raised-button color=\"primary\" id=\"rec\" (click)=\"startRecording()\"> Record </button>\n      <button md-raised-button color=\"primary\" id=\"stop\" (click) =\"stopRecording()\"> Stop</button>\n    </div>\n  </div>\n\n \n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/creating-video/creating-video.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/creating-video/creating-video.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cyan {\n  background: linear-gradient(45deg, #5758BB, #5758BB, #5758BB); }\n\n.video {\n  box-shadow: 1px 6px 10px 2px rgba(35, 35, 35, 0.62);\n  height: 500px;\n  max-height: 600px;\n  width: 660px;\n  border: 10; }\n\n.row {\n  margin-bottom: 20px; }\n\n#rec {\n  width: 65px;\n  height: 35px;\n  font-size: 50;\n  font-weight: bold;\n  background-color: #44bd32;\n  border: 0;\n  border-radius: 35px;\n  margin: 18px;\n  outline: none; }\n\n#stop {\n  width: 65px;\n  height: 35px;\n  font-size: 50;\n  font-weight: bold;\n  background-color: #c23616;\n  border: 0;\n  border-radius: 35px;\n  margin: 18px;\n  outline: none; }\n\n#down {\n  width: 65px;\n  height: 35px;\n  font-size: 50;\n  font-weight: bold;\n  background-color: #273c75;\n  border: 0;\n  border-radius: 35px;\n  margin: 18px;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/creating-video/creating-video.component.ts":
/*!************************************************************!*\
  !*** ./src/app/creating-video/creating-video.component.ts ***!
  \************************************************************/
/*! exports provided: CreatingVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingVideoComponent", function() { return CreatingVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channel.service */ "./src/app/channel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatingVideoComponent = /** @class */ (function () {
    function CreatingVideoComponent(videoService, channelService) {
        this.videoService = videoService;
        this.channelService = channelService;
        this.feedbackData = {
            feedback_name: ''
        };
        this.tags = [];
    }
    CreatingVideoComponent.prototype.ngOnInit = function () {
        // this.video = this.videoElement.nativeElement;
        var video = this.video.nativeElement;
        video.muted = false;
        video.controls = true;
        video.autoplay = false;
    };
    CreatingVideoComponent.prototype.toggleControls = function () {
        var video = this.video.nativeElement;
        video.muted = !video.muted;
        video.controls = !video.controls;
        video.autoplay = !video.autoplay;
    };
    CreatingVideoComponent.prototype.successCallback = function (stream) {
        var options = {
            mimeType: 'video/webm',
            bitsPerSecond: 62800000 // if this line is provided, skip above two
        };
        this.stream = stream;
        this.recordRTC = recordrtc__WEBPACK_IMPORTED_MODULE_1___default()(stream, options);
        this.recordRTC.startRecording();
        var video = this.video.nativeElement;
        video.src = window.URL.createObjectURL(stream);
        this.toggleControls();
    };
    CreatingVideoComponent.prototype.errorCallback = function () {
        //handle error here
    };
    CreatingVideoComponent.prototype.processVideo = function (audioVideoWebMURL) {
        var video = this.video.nativeElement;
        var recordRTC = this.recordRTC;
        video.src = audioVideoWebMURL;
        this.toggleControls();
        var recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function (dataURL) { });
    };
    CreatingVideoComponent.prototype.startRecording = function () {
        var mediaConstraints = {
            video: {
                mandatory: {
                    minWidth: 1280,
                    minHeight: 720
                }
            }, audio: true
        };
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    };
    CreatingVideoComponent.prototype.stopRecording = function () {
        var recordRTC = this.recordRTC;
        recordRTC.stopRecording(this.processVideo.bind(this));
        var stream = this.stream;
        stream.getAudioTracks().forEach(function (track) { return track.stop(); });
        stream.getVideoTracks().forEach(function (track) { return track.stop(); });
    };
    CreatingVideoComponent.prototype.download = function () {
        var _this = this;
        var tempRes;
        var blob = this.recordRTC.getBlob();
        var file = new File([blob], "video.webm", {
            type: 'video/webm'
        });
        var formData = new FormData();
        formData.append('file', file);
        this.videoService.saveVideo(formData).subscribe(function (res) {
            var fileName = res;
            console.log("Success!");
            var vid = {
                tags: _this.feedbackData.feedback_name,
                date: Date.now(),
                path: "../../assets/" + fileName
            };
            _this.videoService.addVideo(vid).subscribe(function (res) {
                console.log("sdfsdf");
                _this.temp = res;
                var obj = {
                    userId: localStorage.getItem("UserId"),
                    vid: _this.temp._id
                };
                _this.channelService.addVideoInChannel(obj).subscribe(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", Object)
    ], CreatingVideoComponent.prototype, "video", void 0);
    CreatingVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creating-video',
            template: __webpack_require__(/*! ./creating-video.component.html */ "./src/app/creating-video/creating-video.component.html"),
            styles: [__webpack_require__(/*! ./creating-video.component.scss */ "./src/app/creating-video/creating-video.component.scss")]
        }),
        __metadata("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"],
            _channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"]])
    ], CreatingVideoComponent);
    return CreatingVideoComponent;
}());



/***/ }),

/***/ "./src/app/display-trend/display-trend.component.html":
/*!************************************************************!*\
  !*** ./src/app/display-trend/display-trend.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  display-trend works!\n</p>\n"

/***/ }),

/***/ "./src/app/display-trend/display-trend.component.scss":
/*!************************************************************!*\
  !*** ./src/app/display-trend/display-trend.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/display-trend/display-trend.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/display-trend/display-trend.component.ts ***!
  \**********************************************************/
/*! exports provided: DisplayTrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTrendComponent", function() { return DisplayTrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayTrendComponent = /** @class */ (function () {
    function DisplayTrendComponent() {
    }
    DisplayTrendComponent.prototype.ngOnInit = function () {
    };
    DisplayTrendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-trend',
            template: __webpack_require__(/*! ./display-trend.component.html */ "./src/app/display-trend/display-trend.component.html"),
            styles: [__webpack_require__(/*! ./display-trend.component.scss */ "./src/app/display-trend/display-trend.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayTrendComponent);
    return DisplayTrendComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n  <form method=\"POST\" (ngSubmit)=\"mychannel()\">\n      <button type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >My Channel</button>\n\n  </form>\n\n\n  <form method=\"GET\" (ngSubmit)=\"search()\">\n      <input  type=\"text\"  class=\"form-control\" name=\"SearchData.search\" [(ngModel)]=\"SearchData.search\">\t\n\n    <button type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >search Trend</button>\n\n</form>\n\n    \n\n  <div *ngIf=\"searched\">\n  <div *ngFor=\"let video of searching\" class=\"card\" style=\"width:300px;\">\n  \n    <p>{{ video.tags }}</p>\n    \n    \n    <p>{{ video.rating }}</p>\n    \n    \n    <video width=\"320\" height=\"240\" controls>\n      <!-- <source src=\"{{ video.path }}\" type=\"video/webm\"> -->\n        <source src=\"{{ video.path }}\" type=\"video/webm\">\n      Your browser does not support the video tag.\n    </video>\n    \n    \n    </div>\n  </div>\n  \n  \n\n  <div  *ngFor=\"let trendd of trends\" class=\"card\"    style=\"background-color:blue ; \" style=\"  float: left;\n  width: 30%;\n  overflow: hidden; margin-left:30%\"  >\n  \n    <p>\n  {{trendd}}\n    </p>\n  \n  </div>\n\n  <div *ngIf=\"vidio\"> \n<div *ngFor=\"let video of videos\" class=\"card\" style=\"width:300px;\">\n\n<p>{{ video.tags }}</p>\n\n\n<p>{{ video.rating }}</p>\n\n\n<video width=\"320\" height=\"240\" controls>\n  <!-- <source src=\"{{ video.path }}\" type=\"video/webm\"> -->\n    <source src=\"{{ video.path }}\" type=\"video/webm\">\n  Your browser does not support the video tag.\n</video>\n\n\n</div>\n</div>\n\n\n\n\n\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/feed/feed.component.scss":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../video.service */ "./src/app/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = /** @class */ (function () {
    function FeedComponent(videoService, router, _active) {
        var _this = this;
        this.videoService = videoService;
        this.router = router;
        this._active = _active;
        this.searched = true;
        this.vidio = false;
        this.SearchData = {
            search: ''
        };
        this.videoService.getVideos().subscribe(function (data) {
            _this.videos = data.videos;
            console.log(_this.videos);
            _this.trends = data.trends;
        }, function (err) {
            console.log(err);
        });
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent.prototype.mychannel = function () {
        this.router.navigateByUrl("/channel");
    };
    FeedComponent.prototype.search = function () {
        var _this = this;
        this.videoService.searchTrend(this.SearchData.search).subscribe(function (data) {
            _this.searching = data;
            console.log(_this.searching);
        });
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/app/feed/feed.component.scss")]
        }),
        __metadata("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/feedback.service.ts":
/*!*************************************!*\
  !*** ./src/app/feedback.service.ts ***!
  \*************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = /** @class */ (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.createFeedback = function (feedback) {
        console.log(feedback);
        return this.http.post("http://localhost:3000/feedback/add", feedback);
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container styl\">\r\n      <form id=\"feedback\" method=\"POST\" (ngSubmit)=\"feedback()\">\r\n  \r\n\r\n\r\n  \r\n        <div class=\"input-field col s6\">\r\n        \r\n        <input type=\"text\"  class=\"form-control\" name=\"Name\" [(ngModel)]=\"feedbackData.feedback_name\">\t\t\r\n        <label >Name</label>\r\n    \r\n      </div>\r\n      \r\n    \r\n      <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <textarea id=\"subject\" name=\"comment\" placeholder=\"Write something..\" style=\"height:200px\" [(ngModel)]=\"feedbackData.comments\"></textarea>\r\n\r\n            <label for=\"comment\">Comment</label>\r\n          </div>\r\n      </div>\r\n      \r\n      <button id=\"feedback-button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Send</button>\r\n    </form>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.scss":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical; }\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer; }\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049; }\n\n/* Add a background color and some padding around the form */\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n  margin-top: 20px; }\n\n.styl {\n  border: 10px solid black; }\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feedback.service */ "./src/app/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedbackService, router) {
        this.feedbackService = feedbackService;
        this.router = router;
        this.feedbackData = {
            feedback_name: '',
            comments: ''
        };
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        console.log(this.feedbackData.feedback_name);
        console.log(this.feedbackData.comments);
    };
    FeedbackComponent.prototype.feedback = function () {
        var _this = this;
        console.log(this.feedbackData.comments);
        this.feedbackService.createFeedback(this.feedbackData).subscribe(function (res) {
            console.log("success");
            console.log(res);
            _this.router.navigateByUrl("/feed");
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-wrapper\">\n        <p id=\"txt\">Online Public Opinion Portal</p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-wrapper {\n  bottom: 0px;\n  background-color: #ff9f1a;\n  width: 100%;\n  height: 85px;\n  margin-bottom: 0%;\n  padding: 0%; }\n\n#txt {\n  font-weight: bold;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"logedin()\">\n<h1 class=\"text-center\">Log Out !</h1>\n<button type=\"button\" class=\"btn btn-primary row col-md-offset-6\" (click)=\"logout()\" style=\"padding-right:50px\" >Log Out!</button>\n</div>\n\n\n<!-- Register -->\n\n\n<div *ngIf=\"!logedin()\">\n<h1 class=\"text-center\">Register Here !</h1>\n\n<form id=reg method=\"POST\" (ngSubmit)=\"add()\">\n  \n  \n\n   <div class=\"input-field col s6\">\n          <input type=\"text\"  class=\"form-control\" name=\"firstname\" [(ngModel)]=\"user.first_name\">\n\t\t  <label for=\"icon_prefix\">First Name</label>\t  \n\t</div>\n  \n\t\n    <div class=\"input-field col s6\">\n\t\t<input type=\"text\"  class=\"form-control\" name=\"lastname\" [(ngModel)]=\"user.last_name\">\t\t\n\t\t<label for=\"last_name\">Last Name</label>\n\t</div>\n\n\n    <div class=\"row\">\n        <div class=\"input-field col s12\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.pass\">\n            <label for=\"password\">Password</label>\n\t\t</div>\n\t</div>\t\t\n\n\n   <div class=\"row\">\n        <div class=\"input-field col s12\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\">          \n            <label for=\"email\">Email</label>\n        </div>\n\t</div>\n\n  \n  <div class=\"row col-md-offset-3\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t<label for=\"\">Date of Birth:</label> \n        \t<input type=\"date\" class=\"datepicker\" name=\"dob\" [(ngModel)]=\"user.dob\">\n\t\t</div>\t\n  </div>\n\n\n\n\t<div class=\"input-field col s6\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"cell\" [(ngModel)]=\"user.number\">\n\t\t\t<label for=\"icon_telephone\">Telephone</label>\n\t\t  </div>\n\n\n    <div class=\"row col-md-offset-3\">\n      <div class=\"form-group col-md-6\">\n\t\t<label for=\"\">Gender:</label><br>\n\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"gender\" value=\"male\" [(ngModel)]=\"user.gender\">\n\t\t\t\t\n\t\t\t\t<span>Male</span>\n\t\t\t\t<br>\n\t\t</label>\n\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"gender\" value=\"female\" [(ngModel)]=\"user.gender\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<span>Female</span>\n\t\t\t\t<br>\n\t\t</label>\n\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"gender\" value=\"other\" [(ngModel)]=\"user.gender\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<span>Other</span>\n\t\t</label>\n      </div>\t\n    </div>\n\n\n  <div class=\"row\">\n        <div class=\"input-field col s12\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"user.country\">\t\t\t       \n            <label for=\"email\">Country</label>\n        </div>\n\t</div>\n\n\n\n  \n\t<button id=\"reg-button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Sign Up</button>\n</form>\n\n\n<!-- Log In -->\n\n<h1 class=\"text-center\">Log In !</h1>\n\n<form id=\"login\" method=\"POST\" (ngSubmit)=\"login()\">\n  \n\n\n  \n    <div class=\"input-field col s6\">\n\t\t\n\t\t<input type=\"text\"  class=\"form-control\" name=\"lastname\" [(ngModel)]=\"loginUser.email\">\t\t\n\t\t<label for=\"icon_prefix\">Email</label>\n\n\t</div>\n  \n\n\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"loginUser.pass\">\n\t\t\t  \n\t\t\t  <label for=\"password\">Password</label>\n\t\t\t</div>\n\t</div>\n\t\n\t<button id=\"login-button\" type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Log In</button>\n</form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#reg {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px; }\n\n#reg-button {\n  margin-left: 40%; }\n\n#login {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px; }\n\n#login-button {\n  margin-left: 40%; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            first_name: "",
            last_name: '',
            pass: '',
            email: '',
            dob: '',
            number: '',
            country: '',
            gender: ''
        };
        this.loginUser = {
            pass: '',
            email: ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.add = function () {
        var _this = this;
        console.log(this.user);
        this.userService.registerUser(this.user).subscribe(function (res) {
            console.log("success");
            console.log(res);
            _this.loginUser.email = _this.user.email;
            _this.loginUser.pass = _this.user.pass;
            _this.userService.login(_this.loginUser).subscribe(function (res) {
                _this.added = res;
                console.log("success");
                console.log(_this.added.token);
                localStorage.setItem('Token', _this.added.token);
                localStorage.setItem('UserId', _this.added._id);
                _this.router.navigateByUrl("/channel/add");
            }, function (err) {
                console.log("Error");
                console.log(err);
            });
        }, function (err) {
            console.log("Error");
            console.log(err);
        });
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginUser);
        this.userService.login(this.loginUser).subscribe(function (res) {
            _this.added = res;
            console.log("success");
            console.log(_this.added.token);
            localStorage.setItem('Token', _this.added.token);
            localStorage.setItem('UserId', _this.added._id);
            _this.router.navigateByUrl("/feed");
        }, function (err) {
            console.log("Error");
            console.log(err);
        });
    };
    HomeComponent.prototype.logout = function () {
        localStorage.removeItem('Token');
        localStorage.removeItem('UserId');
    };
    HomeComponent.prototype.logedin = function () {
        return !!localStorage.getItem('Token');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav>\n  <div class=\"nav-wrapper\">\n    <a id=\"logo\" href=\"feed\" class=\"brand-logo\">Hot Hash Tags </a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li *ngIf=\" logedin()\"><a href=\"feed\">Feed</a></li>\n      <li *ngIf=\" logedin()\"><a href=\"channel/settings\">Channel Settings</a></li>\n      <li *ngIf=\" logedin()\"><a href=\"channel\">My Channel</a></li>\n      <li *ngIf=\" logedin()\"><a href=\"feedback\">Feedback</a></li>\n      <li *ngIf=\" logedin()\"><a href=\"video/add\">Create Video</a></li>\n      <li *ngIf=\" logedin()\"><a href=\"#\">Trends</a></li>\n      <li id=\"logout\" *ngIf=\" logedin()\"><a (click)=\"logout()\">Log Out</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logout {\n  background-color: #c56cf0; }\n\n#logo {\n  background-color: #ff9f1a; }\n\n.nav-wrapper {\n  background-color: #ff9f1a; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route) {
        this.route = route;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('Token');
        localStorage.removeItem('UserId');
        this.route.navigateByUrl("");
    };
    NavbarComponent.prototype.logedin = function () {
        return !!localStorage.getItem('Token');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/previous-trends/previous-trends.component.html":
/*!****************************************************************!*\
  !*** ./src/app/previous-trends/previous-trends.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  previous-trends works!\n</p>\n"

/***/ }),

/***/ "./src/app/previous-trends/previous-trends.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/previous-trends/previous-trends.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/previous-trends/previous-trends.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/previous-trends/previous-trends.component.ts ***!
  \**************************************************************/
/*! exports provided: PreviousTrendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousTrendsComponent", function() { return PreviousTrendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviousTrendsComponent = /** @class */ (function () {
    function PreviousTrendsComponent() {
    }
    PreviousTrendsComponent.prototype.ngOnInit = function () {
    };
    PreviousTrendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-previous-trends',
            template: __webpack_require__(/*! ./previous-trends.component.html */ "./src/app/previous-trends/previous-trends.component.html"),
            styles: [__webpack_require__(/*! ./previous-trends.component.scss */ "./src/app/previous-trends/previous-trends.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviousTrendsComponent);
    return PreviousTrendsComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.registerUser = function (user) {
        return this.http.post("http://localhost:3000/user/add", user);
    };
    UserService.prototype.login = function (user) {
        return this.http.post("http://localhost:3000/user/login", user);
    };
    UserService.prototype.updateUser = function (user, id) {
        return this.http.put("http://localhost:3000/user/" + id, user);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get('http://localhost:3000/user/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/video.service.ts":
/*!**********************************!*\
  !*** ./src/app/video.service.ts ***!
  \**********************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.searchTrend = function (query) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', query);
        return this.http.get("http://localhost:3000/video/search", { params: params });
    };
    VideoService.prototype.getVideos = function () {
        return this.http.get("http://localhost:3000/video");
    };
    VideoService.prototype.getVideoByUserId = function (userid) {
        return this.http.get("http://localhost:3000/video/user/" + userid);
    };
    VideoService.prototype.saveVideo = function (video) {
        return this.http.post("http://localhost:3000/video/save/", video);
    };
    VideoService.prototype.addVideo = function (vid) {
        return this.http.post("http://localhost:3000/video/add/", vid);
    };
    VideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/visiting-other-channel/visiting-other-channel.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/visiting-other-channel/visiting-other-channel.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  visiting-other-channel works!\n</p>\n"

/***/ }),

/***/ "./src/app/visiting-other-channel/visiting-other-channel.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/visiting-other-channel/visiting-other-channel.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/visiting-other-channel/visiting-other-channel.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/visiting-other-channel/visiting-other-channel.component.ts ***!
  \****************************************************************************/
/*! exports provided: VisitingOtherChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitingOtherChannelComponent", function() { return VisitingOtherChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitingOtherChannelComponent = /** @class */ (function () {
    function VisitingOtherChannelComponent() {
    }
    VisitingOtherChannelComponent.prototype.ngOnInit = function () {
    };
    VisitingOtherChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visiting-other-channel',
            template: __webpack_require__(/*! ./visiting-other-channel.component.html */ "./src/app/visiting-other-channel/visiting-other-channel.component.html"),
            styles: [__webpack_require__(/*! ./visiting-other-channel.component.scss */ "./src/app/visiting-other-channel/visiting-other-channel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VisitingOtherChannelComponent);
    return VisitingOtherChannelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FYP\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map