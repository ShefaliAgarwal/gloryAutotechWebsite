(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first\">\n  <!-- navigation  -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-1\" align=\"center\">\n        <img src=\"../../assets/image/2LOGO.png\" height=\"150px\" width=\"320px\">\n      </div>\n      <div class=\"col-md-11\">\n        <nav class=\"navbar navbar-default\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#mynavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"mynavbar\">\n            <ul class=\"nav pull-right\">\n              <a routerLink=\"./\" fragment=\"service\">\n                <li class=\"speak one\"><span>SERVICE</span></li>\n              </a>\n              <a routerLink=\"./\" fragment=\"projects\">\n                <li class=\"speak four\"><span>PROJECTS</span></li>\n              </a>\n              <!-- href=\"career/job.html\" -->\n              <a routerLink=\"/carrer\" class=\"speak one\">\n                <li><span>CAREER</span></li>\n              </a>\n              <!-- href=\"contect.html\" -->\n              <a routerLink=\"/contact\" class=\"speak two\">\n                <li ><span>CONTACT US</span></li>\n              </a>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </div>\n  <!-- end navigation  -->\n  <!-- second part -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h1 class=\"company\">Website Design & Web Development Company</h1>\n        <h4 class=\"font-main\">Getting your website right makes everything else easier.</h4>\n        <button class=\"button button1\">Get A Free Quote</button>\n      </div>\n      <div class=\"col-md-6\"></div>\n    </div>\n  </div>\n</div>\n<!-- end second part -->\n<!-- three box nformation-->\n<section class=\"services py-5\" >\n  <div class=\"container\">\n    <h3 class=\"heading text-center\" id=\"service\">SERVICES</h3>\n    <div class=\"row\" data-aos=\"zoom-in\" data-aos-duration=\"2000\">\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"our-services-wrapper mb-60\">\n          <div class=\"services-inner\">\n            <div class=\"our-services-img\">\n              <span class=\"fa fa-users\"></span>\n            </div>\n            <div class=\"our-services-text\">\n              <h4>Web Design</h4>\n              <p>All websites designed by us are Responsive meaning websites will look good on mobile as well.</p>\n\n              <!-- <a href=\"#\" class=\"btn btn-danger\">More..</a> -->\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"our-services-wrapper mb-60\">\n          <div class=\"services-inner\">\n            <div class=\"our-services-img\">\n              <span class=\"fa fa-institution\"></span>\n            </div>\n            <div class=\"our-services-text\">\n              <h4>Web Development</h4>\n              <p>We provide all round services in designing, developing and maintaining an effective web presence for\n                your online business.</p>\n              <!-- <a href=\"#\" class=\"btn btn-danger\">More..</a> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"our-services-wrapper mb-60\">\n          <div class=\"services-inner\">\n            <div class=\"our-services-img\">\n              <span class=\"fa fa-laptop\"></span>\n            </div>\n            <div class=\"our-services-text\">\n              <h4>Ecommerce </h4>\n              <p>We deliver top-notch, highly customized eCommerce solutions to turn your great ideas into profitable\n                online businesses.</p>\n              <!-- <a href=\"#\" class=\"btn btn-danger\">More..</a> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--end three box nformation-->\n<!-- our projects  -->\n<section class=\"gallery py-md-5 py-3\">\n  <div class=\"gallery-inner container py-md-5 pb-3\">\n    <!-- <h4 class=\"sub-tittle-w3 text-uppercase text-center\">View all</h4> -->\n    <h1 class=\"heading  text-uppercase mb-lg-5 mb-3 text-center\" id=\"projects\">Our Projects</h1>\n    <div class=\"row scroling\">\n\n      <div class=\"col-md-4 proj_gallery_grid aos-init aos-animate\">\n        <div class=\"section_1_gallery_grid\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g1.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <a routerLink=\"/portfolio/project/1\">\n                <img src=\"../../assets/image/g1.jpg\" alt=\" \" class=\"img-fluid\">\n                <div class=\"proj_gallery_grid1_pos\">\n                  <h3>Enablement.us</h3>\n                </div>\n              </a>\n            </div>\n          </a>\n        </div>\n        <div class=\"section_1_gallery_grid aos-init aos-animate\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g2.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <a routerLink=\"/portfolio/project/2\">\n                <img src=\"../../assets/image/g2.jpg\" alt=\" \" class=\"img-fluid\">\n                <div class=\"proj_gallery_grid1_pos\">\n                  <h3>Lamdablocks</h3>\n                </div>\n              </a>\n            </div>\n          </a>\n        </div>\n        <!-- <div class=\"section_1_gallery_grid aos-init\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g3.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <a routerLink=\"/portfolio/project/3\">\n                <img src=\"../../assets/image/g3.jpg\" alt=\" \" class=\"img-fluid\">\n                <div class=\"proj_gallery_grid1_pos\">\n                  <h3>Recognize</h3>\n                </div>\n              </a>\n            </div>\n          </a>\n        </div> -->\n      </div>\n      <div class=\"col-md-4 proj_gallery_grid aos-init\">\n        <div class=\"section_1_gallery_grid\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g4.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <a routerLink=\"/portfolio/project/3\">\n                <img src=\"../../assets/image/g4.jpg\" alt=\" \" class=\"img-fluid\">\n                <div class=\"proj_gallery_grid1_pos\">\n                  <h3>GloryFab ERP</h3>\n                </div>\n              </a>\n            </div>\n          </a>\n        </div>\n        <div class=\"section_1_gallery_grid aos-init\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g5.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <a routerLink=\"/portfolio/project/4\">\n                <img src=\"../../assets/image/g5.jpg\" alt=\" \" class=\"img-fluid\">\n                <div class=\"proj_gallery_grid1_pos\">\n                  <h3>TicketSystem</h3>\n                </div>\n              </a>\n            </div>\n          </a>\n        </div>\n        <!-- <div class=\"section_1_gallery_grid aos-init\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g6.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <a routerLink=\"/portfolio/project/6\">\n                <img src=\"../../assets/image/g6.jpg\" alt=\" \" class=\"img-fluid\">\n                <div class=\"proj_gallery_grid1_pos\">\n                  <h3>Recognize</h3>\n                </div>\n              </a>\n            </div>\n          </a>\n        </div> -->\n      </div>\n      <div class=\"col-md-4 proj_gallery_grid aos-init\">\n        <div class=\"section_1_gallery_grid\">\n          <a routerLink=\"/portfolio/project/5\">\n            <div class=\"section_1_gallery_grid1\">\n              <img src=\"../../assets/image/g7.jpg\" alt=\" \" class=\"img-fluid\">\n              <div class=\"proj_gallery_grid1_pos\">\n                <h3>Rebounce website</h3>\n\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"section_1_gallery_grid aos-init\">\n          <a routerLink=\"/portfolio/project/6\">\n            <div class=\"section_1_gallery_grid1\">\n              <img src=\"../../assets/image/g8.jpg\" alt=\" \" class=\"img-fluid\">\n              <div class=\"proj_gallery_grid1_pos\">\n                <h3> Matrimonial Webapp</h3>\n              </div>\n            </div>\n          </a>\n        </div>\n        <!-- <div class=\"section_1_gallery_grid aos-init\">\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g9.jpg\">\n            <div class=\"section_1_gallery_grid1\">\n              <img src=\"../../assets/image/g9.jpg\" alt=\" \" class=\"img-fluid\">\n              <div class=\"proj_gallery_grid1_pos\">\n                <h3>Recognize</h3>\n\n              </div>\n            </div>\n          </a>\n        </div> -->\n      </div>\n\n      <!--end portfolio-area -->\n    </div>\n    <!-- //gallery container -->\n  </div>\n</section>\n<!-- end our projects  -->\n<!-- our work progresh  -->\n<div class=\" container\">\n\n  <div class=\"row \">\n    <h1 class=\"heading text-uppercase mb-lg-5 mb-3 text-center \">Our Skill</h1>\n    <div class=\"col-md-6 \">\n      <img src=\"../../assets/image/webdevlopment.jpg \" class=\"img-responsive \">\n    </div>\n    <div class=\"col-md-6 \">\n      <div data-aos=\"zoom-in\" data-aos-duration=\"1000\">\n        <h4>App Development</h4>\n        <div class=\"progress \">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:80% \">80%</div>\n        </div>\n      </div>\n      <div data-aos=\"zoom-in\" data-aos-duration=\"2000\">\n        <h4>Ecommerce</h4>\n        <div class=\"progress \">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:80% \">80%</div>\n        </div>\n      </div>\n      <div data-aos=\"zoom-in\" data-aos-duration=\"2500\">\n        <h4>Web Design</h4>\n        <div class=\"progress \">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:90% \">90%</div>\n        </div>\n      </div>\n      <div data-aos=\"zoom-in\" data-aos-duration=\"3000\">\n        <h4>Web Development</h4>\n        <div class=\"progress \">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:100% \">100%</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end our work progresh  -->\n<!-- our cliant  -->\n<div class=\"container-fluid parallax\">\n  <h1 class=\"text-center slide-font\">WHAT OUR CLIENTS SAY</h1>\n  <div class=\"row\">\n    <div id=\"slideshow\">\n      <div>\n        <!-- <h1 class=\"text-center\">cliant name</h1> -->\n        <p> <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Glory AutoTech was a pleasure to work with. Experts were\n          professional in their attitude and delivered quality work on time. Also we found them as good listeners who\n          understood what was\n          being explained to them first time.We gladly recommend Glory AutoTech to anyone needing aptitudinal services.\n          <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></p>\n      </div>\n      <div>\n        <!-- <h1 class=\"text-center\">cliant name</h1> -->\n        <p> <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Glory AutoTech Team is very professional and they knows\n          the subject. They has put best effort to get the product usable. <i class=\"fa fa-quote-right\"\n            aria-hidden=\"true\"></i></p>\n      </div>\n      <div>\n        <!-- <h1 class=\"text-center\">cliant name</h1> -->\n        <p><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Team has a good understanding of core concepts.\n          Communicates updates in a timely manner to the client in the loop. Will definitely consider for future\n          projects. <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></p>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- end our cliant  -->\n<!-- get in touch  -->\n<div class=\"container\">\n  <form>\n    <h2 class=\"text-center heading\">GET IN TOUCH</h2>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"YOUR NAME\" id=\"first\">\n        </div>\n      </div>\n      <!--  col-md-6   -->\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"EMAILID\" id=\"last\">\n        </div>\n      </div>\n\n      <div class=\"col-md-2\"></div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"PHONE\" id=\"company\">\n        </div>\n      </div>\n\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <select class=\"form-control\">\n            <option>SELECT DEPARTMENT</option>\n            <option>App Development</option>\n            <option>Ecommerce</option>\n            <option>Web Design</option>\n            <option>Web Development</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\" placeholder=\"Type your massage here...\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <!--  row   -->\n\n  </form>\n</div>\n<!-- end get in touch  -->\n<!--  footer -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.titleAlert = 'This field is required';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.createForm();
        (function ($) {
            $(document).ready(function () {
                var els = document.querySelectorAll('.speak');
                [].forEach.call(els, function (el) {
                    el.addEventListener('click', function () {
                        [].forEach.call(els, function (clk) {
                            clk.classList.remove('active');
                        });
                        el.classList.add('active');
                    });
                });
                AOS.init();
                $("#slideshow > div:gt(0)").hide();
                setInterval(function () {
                    $('#slideshow > div:first')
                        .fadeOut(200)
                        .next()
                        .fadeIn(200)
                        .end()
                        .appendTo('#slideshow');
                }, 6000);
            });
        })(jQuery);
    };
    DashboardComponent.prototype.createForm = function () {
        var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.formGroup = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'emailId': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailregex)], this.checkInUseEmail],
            'phoneNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'department': [''],
            'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    DashboardComponent.prototype.checkInUseEmail = function (control) {
        // mimic http database access
        var db = ['tony@gmail.com'];
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            setTimeout(function () {
                var result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
                observer.next(result);
                observer.complete();
            }, 4000);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map