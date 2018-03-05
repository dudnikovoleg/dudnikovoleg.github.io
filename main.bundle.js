webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__availability_availability_component__ = __webpack_require__("./src/app/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__black_out_times_black_out_times_component__ = __webpack_require__("./src/app/black-out-times/black-out-times.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clients_clients_add_clients_add_component__ = __webpack_require__("./src/app/clients/clients-add/clients-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_edit_profile_edit_component__ = __webpack_require__("./src/app/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calendar_appointment_appointment_component__ = __webpack_require__("./src/app/calendar/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_add_service_add_service_component__ = __webpack_require__("./src/app/services/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_edit_service_edit_service_component__ = __webpack_require__("./src/app/services/edit-service/edit-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sign_up_thank_sign_up_thank_sign_up_component__ = __webpack_require__("./src/app/sign-up/thank-sign-up/thank-sign-up.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: 'service', pathMatch: 'full' },
    { path: 'https://dudnikovoleg.github.io/sign-up', component: __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'https://dudnikovoleg.github.io/sign-up/thank-you', component: __WEBPACK_IMPORTED_MODULE_15__sign_up_thank_sign_up_thank_sign_up_component__["a" /* ThankSignUpComponent */] },
    { path: 'https://dudnikovoleg.github.io/sign-in', component: __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'https://dudnikovoleg.github.io/calendar', component: __WEBPACK_IMPORTED_MODULE_4__calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: 'https://dudnikovoleg.github.io/calendar/appointment', component: __WEBPACK_IMPORTED_MODULE_12__calendar_appointment_appointment_component__["a" /* AppointmentComponent */] },
    { path: 'https://dudnikovoleg.github.io/clients', component: __WEBPACK_IMPORTED_MODULE_5__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'https://dudnikovoleg.github.io/clients/add', component: __WEBPACK_IMPORTED_MODULE_10__clients_clients_add_clients_add_component__["a" /* ClientsAddComponent */] },
    { path: 'https://dudnikovoleg.github.io/service', component: __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */] },
    { path: 'https://dudnikovoleg.github.io/service/add', component: __WEBPACK_IMPORTED_MODULE_13__services_add_service_add_service_component__["a" /* AddServiceComponent */] },
    { path: 'https://dudnikovoleg.github.io/service/edit', component: __WEBPACK_IMPORTED_MODULE_14__services_edit_service_edit_service_component__["a" /* EditServiceComponent */] },
    { path: 'https://dudnikovoleg.github.io/availability', component: __WEBPACK_IMPORTED_MODULE_7__availability_availability_component__["a" /* AvailabilityComponent */] },
    { path: 'https://dudnikovoleg.github.io/black-out-times', component: __WEBPACK_IMPORTED_MODULE_8__black_out_times_black_out_times_component__["a" /* BlackOutTimesComponent */] },
    { path: 'https://dudnikovoleg.github.io/profile', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'https://dudnikovoleg.github.io/profile/edit', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_edit_profile_edit_component__["a" /* ProfileEditComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page_wrapper\">\n  <main class=\"page_wrapper__content container\">\n\n    <app-nav *ngIf=\"stylistPlanerCurrentUserId\"></app-nav>\n    <router-outlet></router-outlet>\n\n\n\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngDoCheck = function () {
        if (localStorage.getItem('stylistPlanerCurrentUserId') != null) {
            // this.router.navigate(['/']);
            this.stylistPlanerCurrentUserId = true;
        }
        else {
            // this.router.navigate(['sign-up']);
            this.stylistPlanerCurrentUserId = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__availability_availability_component__ = __webpack_require__("./src/app/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__black_out_times_black_out_times_component__ = __webpack_require__("./src/app/black-out-times/black-out-times.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sign_up_sign_up_service__ = __webpack_require__("./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clients_clients_add_clients_add_component__ = __webpack_require__("./src/app/clients/clients-add/clients-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_edit_profile_edit_component__ = __webpack_require__("./src/app/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_appointment_appointment_component__ = __webpack_require__("./src/app/calendar/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clients_client_details_client_details_component__ = __webpack_require__("./src/app/clients/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_add_service_add_service_component__ = __webpack_require__("./src/app/services/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_edit_service_edit_service_component__ = __webpack_require__("./src/app/services/edit-service/edit-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sign_up_thank_sign_up_thank_sign_up_component__ = __webpack_require__("./src/app/sign-up/thank-sign-up/thank-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sign_in_sign_in_service__ = __webpack_require__("./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_profile_service__ = __webpack_require__("./src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__calendar_calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__availability_availability_component__["a" /* AvailabilityComponent */],
                __WEBPACK_IMPORTED_MODULE_11__black_out_times_black_out_times_component__["a" /* BlackOutTimesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__clients_clients_add_clients_add_component__["a" /* ClientsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_profile_edit_profile_edit_component__["a" /* ProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__calendar_appointment_appointment_component__["a" /* AppointmentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__clients_client_details_client_details_component__["a" /* ClientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__services_add_service_add_service_component__["a" /* AddServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__services_edit_service_edit_service_component__["a" /* EditServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__sign_up_thank_sign_up_thank_sign_up_component__["a" /* ThankSignUpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__sign_up_sign_up_service__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_22__sign_in_sign_in_service__["a" /* SignInService */],
                __WEBPACK_IMPORTED_MODULE_23__profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_24__calendar_calendar_service__["a" /* CalendarService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/availability/availability.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Availability</h3><br>\r\n<p class=\"header\">Monday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%;\">✚</button>\r\n</div><br><br>\r\n\r\n<p class=\"header\">Tuesday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\r\n</div><br><br>\r\n\r\n<p class=\"header\">Wednesday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\r\n</div><br><br>\r\n\r\n<p class=\"header\">Thursday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\r\n</div><br><br>\r\n\r\n<p class=\"header\">Friday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\r\n</div><br><br>\r\n\r\n<p class=\"header\">Saturday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%;margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%;\">✚</button>\r\n</div><br><br>\r\n\r\n<p class=\"header\">Sunday</p>\r\n<div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n        <select>\r\n            <option>12:00 am</option>\r\n            <option>12:30 am</option>\r\n            <option>01:00 am</option>\r\n            <option>01:30 am</option>\r\n            <option>02:00 am</option>\r\n            <option>02:30 am</option>\r\n            <option>03:00 am</option>\r\n            <option>03:30 am</option>\r\n            <option>04:00 am</option>\r\n            <option>04:30 am</option>\r\n            <option>05:00 am</option>\r\n            <option>05:30 am</option>\r\n            <option>06:00 am</option>\r\n            <option>06:30 am</option>\r\n            <option>07:00 am</option>\r\n            <option>07:30 am</option>\r\n            <option>08:00 am</option>\r\n            <option>08:30 am</option>\r\n            <option>09:00 am</option>\r\n            <option>09:30 am</option>\r\n            <option>10:00 am</option>\r\n            <option>10:30 am</option>\r\n            <option>11:00 am</option>\r\n            <option>11:30 am</option>\r\n            <option>12:00 pm</option>\r\n            <option>12:30 pm</option>\r\n            <option>01:00 pm</option>\r\n            <option>01:30 pm</option>\r\n            <option>02:00 pm</option>\r\n            <option>02:30 pm</option>\r\n            <option>03:00 pm</option>\r\n            <option>03:30 pm</option>\r\n            <option>04:00 pm</option>\r\n            <option>04:30 pm</option>\r\n            <option>05:00 pm</option>\r\n            <option>05:30 pm</option>\r\n            <option>06:00 pm</option>\r\n            <option>06:30 pm</option>\r\n            <option>07:00 pm</option>\r\n            <option>07:30 pm</option>\r\n            <option>08:00 pm</option>\r\n            <option>08:30 pm</option>\r\n            <option>09:00 pm</option>\r\n            <option>09:30 pm</option>\r\n            <option>10:00 pm</option>\r\n            <option>10:30 pm</option>\r\n            <option>11:00 pm</option>\r\n            <option>11:30 pm</option>\r\n        </select></div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\r\n</div><br>\r\n<br>\r\n\r\n<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Done</button><br>\r\n\r\n"

/***/ }),

/***/ "./src/app/availability/availability.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/availability/availability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvailabilityComponent = /** @class */ (function () {
    function AvailabilityComponent() {
    }
    AvailabilityComponent.prototype.ngOnInit = function () {
    };
    AvailabilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-availability',
            template: __webpack_require__("./src/app/availability/availability.component.html"),
            styles: [__webpack_require__("./src/app/availability/availability.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AvailabilityComponent);
    return AvailabilityComponent;
}());



/***/ }),

/***/ "./src/app/black-out-times/black-out-times.component.html":
/***/ (function(module, exports) {

module.exports = " <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Black Out Times</h3><br>\r\n  <div id=\"calendar\" class=\"calendar_modern\">\r\n    <div class=\"calendar\">\r\n\r\n      <button class=\"btn btn-lg btn-light\">«</button>\r\n      <button style=\"float:right\" class=\"btn  btn-lg btn-light\">»</button>\r\n\r\n      <div class=\"months\">\r\n        <div class=\"month\" data-date=\"2018.2\">\r\n          <div class=\"header\"> February 2018 </div>\r\n          <div class=\"body\">\r\n\r\n            <div class=\"day_names\">\r\n              <i>Mo</i>\r\n              <i>Tu</i>\r\n              <i>We</i>\r\n              <i>Th</i>\r\n              <i>Fr</i>\r\n              <i>Sa</i>\r\n              <i>Su</i>\r\n            </div>\r\n\r\n            <div class=\"days\">\r\n              <!--<b>26</b>-->\r\n              <!--<b>27</b>-->\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <a href=\"#\" class=\"busy\">1</a>\r\n              <a href=\"#\" class=\"busy\">2</a>\r\n              <a href=\"#\" class=\"busy\">3</a>\r\n              <a href=\"#\" class=\"busy\">4</a>\r\n              <a href=\"#\" class=\"busy\">5</a>\r\n              <a href=\"#\" class=\"empty\">6</a>\r\n              <a href=\"#\" class=\"empty\">7</a>\r\n              <a href=\"#\" class=\"empty\">8</a>\r\n              <a href=\"#\" class=\"busy\">9</a>\r\n              <a href=\"#\" class=\"empty\">10</a>\r\n              <a href=\"#\" class=\"empty\">11</a>\r\n              <a href=\"#\" class=\"empty\">12</a>\r\n              <a href=\"#\" class=\"empty\">13</a>\r\n              <a href=\"#\" class=\"empty\">14</a>\r\n              <a href=\"#\" class=\"selected\">15</a>\r\n              <a href=\"#\" class=\"busy\">16</a>\r\n              <a href=\"#\" class=\"busy\">17</a>\r\n              <a href=\"#\" class=\"empty\">18</a>\r\n              <a href=\"#\" class=\"empty\">19</a>\r\n              <a href=\"#\" class=\"busy\">20</a>\r\n              <a href=\"#\" class=\"busy\">21</a>\r\n              <a href=\"#\" class=\"busy\">22</a>\r\n              <a href=\"#\" class=\"busy\">23</a>\r\n              <a href=\"#\" class=\"busy\">24</a>\r\n              <a href=\"#\" class=\"busy\">25</a>\r\n              <a href=\"#\" class=\"empty\">26</a>\r\n              <a href=\"#\" class=\"empty\">27</a>\r\n              <a href=\"#\" class=\"empty\">28</a>\r\n              <a href=\"#\" class=\"empty\">29</a>\r\n              <a href=\"#\" class=\"empty\">30</a>\r\n              <a href=\"#\" class=\"empty\">31</a>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"bodyofdiv\"></div>\r\n\r\n\r\n  <p class=\"header\">Sunday</p>\r\n  <div class=\"in_line\">\r\n    <div class=\"select_time\">\r\n      <select>\r\n        <option>12:00 am</option>\r\n        <option>12:30 am</option>\r\n        <option>01:00 am</option>\r\n        <option>01:30 am</option>\r\n        <option>02:00 am</option>\r\n        <option>02:30 am</option>\r\n        <option>03:00 am</option>\r\n        <option>03:30 am</option>\r\n        <option>04:00 am</option>\r\n        <option>04:30 am</option>\r\n        <option>05:00 am</option>\r\n        <option>05:30 am</option>\r\n        <option>06:00 am</option>\r\n        <option>06:30 am</option>\r\n        <option>07:00 am</option>\r\n        <option>07:30 am</option>\r\n        <option>08:00 am</option>\r\n        <option>08:30 am</option>\r\n        <option>09:00 am</option>\r\n        <option>09:30 am</option>\r\n        <option>10:00 am</option>\r\n        <option>10:30 am</option>\r\n        <option>11:00 am</option>\r\n        <option>11:30 am</option>\r\n        <option>12:00 pm</option>\r\n        <option>12:30 pm</option>\r\n        <option>01:00 pm</option>\r\n        <option>01:30 pm</option>\r\n        <option>02:00 pm</option>\r\n        <option>02:30 pm</option>\r\n        <option>03:00 pm</option>\r\n        <option>03:30 pm</option>\r\n        <option>04:00 pm</option>\r\n        <option>04:30 pm</option>\r\n        <option>05:00 pm</option>\r\n        <option>05:30 pm</option>\r\n        <option>06:00 pm</option>\r\n        <option>06:30 pm</option>\r\n        <option>07:00 pm</option>\r\n        <option>07:30 pm</option>\r\n        <option>08:00 pm</option>\r\n        <option>08:30 pm</option>\r\n        <option>09:00 pm</option>\r\n        <option>09:30 pm</option>\r\n        <option>10:00 pm</option>\r\n        <option>10:30 pm</option>\r\n        <option>11:00 pm</option>\r\n        <option>11:30 pm</option>\r\n      </select> </div>\r\n    <p>TO</p>\r\n    <div class=\"select_time\">\r\n      <select>\r\n        <option>12:00 am</option>\r\n        <option>12:30 am</option>\r\n        <option>01:00 am</option>\r\n        <option>01:30 am</option>\r\n        <option>02:00 am</option>\r\n        <option>02:30 am</option>\r\n        <option>03:00 am</option>\r\n        <option>03:30 am</option>\r\n        <option>04:00 am</option>\r\n        <option>04:30 am</option>\r\n        <option>05:00 am</option>\r\n        <option>05:30 am</option>\r\n        <option>06:00 am</option>\r\n        <option>06:30 am</option>\r\n        <option>07:00 am</option>\r\n        <option>07:30 am</option>\r\n        <option>08:00 am</option>\r\n        <option>08:30 am</option>\r\n        <option>09:00 am</option>\r\n        <option>09:30 am</option>\r\n        <option>10:00 am</option>\r\n        <option>10:30 am</option>\r\n        <option>11:00 am</option>\r\n        <option>11:30 am</option>\r\n        <option>12:00 pm</option>\r\n        <option>12:30 pm</option>\r\n        <option>01:00 pm</option>\r\n        <option>01:30 pm</option>\r\n        <option>02:00 pm</option>\r\n        <option>02:30 pm</option>\r\n        <option>03:00 pm</option>\r\n        <option>03:30 pm</option>\r\n        <option>04:00 pm</option>\r\n        <option>04:30 pm</option>\r\n        <option>05:00 pm</option>\r\n        <option>05:30 pm</option>\r\n        <option>06:00 pm</option>\r\n        <option>06:30 pm</option>\r\n        <option>07:00 pm</option>\r\n        <option>07:30 pm</option>\r\n        <option>08:00 pm</option>\r\n        <option>08:30 pm</option>\r\n        <option>09:00 pm</option>\r\n        <option>09:30 pm</option>\r\n        <option>10:00 pm</option>\r\n        <option>10:30 pm</option>\r\n        <option>11:00 pm</option>\r\n        <option>11:30 pm</option>\r\n      </select> </div>\r\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 21%;\">✘</button></div>\r\n\r\n  <div><button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button></div><br>\r\n  <br>\r\n\r\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Save</button><br>\r\n"

/***/ }),

/***/ "./src/app/black-out-times/black-out-times.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/black-out-times/black-out-times.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlackOutTimesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlackOutTimesComponent = /** @class */ (function () {
    function BlackOutTimesComponent() {
    }
    BlackOutTimesComponent.prototype.ngOnInit = function () {
    };
    BlackOutTimesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-black-out-times',
            template: __webpack_require__("./src/app/black-out-times/black-out-times.component.html"),
            styles: [__webpack_require__("./src/app/black-out-times/black-out-times.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlackOutTimesComponent);
    return BlackOutTimesComponent;
}());



/***/ }),

/***/ "./src/app/calendar/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Shedule Appointment</h3><br>\r\n  <fieldset>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" placeholder=\"Client Name\" name=\"client_name\" type=\"text\" autofocus=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" placeholder=\"Client Phone Number\" name=\"client_phone_number\" type=\"tel\">\r\n    </div>\r\n    <div class=\"select_block\">\r\n      <select>\r\n        <option disabled=\"\" selected=\"\">Service</option>\r\n        <option>Hair Cut</option>\r\n        <option>Cut and Color</option>\r\n      </select>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div id=\"calendar\" class=\"calendar_modern\">\r\n    <div class=\"calendar\">\r\n\r\n      <button class=\"btn btn-lg btn-light\">«</button>\r\n      <button style=\"float:right\" class=\"btn  btn-lg btn-light\">»</button>\r\n\r\n      <div class=\"months\">\r\n        <div class=\"month\" data-date=\"2018.2\">\r\n          <div class=\"header\"> February 2018 </div>\r\n          <div class=\"body\">\r\n\r\n            <div class=\"day_names\">\r\n              <i>Mo</i>\r\n              <i>Tu</i>\r\n              <i>We</i>\r\n              <i>Th</i>\r\n              <i>Fr</i>\r\n              <i>Sa</i>\r\n              <i>Su</i>\r\n            </div>\r\n\r\n            <div class=\"days\">\r\n              <!--<b>26</b>-->\r\n              <!--<b>27</b>-->\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <a href=\"#\" class=\"busy\">1</a>\r\n              <a href=\"#\" class=\"busy\">2</a>\r\n              <a href=\"#\" class=\"busy\">3</a>\r\n              <a href=\"#\" class=\"busy\">4</a>\r\n              <a href=\"#\" class=\"busy\">5</a>\r\n              <a href=\"#\" class=\"empty\">6</a>\r\n              <a href=\"#\" class=\"empty\">7</a>\r\n              <a href=\"#\" class=\"empty\">8</a>\r\n              <a href=\"#\" class=\"busy\">9</a>\r\n              <a href=\"#\" class=\"empty\">10</a>\r\n              <a href=\"#\" class=\"empty\">11</a>\r\n              <a href=\"#\" class=\"empty\">12</a>\r\n              <a href=\"#\" class=\"empty\">13</a>\r\n              <a href=\"#\" class=\"empty\">14</a>\r\n              <a href=\"#\" class=\"selected\">15</a>\r\n              <a href=\"#\" class=\"busy\">16</a>\r\n              <a href=\"#\" class=\"busy\">17</a>\r\n              <a href=\"#\" class=\"empty\">18</a>\r\n              <a href=\"#\" class=\"empty\">19</a>\r\n              <a href=\"#\" class=\"busy\">20</a>\r\n              <a href=\"#\" class=\"busy\">21</a>\r\n              <a href=\"#\" class=\"busy\">22</a>\r\n              <a href=\"#\" class=\"busy\">23</a>\r\n              <a href=\"#\" class=\"busy\">24</a>\r\n              <a href=\"#\" class=\"busy\">25</a>\r\n              <a href=\"#\" class=\"empty\">26</a>\r\n              <a href=\"#\" class=\"empty\">27</a>\r\n              <a href=\"#\" class=\"empty\">28</a>\r\n              <a href=\"#\" class=\"empty\">29</a>\r\n              <a href=\"#\" class=\"empty\">30</a>\r\n              <a href=\"#\" class=\"empty\">31</a>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n              <s></s>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"bodyofdiv\"></div>\r\n\r\n\r\n  <fieldset>\r\n    <div class=\"form-group\">\r\n      <div class=\"select_block\">\r\n        <select>\r\n          <option disabled=\"\" selected=\"\">Start Time</option>\r\n          <option>12:00 am</option>\r\n          <option>12:30 am</option>\r\n          <option>01:00 am</option>\r\n          <option>01:30 am</option>\r\n          <option>02:00 am</option>\r\n          <option>02:30 am</option>\r\n          <option>03:00 am</option>\r\n          <option>03:30 am</option>\r\n          <option>04:00 am</option>\r\n          <option>04:30 am</option>\r\n          <option>05:00 am</option>\r\n          <option>05:30 am</option>\r\n          <option>06:00 am</option>\r\n          <option>06:30 am</option>\r\n          <option>07:00 am</option>\r\n          <option>07:30 am</option>\r\n          <option>08:00 am</option>\r\n          <option>08:30 am</option>\r\n          <option>09:00 am</option>\r\n          <option>09:30 am</option>\r\n          <option>10:00 am</option>\r\n          <option>10:30 am</option>\r\n          <option>11:00 am</option>\r\n          <option>11:30 am</option>\r\n          <option>12:00 pm</option>\r\n          <option>12:30 pm</option>\r\n          <option>01:00 pm</option>\r\n          <option>01:30 pm</option>\r\n          <option>02:00 pm</option>\r\n          <option>02:30 pm</option>\r\n          <option>03:00 pm</option>\r\n          <option>03:30 pm</option>\r\n          <option>04:00 pm</option>\r\n          <option>04:30 pm</option>\r\n          <option>05:00 pm</option>\r\n          <option>05:30 pm</option>\r\n          <option>06:00 pm</option>\r\n          <option>06:30 pm</option>\r\n          <option>07:00 pm</option>\r\n          <option>07:30 pm</option>\r\n          <option>08:00 pm</option>\r\n          <option>08:30 pm</option>\r\n          <option>09:00 pm</option>\r\n          <option>09:30 pm</option>\r\n          <option>10:00 pm</option>\r\n          <option>10:30 pm</option>\r\n          <option>11:00 pm</option>\r\n          <option>11:30 pm</option>\r\n        </select> </div>\r\n    </div>\r\n    <div class=\"form-group d-inline-flex\">\r\n      <input class=\"form-control input-lg col-10\" placeholder=\"Duration\" name=\"duration\" type=\"number\">\r\n    </div><p class=\"labels\">min</p>\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-lg btn-primary btn-block\">Save Appointment</button>\r\n    </div>\r\n  </fieldset>\r\n  <br>\r\n  <a class=\"text-danger delete \" id=\"delete_service\">Delete Appointment</a><br><br>\r\n"

/***/ }),

/***/ "./src/app/calendar/appointment/appointment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent() {
    }
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appointment',
            template: __webpack_require__("./src/app/calendar/appointment/appointment.component.html"),
            styles: [__webpack_require__("./src/app/calendar/appointment/appointment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Calendar</h3><br>\r\n<div id=\"calendar\" class=\"calendar_modern\">\r\n    <div class=\"calendar\">\r\n\r\n        <button class=\"btn btn-lg btn-light\">&laquo;</button>\r\n        <button style=\"float:right\" class=\"btn  btn-lg btn-light\">&raquo;</button>\r\n\r\n        <div class=\"months\">\r\n            <div class=\"month\" data-date=\"2018.2\">\r\n                <div class=\"header\"> February 2018</div>\r\n                <div class=\"body\">\r\n\r\n                    <div class=\"day_names\">\r\n                        <i>Mo</i>\r\n                        <i>Tu</i>\r\n                        <i>We</i>\r\n                        <i>Th</i>\r\n                        <i>Fr</i>\r\n                        <i>Sa</i>\r\n                        <i>Su</i>\r\n                    </div>\r\n\r\n                    <div class=\"days\">\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <a href=\"#\" class=\"busy\">1</a>\r\n                        <a href=\"#\" class=\"busy\">2</a>\r\n                        <a href=\"#\" class=\"busy\">3</a>\r\n                        <a href=\"#\" class=\"busy\">4</a>\r\n                        <a href=\"#\" class=\"busy\">5</a>\r\n                        <a href=\"#\" class=\"empty\">6</a>\r\n                        <a href=\"#\" class=\"empty\">7</a>\r\n                        <a href=\"#\" class=\"empty\">8</a>\r\n                        <a href=\"#\" class=\"busy\">9</a>\r\n                        <a href=\"#\" class=\"empty\">10</a>\r\n                        <a href=\"#\" class=\"empty\">11</a>\r\n                        <a href=\"#\" class=\"empty\">12</a>\r\n                        <a href=\"#\" class=\"empty\">13</a>\r\n                        <a href=\"#\" class=\"empty\">14</a>\r\n                        <a href=\"#\" class=\"selected\">15</a>\r\n                        <a href=\"#\" class=\"busy\">16</a>\r\n                        <a href=\"#\" class=\"busy\">17</a>\r\n                        <a href=\"#\" class=\"empty\">18</a>\r\n                        <a href=\"#\" class=\"empty\">19</a>\r\n                        <a href=\"#\" class=\"busy\">20</a>\r\n                        <a href=\"#\" class=\"busy\">21</a>\r\n                        <a href=\"#\" class=\"busy\">22</a>\r\n                        <a href=\"#\" class=\"busy\">23</a>\r\n                        <a href=\"#\" class=\"busy\">24</a>\r\n                        <a href=\"#\" class=\"busy\">25</a>\r\n                        <a href=\"#\" class=\"empty\">26</a>\r\n                        <a href=\"#\" class=\"empty\">27</a>\r\n                        <a href=\"#\" class=\"empty\">28</a>\r\n                        <a href=\"#\" class=\"empty\">29</a>\r\n                        <a href=\"#\" class=\"empty\">30</a>\r\n                        <a href=\"#\" class=\"empty\">31</a>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                        <s></s>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n\r\n<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Add Appointment</button>\r\n<br>\r\n<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Manage availability</button>\r\n<br><br>\r\n\r\n\r\n<table class=\"table table-striped table_list\" id=\"\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"header\">Feb 23 Reservation</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td>10:15 am - 11:00 am <br>\r\n            Job<br>\r\n            Hariot\r\n        </td>\r\n        <td>\r\n            <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"float: right\">Edit</button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>12:00 pm - 13:00 pm <br>\r\n            Ann <br>\r\n            Hair color\r\n        </td>\r\n        <td>\r\n            <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"float: right\">Edit</button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>15:00 pm - 17:00 pm <br>\r\n            Ben <br>\r\n            Hariot\r\n        </td>\r\n        <td>\r\n            <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"float: right\">Edit</button>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.table_list th {\n  font-size: 1.25rem;\n  border: none; }\n.table_list td {\n  border: none; }\n.table_list tr {\n  border: none; }\n.table_list thead {\n  border: none; }\n.table_list table {\n  border: none; }\ndiv {\n  font-size: 13px; }\n.calendar_modern {\n  padding: 0;\n  margin-bottom: 60px; }\n.calendar_modern .calendar {\n  margin: auto;\n  width: 360px;\n  height: 360px; }\n.calendar_modern .calendar .nav {\n  height: 0;\n  position: relative; }\n.calendar_modern .calendar .nav i, .calendar_modern .calendar .nav b {\n  display: block;\n  font-style: normal;\n  position: absolute;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  z-index: 100;\n  top: 0; }\n/*левый переключатель месяца*/\n.calendar_modern .calendar .nav i {\n  left: 0;\n  /*border-right: 1px solid #423a37;*/\n  /*background: url(http://cs4399.userapi.com/u49225742/docs/58f03726ea27/lft.png) no-repeat center center transparent;*/ }\n/*правый переключатель месяца*/\n.calendar_modern .calendar .nav b {\n  right: 0;\n  /*border-left: 1px solid #423a37;*/\n  /*background: url(http://cs4399.userapi.com/u49225742/docs/5fd2e9dd3a9f/rgt.png) no-repeat center center transparent;*/ }\n.calendar_modern .calendar .month .header {\n  height: 51px;\n  position: relative;\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n  line-height: 51px;\n  font-weight: 400;\n  font-size: 1.4em;\n  text-align: center;\n  background: white; }\n.calendar_modern .calendar .month .body {\n  background: white; }\n.calendar_modern .calendar .month .body .day_names {\n  height: 51px; }\n.calendar_modern .calendar .month .body .day_names i {\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  height: 51px;\n  line-height: 51px;\n  text-align: center;\n  font-style: normal;\n  float: left;\n  width: 51px; }\n.calendar_modern .calendar .month .body .days i, .calendar_modern .calendar .month .body .days b, .calendar_modern .calendar .month .body .days s, .calendar_modern .calendar .month .body .days a {\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  float: left;\n  width: 51px;\n  height: 51px;\n  color: #8d8d8d;\n  font-size: 1.5em;\n  font-weight: bold;\n  line-height: 51px;\n  text-align: center;\n  font-style: normal;\n  background: #e4e4e4;\n  text-decoration: none;\n  /* table like borders */\n  /*border-right: 1px solid #aaaaaa;*/\n  /*border-bottom: 1px solid #aaaaaa;*/\n  /* table like borders */ }\n.calendar_modern .calendar .month .body .days i.weekend, .calendar_modern .calendar .month .body .days b.weekend, .calendar_modern .calendar .month .body .days s.weekend, .calendar_modern .calendar .month .body .days a.weekend {\n  color: #444;\n  background: InactiveCaption; }\n.calendar_modern .calendar .month .body .days i:nth-child(7n + 1), .calendar_modern .calendar .month .body .days b:nth-child(7n + 1), .calendar_modern .calendar .month .body .days s:nth-child(7n + 1), .calendar_modern .calendar .month .body .days a:nth-child(7n + 1) {\n  /*border-left: 1px solid #aaaaaa;*/ }\n.calendar_modern .calendar .month .body .days i:nth-child(n+1):nth-child(-n+7), .calendar_modern .calendar .month .body .days b:nth-child(n+1):nth-child(-n+7), .calendar_modern .calendar .month .body .days s:nth-child(n+1):nth-child(-n+7), .calendar_modern .calendar .month .body .days a:nth-child(n+1):nth-child(-n+7) {\n  /*border-top: 1px solid #aaaaaa;*/ }\n.calendar_modern .calendar .month .body .days i:nth-child(n+1):nth-child(-n+7).empty, .calendar_modern .calendar .month .body .days b:nth-child(n+1):nth-child(-n+7).empty, .calendar_modern .calendar .month .body .days s:nth-child(n+1):nth-child(-n+7).empty, .calendar_modern .calendar .month .body .days a:nth-child(n+1):nth-child(-n+7).empty {\n  /*border-top: 1px solid #d5d5d5;*/\n  /*border-bottom: 1px solid #aaaaaa;*/ }\n.calendar_modern .calendar .month .body .days s:nth-child(7n + 1) {\n  /*border-left: 1px solid #d5d5d5;*/ }\n.calendar_modern .calendar .month .body .days a {\n  color: #372f2d;\n  background: white;\n  /*text-shadow: 1px 1px 0px white;*/\n  /*background-image: -webkit-gradient(linear, 50% 100%, 50% 0%, color-stop(0%, #dadada), color-stop(100%, #cfcfcf));*/\n  /*background-image: -webkit-linear-gradient(bottom, #dadada, #cfcfcf);*/\n  /*background-image: -moz-linear-gradient(bottom, #dadada, #cfcfcf);*/\n  /*background-image: -o-linear-gradient(bottom, #dadada, #cfcfcf);*/\n  /*background-image: linear-gradient(bottom, #dadada, #cfcfcf);*/ }\n.calendar_modern .calendar .month .body .days a.today {\n  color: black;\n  -webkit-box-shadow: 0 0 18px #006600 inset;\n  box-shadow: 0 0 50px #007bff inset;\n  border-radius: 50%;\n  /*text-shadow: 1px 1px 2px teal;*/\n  /*-webkit-box-shadow: 0 0 18px teal inset;*/\n  /*-moz-box-shadow: 0 0 18px teal inset;*/\n  /*box-shadow: 0 0 18px teal inset;*/ }\n.calendar_modern .calendar .month .body .days a.busy {\n  color: black;\n  /*-webkit-box-shadow: 0 0 18px #006600 inset;*/\n  /*-moz-box-shadow: 0 0 18px #006600 inset;*/\n  /*box-shadow: 0 0 15px #d03f3f inset;*/\n  /*border-radius: 20px;*/ }\n.calendar_modern .calendar .month .body .days a.empty {\n  /*-webkit-box-shadow: 0 0 18px #006600 inset;*/\n  /*-moz-box-shadow: 0 0 18px #006600 inset;*/\n  -webkit-box-shadow: 0 0 4px #28a745 inset;\n          box-shadow: 0 0 4px #28a745 inset;\n  /*box-shadow: 0 0 50px #25a50e inset;*/\n  /*box-shadow: 0 0 4px #008489 inset;*/\n  border-radius: 50%;\n  color: #28a745;\n  /*color: #008489;*/ }\n.calendar_modern .calendar .month .body .days a.selected {\n  /*text-shadow: 1px 1px 2px blue;*/\n  color: white;\n  -webkit-box-shadow: 0 0 100px #28a745 inset;\n          box-shadow: 0 0 100px #28a745 inset;\n  /*box-shadow: 0 0 50px #25a50e inset;*/\n  /*box-shadow: 0 0 100px #008489 inset;!*box-shadow: 0 0 50px #25a50e inset;*!*/\n  border-radius: 50%; }\n/*.calendar_modern .calendar .month .body .days a:hover {*/\n/*color: black;*/\n/*-webkit-transition-property: text-shadow;*/\n/*-moz-transition-property: text-shadow;*/\n/*-o-transition-property: text-shadow;*/\n/*transition-property: text-shadow;*/\n/*-webkit-transition-property: box-shadow;*/\n/*-moz-transition-property: box-shadow;*/\n/*-o-transition-property: box-shadow;*/\n/*transition-property: box-shadow;*/\n/*-webkit-transition-duration: 0.2s;*/\n/*-moz-transition-duration: 0.2s;*/\n/*-o-transition-duration: 0.2s;*/\n/*transition-duration: 0.2s;*/\n/*!*text-shadow: 1px 1px 2px green;*!*/\n/*-webkit-box-shadow: 0 0 18px #006600 inset;*/\n/*-moz-box-shadow: 0 0 18px #006600 inset;*/\n/*box-shadow: 0 0 50px #007bff inset;*/\n/*border-radius: 20px;*/\n/*}*/\n.calendar_modern .calendar .month .body .days b, .calendar_modern .calendar .month .body .days i, .calendar_modern .calendar .month .body .days s {\n  color: #ccc; }\n.calendar_modern .calendar .month .body .days b, .calendar_modern .calendar .month .body .days s {\n  background: white;\n  /*border-color: #d5d5d5;*/ }\n.table_list th {\n  font-size: 1.25rem;\n  border: none; }\n.table_list td {\n  border: none; }\n.table_list tr {\n  border: none; }\n.table_list thead {\n  border: none; }\n.table_list table {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService) {
        this.calendarService = calendarService;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.calendarService.getCalendardata()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("./src/app/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'x-api-key': '9UKaHgvVUu17sIVp0j5LF7tKqjvxQTIu1IkBUZ9y'
    })
};
var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.getCalendarUrl = 'https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users/13/schedule?period=month&date=2018-03-24';
    }
    CalendarService.prototype.getCalendardata = function () {
        return this.http.get(this.getCalendarUrl, httpOptions);
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/clients/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Client's Details</h3><br>\r\n  <p>John Adams <button class=\"btn btn-link\" style=\"float:right;\">edit</button><br>\r\n    913-271-7154</p>\r\n  <hr>\r\n  <p>Next Appointment<br>\r\n    Cut and color<br>\r\n    Tuesday, May 5 2018 at 1pm</p>\r\n  <br>\r\n\r\n  <button class=\"btn btn-lg btn-primary btn-block\">Send Reminder</button><br>\r\n  <div class=\"alert alert-success\" role=\"alert\">\r\n    Reminder is sent\r\n  </div><br>\r\n\r\n  <p>Previous Appointment</p>\r\n\r\n  <table class=\"table table-bordered table-striped\">\r\n    <thead class=\"thead-default\">\r\n    <tr>\r\n      <th>Service</th>\r\n      <th>Date and Time</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td>Cut</td>\r\n      <td>Apr 1 at 1pm</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Cut and Color</td>\r\n      <td>Mar 1 at 1pm</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n"

/***/ }),

/***/ "./src/app/clients/client-details/client-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/client-details/client-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent() {
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
    };
    ClientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-details',
            template: __webpack_require__("./src/app/clients/client-details/client-details.component.html"),
            styles: [__webpack_require__("./src/app/clients/client-details/client-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients-add/clients-add.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Add Client</h3><br>\r\n  <form class=\"form_save_client mb-3\" action=\"\">\r\n    <fieldset>\r\n      <div class=\"form-group\">\r\n        <input type=\"tel\" id=\"inputPhone\" class=\"form-control\" placeholder=\"Phone number\" required=\"\" autofocus=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\">\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Save </button>\r\n    </fieldset>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/clients/clients-add/clients-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clients-add/clients-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsAddComponent = /** @class */ (function () {
    function ClientsAddComponent() {
    }
    ClientsAddComponent.prototype.ngOnInit = function () {
    };
    ClientsAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients-add',
            template: __webpack_require__("./src/app/clients/clients-add/clients-add.component.html"),
            styles: [__webpack_require__("./src/app/clients/clients-add/clients-add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsAddComponent);
    return ClientsAddComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Clients</h3><br>\r\n  <button routerLink=\"add\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Add Client</button>\r\n  <br><br>\r\n  <table id=\"example\" class=\"table table-bordered table-striped\" cellspacing=\"0\" width=\"100%\">\r\n    <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Next Appointment</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td>Tiger Nixon</td>\r\n      <td>2pm May 1</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Bob Marly</td>\r\n      <td>5pm May 15</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Kel Washin </td>\r\n      <td>2pm April 1</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n"

/***/ }),

/***/ "./src/app/clients/clients.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-light bg-light\" >\r\n  <a class=\"navbar-brand  col-black h3\">\r\n    Chronos\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"navbar-collapse collapse show\" id=\"navbarNavDropdown\" style=\"\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/calendar\">Calendar</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/clients\">Clients</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/service\">Services</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/availability\">Availability</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/black-out-times\">Black Out Times</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"dropdown-item h6\" routerLink=\"/calendar\">Sign Out</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<hr>\r\n\r\n\r\n<!--<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">-->\r\n  <!--<a class=\"navbar-brand  col-black\">-->\r\n    <!--\"Salon Name\"-->\r\n  <!--</a>-->\r\n  <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\r\n    <!--<span class=\"navbar-toggler-icon\"></span>-->\r\n  <!--</button>-->\r\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">-->\r\n    <!--<ul class=\"navbar-nav\">-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item active h6\" href=\"main_calendar.html\">Calendar</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item h6\" href=\"clients.html\">Clients</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item h6\" href=\"services.html\">Services</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item h6\" href=\"availability.html\">Availability</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item h6\" href=\"black_out_times.html\">Black Out Times</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item h6\" href=\"profile.html\">Profile</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"dropdown-item h6\" href=\"sign_in.html\">Sign Out</a>-->\r\n      <!--</li>-->\r\n    <!--</ul>-->\r\n  <!--</div>-->\r\n<!--</nav>-->\r\n<!--<hr>-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-edit/profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Edit Profile</h3><br>\r\n<form (submit)=\"editStylistProfile($event)\">\r\n  <fieldset *ngFor=\"let stylistData of profileData\">\r\n    <label class=\"h6\">Phone</label>\r\n    <div class=\"form-group\">\r\n      <input autofocus=\"autofocus\" class=\"form-control input-lg\" value=\"{{stylistData.stylistPhone}}\" placeholder=\"Phone\" name=\"phone\" type=\"tel\">\r\n    </div>\r\n    <label class=\"h6\">Name</label>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" value=\"{{stylistData.stylistFirstName}}\"  placeholder=\"Name\" name=\"name\" type=\"text\">\r\n    </div>\r\n    <label class=\"h6\">Last Name</label>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" value=\"{{stylistData.stylistLastName}}\" placeholder=\"Last Name\" name=\"last_name\" type=\"text\">\r\n    </div>\r\n    <label class=\"h6\">Email</label>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" value=\"{{stylistData.stylistEmail}}\" placeholder=\"E-mail\" name=\"email\" type=\"email\">\r\n    </div>\r\n    <label class=\"h6\">Salon name</label>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" value=\"{{stylistData.salonName}}\" placeholder=\"Salon name\" name=\"salon_name\" type=\"text\">\r\n    </div>\r\n    <label class=\"h6\">Salon address</label>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" value=\"{{stylistData.salonAddress}}\" placeholder=\"Salon address\" name=\"salon_address\" type=\"text\">\r\n    </div>\r\n  </fieldset>\r\n\r\n  <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Save</button><br>\r\n</form><br>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile-edit/profile-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile-edit/profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("./src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileData().subscribe(function (data) {
            _this.profileData = data.stylistProfile;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileEditComponent.prototype.editStylistProfile = function (e) {
        var _this = this;
        e.preventDefault();
        var salonId = this.profileData[0].salonId, userPhone = e.target.elements[1].value, userFirstName = e.target.elements[2].value, userLastName = e.target.elements[3].value, userEmail = e.target.elements[4].value, userSalonName = e.target.elements[5].value, userSalonEmail = e.target.elements[6].value;
        var profileEditData = {
            'salon': {
                'id': salonId,
                'name': userSalonName,
                'address': userSalonEmail
            },
            'stylist': {
                'firstName': userFirstName,
                'lastName': userLastName,
                'phone': userPhone,
                'email': userEmail
            }
        };
        this.profileService.postProfileData(profileEditData).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['profile']);
        }, function (err) {
            console.log(err);
        });
        return false;
    };
    ProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-edit',
            template: __webpack_require__("./src/app/profile/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile-edit/profile-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = " <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Profile</h3><br>\r\n\r\n <p *ngFor=\"let salon of profileData\">\r\n     {{salon.salonName }}<br>\r\n     {{salon.salonAddress}}<br>\r\n </p>\r\n\r\n <p *ngFor=\"let stylist of profileData\">\r\n     {{stylist.stylistFirstName}}  {{stylist.stylistLastName}}<br>\r\n     {{stylist.stylistPhone}}<br>\r\n     {{stylist.stylistEmail}}<br>\r\n </p>\r\n\r\n\r\n <p>Clients can book an appointment by texting &lt;913 890 0909&gt;</p>\r\n <br>\r\n\r\n <button routerLink=\"edit\" class=\"btn btn-success btn-lg btn-block\">Edit</button>\r\n <br>\r\n\r\n  <!--<p>Studio 8 Hair Salon<br>-->\r\n    <!--18982 W 119th St<br>-->\r\n    <!--Overland Park, KS 66215</p>-->\r\n  <!--<br>-->\r\n  <!--<p>Becca Dawson<br>-->\r\n    <!--913-289-9019<br>-->\r\n    <!--becco@studio8salon.com</p><br>-->\r\n  <!--<p>Clients can book an appointment by texting &lt;913 890 0909&gt;</p>-->\r\n  <!--<br>-->\r\n  <!--<br>-->\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("./src/app/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileData().subscribe(function (data) {
            _this.profileData = data.stylistProfile;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'x-api-key': '9UKaHgvVUu17sIVp0j5LF7tKqjvxQTIu1IkBUZ9y'
    })
};
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.getProfileUrl = 'https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users/13';
        this.postProfileUrl = 'https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users/13';
    }
    ProfileService.prototype.getProfileData = function () {
        return this.http.get(this.getProfileUrl, httpOptions)
            .map(function (data) {
            var dataSalon = data.salon, dataStylist = data.stylist;
            return {
                'stylistProfile': [
                    {
                        'salonId': dataSalon.id,
                        'salonName': dataSalon.name,
                        'salonAddress': dataSalon.address,
                        'stylistEmail': dataStylist.email,
                        'stylistFirstName': dataStylist.firstName,
                        'stylistLastName': dataStylist.lastName,
                        'stylistPhone': dataStylist.phone
                    }
                ]
            };
        });
    };
    ProfileService.prototype.postProfileData = function (profileEditData) {
        return this.http.post(this.postProfileUrl, profileEditData, httpOptions);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/add-service/add-service.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Add Service</h3><br>\r\n  <fieldset>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" name=\"service_type\" type=\"text\" value=\"Hair Cut\">\r\n    </div>\r\n    <div class=\"form-group d-inline-block\">\r\n      <input class=\"form-control input-lg col-10\" name=\"price\" type=\"number\" value=\"69\"></div>\r\n    <!--<label class=\"col-form-label-sm style=\" style=\"left: 170px;\">$</label>-->\r\n    <p style=\"left: 3px;display: inline-block\">$</p>\r\n    <br>\r\n    <div class=\"form-group d-inline-flex\">\r\n      <input class=\"form-control input-lg col-10\" name=\"duration\" type=\"number\" value=\"45\">\r\n      <!--<label class=\"col-form-label-sm \"  >&emsp;min</label>-->\r\n    </div>\r\n    <p style=\"left: 3px;display: inline-block\">min</p>\r\n    <button class=\"btn btn-lg btn-primary btn-block\">Save</button>\r\n  </fieldset>\r\n\r\n"

/***/ }),

/***/ "./src/app/services/add-service/add-service.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/add-service/add-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddServiceComponent = /** @class */ (function () {
    function AddServiceComponent() {
    }
    AddServiceComponent.prototype.ngOnInit = function () {
    };
    AddServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-service',
            template: __webpack_require__("./src/app/services/add-service/add-service.component.html"),
            styles: [__webpack_require__("./src/app/services/add-service/add-service.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddServiceComponent);
    return AddServiceComponent;
}());



/***/ }),

/***/ "./src/app/services/edit-service/edit-service.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Edit Service</h3><br>\r\n  <fieldset>\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control input-lg\" name=\"service_type\" type=\"text\" value=\"Hair Cut\">\r\n    </div>\r\n    <div class=\"form-group d-inline-block\">\r\n      <input class=\"form-control input-lg col-10\" name=\"price\" type=\"number\" value=\"69\"></div>\r\n    <!--<label class=\"col-form-label-sm style=\" style=\"left: 170px;\">$</label>-->\r\n    <p class=\"labels\">$</p>\r\n    <br>\r\n    <div class=\"form-group d-inline-flex\">\r\n      <input class=\"form-control input-lg col-10\" name=\"duration\" type=\"number\" value=\"45\">\r\n      <!--<label class=\"col-form-label-sm \"  >&emsp;min</label>-->\r\n    </div>\r\n    <p class=\"labels\">min</p>\r\n    <button class=\"btn btn-lg btn-primary btn-block\">Save</button>\r\n  </fieldset>\r\n  <br>\r\n  <br>\r\n  <a class=\"text-danger delete \" id=\"delete_service\">Delete the Service</a><br><br>\r\n\r\n"

/***/ }),

/***/ "./src/app/services/edit-service/edit-service.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/edit-service/edit-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditServiceComponent = /** @class */ (function () {
    function EditServiceComponent() {
    }
    EditServiceComponent.prototype.ngOnInit = function () {
    };
    EditServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-service',
            template: __webpack_require__("./src/app/services/edit-service/edit-service.component.html"),
            styles: [__webpack_require__("./src/app/services/edit-service/edit-service.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditServiceComponent);
    return EditServiceComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Services</h3><br>\r\n  <table class=\"table table-striped table_list\">\r\n    <tbody>\r\n    <tr>\r\n      <td>Hair Cut<br>\r\n        69$<br>\r\n        30 minutes</td>\r\n      <td><button routerLink=\"edit\" class=\"btn btn-link\" style=\"float:right;\">edit</button></td>\r\n    </tr>\r\n    <tr>\r\n      <td>Hair Cut<br>\r\n        100$<br>\r\n        45 minutes</td>\r\n      <td><button routerLink=\"edit\" class=\"btn btn-link\" style=\"float:right;\">edit</button></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n  <button routerLink=\"add\" type=\"button\" class=\"btn btn-success btn-lg btn-block\">Add Service</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"signInUser($event)\" class=\"form_sign_in  mb-3\">\r\n  <h3 class=\"h3 mb-3 font-weight-normal\">Sign In</h3>\r\n  <div class=\"card card-body\">\r\n    <fieldset>\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control input-lg\" placeholder=\"Email address\"  autofocus=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control input-lg\" placeholder=\"Password\"  >\r\n      </div>\r\n\r\n\r\n      <input class=\"btn btn-lg btn-primary btn-block\" value=\"Sign In\" type=\"submit\">\r\n    </fieldset>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign_in_service__ = __webpack_require__("./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(signInService, router) {
        this.signInService = signInService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    /* Send user data for sign-up
  ------------------------------------*/
    SignInComponent.prototype.signInUser = function (e) {
        var _this = this;
        e.preventDefault();
        var userPhone = e.target.elements[1].value, userPassword = e.target.elements[2].value;
        var usersData = {
            'phone': userPhone,
            'password': userPassword
        };
        this.signInService.putSignInData(usersData)
            .subscribe(function (data) {
            localStorage.setItem('stylistPlanerCurrentUserId', data.result);
            console.log(data);
            console.log(localStorage);
            _this.router.navigate(['/service']);
        }, function (error) {
            console.log('error');
        });
        console.log(userPhone);
        console.log(userPassword);
        return false;
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sign_in_service__["a" /* SignInService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'x-api-key': '9UKaHgvVUu17sIVp0j5LF7tKqjvxQTIu1IkBUZ9y'
    })
};
var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
        this.signInUrl = 'https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users/signin';
    }
    SignInService.prototype.putSignInData = function (signInData) {
        return this.http.post(this.signInUrl, signInData, httpOptions);
    };
    SignInService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"signUpUser($event)\" class=\"form_sign_up  mb-3\">\r\n  <h3 class=\"h3 mb-3 font-weight-normal\">Sign Up</h3>\r\n  <div class=\"card card-body\">\r\n    <fieldset>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control input-lg\" placeholder=\"Phone\" name=\"phone\" type=\"tel\"  autofocus=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control input-lg\" placeholder=\"Name\" name=\"name\" type=\"text\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control input-lg\" placeholder=\"Last Name\" name=\"last_name\" type=\"text\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control input-lg\" placeholder=\"E-mail\" name=\"email\" type=\"email\" >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control input-lg\" placeholder=\"Salon name\" name=\"salon_name\" type=\"text\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control input-lg\" placeholder=\"Salon address\" name=\"salon_address\" type=\"text\">\r\n      </div>\r\n      <input  class=\"btn btn-lg btn-primary btn-block\" value=\"Sign Up\" type=\"submit\">\r\n    </fieldset>\r\n  </div>\r\n</form>\r\n\r\n<a routerLink=\"/sign-in\" routerLinkActive=\"active\">sign-in</a>\r\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign_up_service__ = __webpack_require__("./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService, router) {
        this.signUpService = signUpService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    /* Send user data for sign-up
    ------------------------------------*/
    SignUpComponent.prototype.signUpUser = function (e) {
        var _this = this;
        e.preventDefault();
        var userPhone = e.target.elements[1].value, userFirstName = e.target.elements[2].value, userLastName = e.target.elements[3].value, userEmail = e.target.elements[4].value, usersAlonName = e.target.elements[5].value, userSalonEmail = e.target.elements[6].value;
        var usersData = {
            'phone': userPhone,
            'firstName': userFirstName,
            'lastName': userLastName,
            'email': userEmail,
            'salonName': usersAlonName,
            'salonEmail': userSalonEmail
        };
        this.signUpService.putUserData(usersData)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['sign-up/thank-you']);
        }, function (error) {
            console.log('error');
        });
        // console.log(userPhone);
        // console.log(userFirstName);
        // console.log(userLastName);
        // console.log(userEmail);
        // console.log(usersAlonName);
        // console.log(userSalonEmail);
        return false;
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sign_up_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'x-api-key': '9UKaHgvVUu17sIVp0j5LF7tKqjvxQTIu1IkBUZ9y'
    })
};
var SignUpService = /** @class */ (function () {
    function SignUpService(http) {
        this.http = http;
        this.signUpUrl = 'https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users';
    }
    SignUpService.prototype.putUserData = function (usersData) {
        return this.http.put(this.signUpUrl, usersData, httpOptions);
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SignUpService);
    return SignUpService;
}());



/***/ }),

/***/ "./src/app/sign-up/thank-sign-up/thank-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Thank you!<br><br>\r\n\r\n  You'll shortly receive sms with mobile number confirmation link to unlock your account</p>\r\n<a routerLink=\"/sign-in\" routerLinkActive=\"active\">sign-in</a>\r\n"

/***/ }),

/***/ "./src/app/sign-up/thank-sign-up/thank-sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/thank-sign-up/thank-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankSignUpComponent = /** @class */ (function () {
    function ThankSignUpComponent() {
    }
    ThankSignUpComponent.prototype.ngOnInit = function () {
    };
    ThankSignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thank-sign-up',
            template: __webpack_require__("./src/app/sign-up/thank-sign-up/thank-sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/thank-sign-up/thank-sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankSignUpComponent);
    return ThankSignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map