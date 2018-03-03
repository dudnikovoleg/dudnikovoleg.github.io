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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_4__calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: 'calendar/appointment', component: __WEBPACK_IMPORTED_MODULE_12__calendar_appointment_appointment_component__["a" /* AppointmentComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_5__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'clients/add', component: __WEBPACK_IMPORTED_MODULE_10__clients_clients_add_clients_add_component__["a" /* ClientsAddComponent */] },
    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */] },
    { path: 'service/add', component: __WEBPACK_IMPORTED_MODULE_13__services_add_service_add_service_component__["a" /* AddServiceComponent */] },
    { path: 'service/edit', component: __WEBPACK_IMPORTED_MODULE_14__services_edit_service_edit_service_component__["a" /* EditServiceComponent */] },
    { path: 'availability', component: __WEBPACK_IMPORTED_MODULE_7__availability_availability_component__["a" /* AvailabilityComponent */] },
    { path: 'black-out-times', component: __WEBPACK_IMPORTED_MODULE_8__black_out_times_black_out_times_component__["a" /* BlackOutTimesComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/edit', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_edit_profile_edit_component__["a" /* ProfileEditComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page_wrapper\">\n  <main class=\"page_wrapper__content container\">\n\n    <app-nav *ngIf=\"true\"></app-nav>\n    <router-outlet></router-outlet>\n\n\n\n  </main>\n</div>\n\n\n"

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_service__ = __webpack_require__("./src/app/user-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clients_clients_add_clients_add_component__ = __webpack_require__("./src/app/clients/clients-add/clients-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_edit_profile_edit_component__ = __webpack_require__("./src/app/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_appointment_appointment_component__ = __webpack_require__("./src/app/calendar/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clients_client_details_client_details_component__ = __webpack_require__("./src/app/clients/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_add_service_add_service_component__ = __webpack_require__("./src/app/services/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_edit_service_edit_service_component__ = __webpack_require__("./src/app/services/edit-service/edit-service.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_20__services_edit_service_edit_service_component__["a" /* EditServiceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__user_service__["a" /* ConfigService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/availability/availability.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Availability</h3><br>\n<p class=\"header\">Monday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%;\">✚</button>\n</div><br><br>\n\n<p class=\"header\">Tuesday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\n</div><br><br>\n\n<p class=\"header\">Wednesday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\n</div><br><br>\n\n<p class=\"header\">Thursday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\n</div><br><br>\n\n<p class=\"header\">Friday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\n</div><br><br>\n\n<p class=\"header\">Saturday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%;margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%;\">✚</button>\n</div><br><br>\n\n<p class=\"header\">Sunday</p>\n<div class=\"in_line\">\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <p>TO</p>\n    <div class=\"select_time\">\n        <select>\n            <option>12:00 am</option>\n            <option>12:30 am</option>\n            <option>01:00 am</option>\n            <option>01:30 am</option>\n            <option>02:00 am</option>\n            <option>02:30 am</option>\n            <option>03:00 am</option>\n            <option>03:30 am</option>\n            <option>04:00 am</option>\n            <option>04:30 am</option>\n            <option>05:00 am</option>\n            <option>05:30 am</option>\n            <option>06:00 am</option>\n            <option>06:30 am</option>\n            <option>07:00 am</option>\n            <option>07:30 am</option>\n            <option>08:00 am</option>\n            <option>08:30 am</option>\n            <option>09:00 am</option>\n            <option>09:30 am</option>\n            <option>10:00 am</option>\n            <option>10:30 am</option>\n            <option>11:00 am</option>\n            <option>11:30 am</option>\n            <option>12:00 pm</option>\n            <option>12:30 pm</option>\n            <option>01:00 pm</option>\n            <option>01:30 pm</option>\n            <option>02:00 pm</option>\n            <option>02:30 pm</option>\n            <option>03:00 pm</option>\n            <option>03:30 pm</option>\n            <option>04:00 pm</option>\n            <option>04:30 pm</option>\n            <option>05:00 pm</option>\n            <option>05:30 pm</option>\n            <option>06:00 pm</option>\n            <option>06:30 pm</option>\n            <option>07:00 pm</option>\n            <option>07:30 pm</option>\n            <option>08:00 pm</option>\n            <option>08:30 pm</option>\n            <option>09:00 pm</option>\n            <option>09:30 pm</option>\n            <option>10:00 pm</option>\n            <option>10:30 pm</option>\n            <option>11:00 pm</option>\n            <option>11:30 pm</option>\n        </select></div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 24%;\">✘</button>\n</div>\n\n<div>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button>\n</div><br>\n<br>\n\n<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Done</button><br>\n\n"

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

module.exports = " <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Black Out Times</h3><br>\n  <div id=\"calendar\" class=\"calendar_modern\">\n    <div class=\"calendar\">\n\n      <button class=\"btn btn-lg btn-light\">«</button>\n      <button style=\"float:right\" class=\"btn  btn-lg btn-light\">»</button>\n\n      <div class=\"months\">\n        <div class=\"month\" data-date=\"2018.2\">\n          <div class=\"header\"> February 2018 </div>\n          <div class=\"body\">\n\n            <div class=\"day_names\">\n              <i>Mo</i>\n              <i>Tu</i>\n              <i>We</i>\n              <i>Th</i>\n              <i>Fr</i>\n              <i>Sa</i>\n              <i>Su</i>\n            </div>\n\n            <div class=\"days\">\n              <!--<b>26</b>-->\n              <!--<b>27</b>-->\n              <s></s>\n              <s></s>\n              <s></s>\n              <a href=\"#\" class=\"busy\">1</a>\n              <a href=\"#\" class=\"busy\">2</a>\n              <a href=\"#\" class=\"busy\">3</a>\n              <a href=\"#\" class=\"busy\">4</a>\n              <a href=\"#\" class=\"busy\">5</a>\n              <a href=\"#\" class=\"empty\">6</a>\n              <a href=\"#\" class=\"empty\">7</a>\n              <a href=\"#\" class=\"empty\">8</a>\n              <a href=\"#\" class=\"busy\">9</a>\n              <a href=\"#\" class=\"empty\">10</a>\n              <a href=\"#\" class=\"empty\">11</a>\n              <a href=\"#\" class=\"empty\">12</a>\n              <a href=\"#\" class=\"empty\">13</a>\n              <a href=\"#\" class=\"empty\">14</a>\n              <a href=\"#\" class=\"selected\">15</a>\n              <a href=\"#\" class=\"busy\">16</a>\n              <a href=\"#\" class=\"busy\">17</a>\n              <a href=\"#\" class=\"empty\">18</a>\n              <a href=\"#\" class=\"empty\">19</a>\n              <a href=\"#\" class=\"busy\">20</a>\n              <a href=\"#\" class=\"busy\">21</a>\n              <a href=\"#\" class=\"busy\">22</a>\n              <a href=\"#\" class=\"busy\">23</a>\n              <a href=\"#\" class=\"busy\">24</a>\n              <a href=\"#\" class=\"busy\">25</a>\n              <a href=\"#\" class=\"empty\">26</a>\n              <a href=\"#\" class=\"empty\">27</a>\n              <a href=\"#\" class=\"empty\">28</a>\n              <a href=\"#\" class=\"empty\">29</a>\n              <a href=\"#\" class=\"empty\">30</a>\n              <a href=\"#\" class=\"empty\">31</a>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br>\n\n\n\n\n\n\n\n\n\n\n\n  <div class=\"bodyofdiv\"></div>\n\n\n  <p class=\"header\">Sunday</p>\n  <div class=\"in_line\">\n    <div class=\"select_time\">\n      <select>\n        <option>12:00 am</option>\n        <option>12:30 am</option>\n        <option>01:00 am</option>\n        <option>01:30 am</option>\n        <option>02:00 am</option>\n        <option>02:30 am</option>\n        <option>03:00 am</option>\n        <option>03:30 am</option>\n        <option>04:00 am</option>\n        <option>04:30 am</option>\n        <option>05:00 am</option>\n        <option>05:30 am</option>\n        <option>06:00 am</option>\n        <option>06:30 am</option>\n        <option>07:00 am</option>\n        <option>07:30 am</option>\n        <option>08:00 am</option>\n        <option>08:30 am</option>\n        <option>09:00 am</option>\n        <option>09:30 am</option>\n        <option>10:00 am</option>\n        <option>10:30 am</option>\n        <option>11:00 am</option>\n        <option>11:30 am</option>\n        <option>12:00 pm</option>\n        <option>12:30 pm</option>\n        <option>01:00 pm</option>\n        <option>01:30 pm</option>\n        <option>02:00 pm</option>\n        <option>02:30 pm</option>\n        <option>03:00 pm</option>\n        <option>03:30 pm</option>\n        <option>04:00 pm</option>\n        <option>04:30 pm</option>\n        <option>05:00 pm</option>\n        <option>05:30 pm</option>\n        <option>06:00 pm</option>\n        <option>06:30 pm</option>\n        <option>07:00 pm</option>\n        <option>07:30 pm</option>\n        <option>08:00 pm</option>\n        <option>08:30 pm</option>\n        <option>09:00 pm</option>\n        <option>09:30 pm</option>\n        <option>10:00 pm</option>\n        <option>10:30 pm</option>\n        <option>11:00 pm</option>\n        <option>11:30 pm</option>\n      </select> </div>\n    <p>TO</p>\n    <div class=\"select_time\">\n      <select>\n        <option>12:00 am</option>\n        <option>12:30 am</option>\n        <option>01:00 am</option>\n        <option>01:30 am</option>\n        <option>02:00 am</option>\n        <option>02:30 am</option>\n        <option>03:00 am</option>\n        <option>03:30 am</option>\n        <option>04:00 am</option>\n        <option>04:30 am</option>\n        <option>05:00 am</option>\n        <option>05:30 am</option>\n        <option>06:00 am</option>\n        <option>06:30 am</option>\n        <option>07:00 am</option>\n        <option>07:30 am</option>\n        <option>08:00 am</option>\n        <option>08:30 am</option>\n        <option>09:00 am</option>\n        <option>09:30 am</option>\n        <option>10:00 am</option>\n        <option>10:30 am</option>\n        <option>11:00 am</option>\n        <option>11:30 am</option>\n        <option>12:00 pm</option>\n        <option>12:30 pm</option>\n        <option>01:00 pm</option>\n        <option>01:30 pm</option>\n        <option>02:00 pm</option>\n        <option>02:30 pm</option>\n        <option>03:00 pm</option>\n        <option>03:30 pm</option>\n        <option>04:00 pm</option>\n        <option>04:30 pm</option>\n        <option>05:00 pm</option>\n        <option>05:30 pm</option>\n        <option>06:00 pm</option>\n        <option>06:30 pm</option>\n        <option>07:00 pm</option>\n        <option>07:30 pm</option>\n        <option>08:00 pm</option>\n        <option>08:30 pm</option>\n        <option>09:00 pm</option>\n        <option>09:30 pm</option>\n        <option>10:00 pm</option>\n        <option>10:30 pm</option>\n        <option>11:00 pm</option>\n        <option>11:30 pm</option>\n      </select> </div>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 50%; margin-left: 21%;\">✘</button></div>\n\n  <div><button type=\"button\" class=\"btn btn-success btn-xs\" style=\"border-radius: 50%\">✚</button></div><br>\n  <br>\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Save</button><br>\n"

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

module.exports = "\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Shedule Appointment</h3><br>\n  <fieldset>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Client Name\" name=\"client_name\" type=\"text\" autofocus=\"\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Client Phone Number\" name=\"client_phone_number\" type=\"tel\">\n    </div>\n    <div class=\"select_block\">\n      <select>\n        <option disabled=\"\" selected=\"\">Service</option>\n        <option>Hair Cut</option>\n        <option>Cut and Color</option>\n      </select>\n    </div>\n  </fieldset>\n\n  <div id=\"calendar\" class=\"calendar_modern\">\n    <div class=\"calendar\">\n\n      <button class=\"btn btn-lg btn-light\">«</button>\n      <button style=\"float:right\" class=\"btn  btn-lg btn-light\">»</button>\n\n      <div class=\"months\">\n        <div class=\"month\" data-date=\"2018.2\">\n          <div class=\"header\"> February 2018 </div>\n          <div class=\"body\">\n\n            <div class=\"day_names\">\n              <i>Mo</i>\n              <i>Tu</i>\n              <i>We</i>\n              <i>Th</i>\n              <i>Fr</i>\n              <i>Sa</i>\n              <i>Su</i>\n            </div>\n\n            <div class=\"days\">\n              <!--<b>26</b>-->\n              <!--<b>27</b>-->\n              <s></s>\n              <s></s>\n              <s></s>\n              <a href=\"#\" class=\"busy\">1</a>\n              <a href=\"#\" class=\"busy\">2</a>\n              <a href=\"#\" class=\"busy\">3</a>\n              <a href=\"#\" class=\"busy\">4</a>\n              <a href=\"#\" class=\"busy\">5</a>\n              <a href=\"#\" class=\"empty\">6</a>\n              <a href=\"#\" class=\"empty\">7</a>\n              <a href=\"#\" class=\"empty\">8</a>\n              <a href=\"#\" class=\"busy\">9</a>\n              <a href=\"#\" class=\"empty\">10</a>\n              <a href=\"#\" class=\"empty\">11</a>\n              <a href=\"#\" class=\"empty\">12</a>\n              <a href=\"#\" class=\"empty\">13</a>\n              <a href=\"#\" class=\"empty\">14</a>\n              <a href=\"#\" class=\"selected\">15</a>\n              <a href=\"#\" class=\"busy\">16</a>\n              <a href=\"#\" class=\"busy\">17</a>\n              <a href=\"#\" class=\"empty\">18</a>\n              <a href=\"#\" class=\"empty\">19</a>\n              <a href=\"#\" class=\"busy\">20</a>\n              <a href=\"#\" class=\"busy\">21</a>\n              <a href=\"#\" class=\"busy\">22</a>\n              <a href=\"#\" class=\"busy\">23</a>\n              <a href=\"#\" class=\"busy\">24</a>\n              <a href=\"#\" class=\"busy\">25</a>\n              <a href=\"#\" class=\"empty\">26</a>\n              <a href=\"#\" class=\"empty\">27</a>\n              <a href=\"#\" class=\"empty\">28</a>\n              <a href=\"#\" class=\"empty\">29</a>\n              <a href=\"#\" class=\"empty\">30</a>\n              <a href=\"#\" class=\"empty\">31</a>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n              <s></s>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br>\n\n\n\n\n\n\n\n\n\n\n\n  <div class=\"bodyofdiv\"></div>\n\n\n  <fieldset>\n    <div class=\"form-group\">\n      <div class=\"select_block\">\n        <select>\n          <option disabled=\"\" selected=\"\">Start Time</option>\n          <option>12:00 am</option>\n          <option>12:30 am</option>\n          <option>01:00 am</option>\n          <option>01:30 am</option>\n          <option>02:00 am</option>\n          <option>02:30 am</option>\n          <option>03:00 am</option>\n          <option>03:30 am</option>\n          <option>04:00 am</option>\n          <option>04:30 am</option>\n          <option>05:00 am</option>\n          <option>05:30 am</option>\n          <option>06:00 am</option>\n          <option>06:30 am</option>\n          <option>07:00 am</option>\n          <option>07:30 am</option>\n          <option>08:00 am</option>\n          <option>08:30 am</option>\n          <option>09:00 am</option>\n          <option>09:30 am</option>\n          <option>10:00 am</option>\n          <option>10:30 am</option>\n          <option>11:00 am</option>\n          <option>11:30 am</option>\n          <option>12:00 pm</option>\n          <option>12:30 pm</option>\n          <option>01:00 pm</option>\n          <option>01:30 pm</option>\n          <option>02:00 pm</option>\n          <option>02:30 pm</option>\n          <option>03:00 pm</option>\n          <option>03:30 pm</option>\n          <option>04:00 pm</option>\n          <option>04:30 pm</option>\n          <option>05:00 pm</option>\n          <option>05:30 pm</option>\n          <option>06:00 pm</option>\n          <option>06:30 pm</option>\n          <option>07:00 pm</option>\n          <option>07:30 pm</option>\n          <option>08:00 pm</option>\n          <option>08:30 pm</option>\n          <option>09:00 pm</option>\n          <option>09:30 pm</option>\n          <option>10:00 pm</option>\n          <option>10:30 pm</option>\n          <option>11:00 pm</option>\n          <option>11:30 pm</option>\n        </select> </div>\n    </div>\n    <div class=\"form-group d-inline-flex\">\n      <input class=\"form-control input-lg col-10\" placeholder=\"Duration\" name=\"duration\" type=\"number\">\n    </div><p class=\"labels\">min</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-lg btn-primary btn-block\">Save Appointment</button>\n    </div>\n  </fieldset>\n  <br>\n  <a class=\"text-danger delete \" id=\"delete_service\">Delete Appointment</a><br><br>\n"

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

module.exports = "<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Calendar</h3><br>\n<div id=\"calendar\" class=\"calendar_modern\">\n    <div class=\"calendar\">\n\n        <button class=\"btn btn-lg btn-light\">«</button>\n        <button style=\"float:right\" class=\"btn  btn-lg btn-light\">»</button>\n\n        <div class=\"months\">\n            <div class=\"month\" data-date=\"2018.2\">\n                <div class=\"header\"> February 2018</div>\n                <div class=\"body\">\n\n                    <div class=\"day_names\">\n                        <i>Mo</i>\n                        <i>Tu</i>\n                        <i>We</i>\n                        <i>Th</i>\n                        <i>Fr</i>\n                        <i>Sa</i>\n                        <i>Su</i>\n                    </div>\n\n                    <div class=\"days\">\n                        <!--<b>26</b>-->\n                        <!--<b>27</b>-->\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                        <a href=\"#\" class=\"busy\">1</a>\n                        <a href=\"#\" class=\"busy\">2</a>\n                        <a href=\"#\" class=\"busy\">3</a>\n                        <a href=\"#\" class=\"busy\">4</a>\n                        <a href=\"#\" class=\"busy\">5</a>\n                        <a href=\"#\" class=\"empty\">6</a>\n                        <a href=\"#\" class=\"empty\">7</a>\n                        <a href=\"#\" class=\"empty\">8</a>\n                        <a href=\"#\" class=\"busy\">9</a>\n                        <a href=\"#\" class=\"empty\">10</a>\n                        <a href=\"#\" class=\"empty\">11</a>\n                        <a href=\"#\" class=\"empty\">12</a>\n                        <a href=\"#\" class=\"empty\">13</a>\n                        <a href=\"#\" class=\"empty\">14</a>\n                        <a href=\"#\" class=\"selected\">15</a>\n                        <a href=\"#\" class=\"busy\">16</a>\n                        <a href=\"#\" class=\"busy\">17</a>\n                        <a href=\"#\" class=\"empty\">18</a>\n                        <a href=\"#\" class=\"empty\">19</a>\n                        <a href=\"#\" class=\"busy\">20</a>\n                        <a href=\"#\" class=\"busy\">21</a>\n                        <a href=\"#\" class=\"busy\">22</a>\n                        <a href=\"#\" class=\"busy\">23</a>\n                        <a href=\"#\" class=\"busy\">24</a>\n                        <a href=\"#\" class=\"busy\">25</a>\n                        <a href=\"#\" class=\"empty\">26</a>\n                        <a href=\"#\" class=\"empty\">27</a>\n                        <a href=\"#\" class=\"empty\">28</a>\n                        <a href=\"#\" class=\"empty\">29</a>\n                        <a href=\"#\" class=\"empty\">30</a>\n                        <a href=\"#\" class=\"empty\">31</a>\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                        <s></s>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br><br>\n\n\n<div class=\"bodyofdiv\"></div>\n\n\n<button routerLink=\"appointment\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Add Appointment</button>\n<br>\n<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Manage availability</button>\n<br><br>\n\n\n<table class=\"table table-striped table_list\" id=\"\">\n    <thead>\n    <tr>\n        <th class=\"header\">Feb 23 Reservation</th>\n        <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>10:15 am - 11:00 am <br>\n            Job<br>\n            Hariot\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"float: right\">Edit</button>\n        </td>\n    </tr>\n    <tr>\n        <td>12:00 pm - 13:00 pm <br>\n            Ann <br>\n            Hair color\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"float: right\">Edit</button>\n        </td>\n    </tr>\n    <tr>\n        <td>15:00 pm - 17:00 pm <br>\n            Ben <br>\n            Hariot\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-success btn-xs\" style=\"float: right\">Edit</button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
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

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("./src/app/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Client's Details</h3><br>\n  <p>John Adams <button class=\"btn btn-link\" style=\"float:right;\">edit</button><br>\n    913-271-7154</p>\n  <hr>\n  <p>Next Appointment<br>\n    Cut and color<br>\n    Tuesday, May 5 2018 at 1pm</p>\n  <br>\n\n  <button class=\"btn btn-lg btn-primary btn-block\">Send Reminder</button><br>\n  <div class=\"alert alert-success\" role=\"alert\">\n    Reminder is sent\n  </div><br>\n\n  <p>Previous Appointment</p>\n\n  <table class=\"table table-bordered table-striped\">\n    <thead class=\"thead-default\">\n    <tr>\n      <th>Service</th>\n      <th>Date and Time</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>Cut</td>\n      <td>Apr 1 at 1pm</td>\n    </tr>\n    <tr>\n      <td>Cut and Color</td>\n      <td>Mar 1 at 1pm</td>\n    </tr>\n    </tbody>\n  </table>\n"

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

module.exports = "\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Add Client</h3><br>\n  <form class=\"form_save_client mb-3\" action=\"\">\n    <fieldset>\n      <div class=\"form-group\">\n        <input type=\"tel\" id=\"inputPhone\" class=\"form-control\" placeholder=\"Phone number\" required=\"\" autofocus=\"\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\">\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Save </button>\n    </fieldset>\n  </form>\n"

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

module.exports = "\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Clients</h3><br>\n  <button routerLink=\"add\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Add Client</button>\n  <br><br>\n  <table id=\"example\" class=\"table table-bordered table-striped\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n    <tr>\n      <th>Name</th>\n      <th>Next Appointment</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>Tiger Nixon</td>\n      <td>2pm May 1</td>\n    </tr>\n    <tr>\n      <td>Bob Marly</td>\n      <td>5pm May 15</td>\n    </tr>\n    <tr>\n      <td>Kel Washin </td>\n      <td>2pm April 1</td>\n    </tr>\n    </tbody>\n  </table>\n\n"

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

module.exports = "<nav class=\"navbar  navbar-light bg-light\">\n  <a class=\"navbar-brand  col-black h3\">\n    Chronos\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-collapse collapse show\" id=\"navbarNavDropdown\" style=\"\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/calendar\">Calendar</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/clients\">Clients</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/service\">Services</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/availability\">Availability</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/black-out-times\">Black Out Times</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"dropdown-item h6\" routerLink=\"/calendar\">Sign Out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<hr>"

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

module.exports = "\n<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Edit Profile</h3><br>\n<form action=\"\">\n  <fieldset>\n    <label class=\"h6\">Phone</label>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Phone\" name=\"phone\" type=\"tel\">\n    </div>\n    <label class=\"h6\">Name</label>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Name\" name=\"name\" type=\"text\">\n    </div>\n    <label class=\"h6\">Last Name</label>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Last Name\" name=\"last_name\" type=\"text\">\n    </div>\n    <label class=\"h6\">Email</label>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"E-mail\" name=\"email\" type=\"email\">\n    </div>\n    <label class=\"h6\">Salon name</label>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Salon name\" name=\"salon_name\" type=\"text\">\n    </div>\n    <label class=\"h6\">Salon address</label>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" placeholder=\"Salon address\" name=\"salon_address\" type=\"text\">\n    </div>\n  </fieldset>\n</form><br>\n<button class=\"btn btn-primary btn-lg btn-block\">Save</button><br>\n\n"

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
    function ProfileEditComponent() {
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
    };
    ProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-edit',
            template: __webpack_require__("./src/app/profile/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile-edit/profile-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = " <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Profile</h3><br>\n  <p>Studio 8 Hair Salon<br>\n    18982 W 119th St<br>\n    Overland Park, KS 66215</p>\n  <br>\n  <p>Becca Dawson<br>\n    913-289-9019<br>\n    becco@studio8salon.com</p><br>\n  <p>Clients can book an appointment by texting &lt;913 890 0909&gt;</p>\n  <br>\n  <button routerLink=\"edit\" class=\"btn btn-success btn-lg btn-block\">Edit</button>\n  <br>\n"

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
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/add-service/add-service.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Add Service</h3><br>\n  <fieldset>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" name=\"service_type\" type=\"text\" value=\"Hair Cut\">\n    </div>\n    <div class=\"form-group d-inline-block\">\n      <input class=\"form-control input-lg col-10\" name=\"price\" type=\"number\" value=\"69\"></div>\n    <!--<label class=\"col-form-label-sm style=\" style=\"left: 170px;\">$</label>-->\n    <p style=\"left: 3px;display: inline-block\">$</p>\n    <br>\n    <div class=\"form-group d-inline-flex\">\n      <input class=\"form-control input-lg col-10\" name=\"duration\" type=\"number\" value=\"45\">\n      <!--<label class=\"col-form-label-sm \"  >&emsp;min</label>-->\n    </div>\n    <p style=\"left: 3px;display: inline-block\">min</p>\n    <button class=\"btn btn-lg btn-primary btn-block\">Save</button>\n  </fieldset>\n\n"

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

module.exports = "\n\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Edit Service</h3><br>\n  <fieldset>\n    <div class=\"form-group\">\n      <input class=\"form-control input-lg\" name=\"service_type\" type=\"text\" value=\"Hair Cut\">\n    </div>\n    <div class=\"form-group d-inline-block\">\n      <input class=\"form-control input-lg col-10\" name=\"price\" type=\"number\" value=\"69\"></div>\n    <!--<label class=\"col-form-label-sm style=\" style=\"left: 170px;\">$</label>-->\n    <p class=\"labels\">$</p>\n    <br>\n    <div class=\"form-group d-inline-flex\">\n      <input class=\"form-control input-lg col-10\" name=\"duration\" type=\"number\" value=\"45\">\n      <!--<label class=\"col-form-label-sm \"  >&emsp;min</label>-->\n    </div>\n    <p class=\"labels\">min</p>\n    <button class=\"btn btn-lg btn-primary btn-block\">Save</button>\n  </fieldset>\n  <br>\n  <br>\n  <a class=\"text-danger delete \" id=\"delete_service\">Delete the Service</a><br><br>\n\n"

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

module.exports = "\n\n  <h3 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\">Services</h3><br>\n  <table class=\"table table-striped table_list\">\n    <tbody>\n    <tr>\n      <td>Hair Cut<br>\n        69$<br>\n        30 minutes</td>\n      <td><button routerLink=\"edit\" class=\"btn btn-link\" style=\"float:right;\">edit</button></td>\n    </tr>\n    <tr>\n      <td>Hair Cut<br>\n        100$<br>\n        45 minutes</td>\n      <td><button routerLink=\"edit\" class=\"btn btn-link\" style=\"float:right;\">edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n  <br>\n  <button routerLink=\"add\" type=\"button\" class=\"btn btn-success btn-lg btn-block\">Add Service</button>\n\n"

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

module.exports = "<form action=\"message_after_sign_in.html\" class=\"form_sign_in  mb-3\">\n  <h3 class=\"h3 mb-3 font-weight-normal\">Sign In</h3>\n  <div class=\"card card-body\">\n    <fieldset>\n      <div class=\"form-group\">\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control input-lg\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control input-lg\" placeholder=\"Password\" required=\"\">\n      </div>\n\n\n      <input class=\"btn btn-lg btn-primary btn-block\" value=\"Sign In\" type=\"submit\">\n    </fieldset>\n  </div>\n</form>"

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
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"sign_up_confirmation.html\" class=\"form_sign_up  mb-3\">\n  <h3 class=\"h3 mb-3 font-weight-normal\">Sign Up</h3>\n  <div class=\"card card-body\">\n    <fieldset>\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"Phone\" name=\"phone\" type=\"tel\" required=\"\" autofocus=\"\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"Name\" name=\"name\" type=\"text\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"Last Name\" name=\"last_name\" type=\"text\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"E-mail\" name=\"email\" type=\"email\" required=\"\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"Salon name\" name=\"salon_name\" type=\"text\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"Salon address\" name=\"salon_address\" type=\"text\">\n      </div>\n      <input class=\"btn btn-lg btn-primary btn-block\" value=\"Sign Up\" type=\"submit\">\n    </fieldset>\n  </div>\n</form>\n\n<a routerLink=\"/sign-in\" routerLinkActive=\"active\">sign-in</a>\n<a routerLink=\"/sign-in\" routerLinkActive=\"active\">skip login</a>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user-service.ts");
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
    function SignUpComponent(configService) {
        this.configService = configService;
    }
    SignUpComponent.prototype.showConfig = function () {
        this.configService.getConfig()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    SignUpComponent.prototype.ngOnInit = function () {
        // var x = new XMLHttpRequest();
        // x.open("GET", "https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users", true);
        // x.onload = function (){
        //     alert( x.responseText);
        // }
        // x.send(null);
        this.showConfig();
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* ConfigService */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
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


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.configUrl = 'https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users';
    }
    // configUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    ConfigService.prototype.getConfig = function () {
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type':  'application/json',
        //         'Authorization': 'my-auth-token'
        //     })
        // };
        // const params = new HttpParams().set('x-api-key', '9UKaHgvVUu17sIVp0j5LF7tKqjvxQTIu1IkBUZ9y');
        // httpOptions.headers =
        //     httpOptions.headers.set('Authorization', 'my-new-auth-token');
        var body = {
            'phone': 'stylist phone number',
            'firstName': 'name',
            'lastName': 'last name',
            'email': 'Personal email',
            'salonName': 'Hair',
            'salonEmail': 'john@email.com'
        };
        return this.http.get('https://dgdq9nx784.execute-api.us-east-1.amazonaws.com/test/users', {
            observe: 'body',
            responseType: 'json',
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('x-api-key', '9UKaHgvVUu17sIVp0j5LF7tKqjvxQTIu1IkBUZ9y')
        });
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigService);
    return ConfigService;
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