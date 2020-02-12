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

module.exports = "<div class=\"first\">\r\n  <!-- navigation  -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\" align=\"center\">\r\n        <img src=\"../../assets/image/2LOGO.png\" height=\"150px\" width=\"320px\">\r\n      </div>\r\n      <div class=\"col-md-11\">\r\n        <nav class=\"navbar navbar-default\">\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#mynavbar\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n          </div>\r\n          <div class=\"collapse navbar-collapse\" id=\"mynavbar\">\r\n            <ul class=\"nav pull-right\">\r\n              <!-- <a href=\"index.html\">\r\n                                <li class=\"speak one\"><span>HOME</span>\r\n                                </li>\r\n                            </a> -->\r\n              <a href=\"#service\">\r\n                <li class=\"speak three\"><span>SERVICE</span></li>\r\n              </a>\r\n              <a href=\"#projects\">\r\n                <li class=\"speak four\"><span>PROJECTS</span></li>\r\n              </a>\r\n              <!-- href=\"career/job.html\" -->\r\n              <a routerLink=\"/carrer\">\r\n                <li class=\"speak one\"><span>CAREER</span></li>\r\n              </a>\r\n              <!-- href=\"contect.html\" -->\r\n              <a routerLink=\"/contact\">\r\n                <li class=\"speak two\"><span>CONTACT US</span></li>\r\n              </a>\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end navigation  -->\r\n  <!-- second part -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h1 class=\"company\">Website Design & Web Development Company</h1>\r\n        <h4 class=\"font-main\">Getting your website right makes everything else easier.</h4>\r\n        <button class=\"button button1\">Get A Free Quote</button>\r\n      </div>\r\n      <div class=\"col-md-6\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end second part -->\r\n<!-- three box nformation-->\r\n<section class=\"services py-5\" id=\"service\">\r\n  <div class=\"container\">\r\n    <h3 class=\"heading text-center\">SERVICES</h3>\r\n    <div class=\"row\" data-aos=\"zoom-in\" data-aos-duration=\"2000\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n        <div class=\"our-services-wrapper mb-60\">\r\n          <div class=\"services-inner\">\r\n            <div class=\"our-services-img\">\r\n              <span class=\"fa fa-users\"></span>\r\n            </div>\r\n            <div class=\"our-services-text\">\r\n              <h4>Web Design</h4>\r\n              <p>All websites designed by us are Responsive meaning websites will look good on mobile as well.</p>\r\n\r\n              <!-- <a href=\"#\" class=\"btn btn-danger\">More..</a> -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n        <div class=\"our-services-wrapper mb-60\">\r\n          <div class=\"services-inner\">\r\n            <div class=\"our-services-img\">\r\n              <span class=\"fa fa-institution\"></span>\r\n            </div>\r\n            <div class=\"our-services-text\">\r\n              <h4>Web Development</h4>\r\n              <p>We provide all round services in designing, developing and maintaining an effective web presence for\r\n                your online business.</p>\r\n              <!-- <a href=\"#\" class=\"btn btn-danger\">More..</a> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n        <div class=\"our-services-wrapper mb-60\">\r\n          <div class=\"services-inner\">\r\n            <div class=\"our-services-img\">\r\n              <span class=\"fa fa-laptop\"></span>\r\n            </div>\r\n            <div class=\"our-services-text\">\r\n              <h4>Ecommerce </h4>\r\n              <p>We deliver top-notch, highly customized eCommerce solutions to turn your great ideas into profitable\r\n                online businesses.</p>\r\n              <!-- <a href=\"#\" class=\"btn btn-danger\">More..</a> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--end three box nformation-->\r\n<!-- our projects  -->\r\n<section class=\"gallery py-md-5 py-3\" id=\"projects\">\r\n  <div class=\"gallery-inner container py-md-5 pb-3\">\r\n    <!-- <h4 class=\"sub-tittle-w3 text-uppercase text-center\">View all</h4> -->\r\n    <h1 class=\"heading  text-uppercase mb-lg-5 mb-3 text-center\">Our Projects</h1>\r\n    <div class=\"row scroling\">\r\n\r\n      <div class=\"col-md-4 proj_gallery_grid aos-init aos-animate\">\r\n        <div class=\"section_1_gallery_grid\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g1.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <a routerLink=\"/portfolio/project/1\">\r\n                <img src=\"../../assets/image/g1.jpg\" alt=\" \" class=\"img-fluid\">\r\n                <div class=\"proj_gallery_grid1_pos\">\r\n                  <h3>Enablement.us</h3>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"section_1_gallery_grid aos-init aos-animate\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g2.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <a routerLink=\"/portfolio/project/2\">\r\n                <img src=\"../../assets/image/g2.jpg\" alt=\" \" class=\"img-fluid\">\r\n                <div class=\"proj_gallery_grid1_pos\">\r\n                  <h3>Lamdablocks</h3>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <!-- <div class=\"section_1_gallery_grid aos-init\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g3.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <a routerLink=\"/portfolio/project/3\">\r\n                <img src=\"../../assets/image/g3.jpg\" alt=\" \" class=\"img-fluid\">\r\n                <div class=\"proj_gallery_grid1_pos\">\r\n                  <h3>Recognize</h3>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"col-md-4 proj_gallery_grid aos-init\">\r\n        <div class=\"section_1_gallery_grid\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g4.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <a routerLink=\"/portfolio/project/3\">\r\n                <img src=\"../../assets/image/g4.jpg\" alt=\" \" class=\"img-fluid\">\r\n                <div class=\"proj_gallery_grid1_pos\">\r\n                  <h3>GloryFab ERP</h3>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"section_1_gallery_grid aos-init\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g5.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <a routerLink=\"/portfolio/project/4\">\r\n                <img src=\"../../assets/image/g5.jpg\" alt=\" \" class=\"img-fluid\">\r\n                <div class=\"proj_gallery_grid1_pos\">\r\n                  <h3>TicketSystem</h3>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <!-- <div class=\"section_1_gallery_grid aos-init\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g6.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <a routerLink=\"/portfolio/project/6\">\r\n                <img src=\"../../assets/image/g6.jpg\" alt=\" \" class=\"img-fluid\">\r\n                <div class=\"proj_gallery_grid1_pos\">\r\n                  <h3>Recognize</h3>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"col-md-4 proj_gallery_grid aos-init\">\r\n        <div class=\"section_1_gallery_grid\">\r\n          <a routerLink=\"/portfolio/project/5\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <img src=\"../../assets/image/g7.jpg\" alt=\" \" class=\"img-fluid\">\r\n              <div class=\"proj_gallery_grid1_pos\">\r\n                <h3>Rebounce website</h3>\r\n\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"section_1_gallery_grid aos-init\">\r\n          <a routerLink=\"/portfolio/project/6\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <img src=\"../../assets/image/g8.jpg\" alt=\" \" class=\"img-fluid\">\r\n              <div class=\"proj_gallery_grid1_pos\">\r\n                <h3> Matrimonial Webapp</h3>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <!-- <div class=\"section_1_gallery_grid aos-init\">\r\n          <a title=\"Donec sapien massa, placerat ac sodales ac, feugiat quis est.\" href=\"images/g9.jpg\">\r\n            <div class=\"section_1_gallery_grid1\">\r\n              <img src=\"../../assets/image/g9.jpg\" alt=\" \" class=\"img-fluid\">\r\n              <div class=\"proj_gallery_grid1_pos\">\r\n                <h3>Recognize</h3>\r\n\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </div> -->\r\n      </div>\r\n\r\n      <!--end portfolio-area -->\r\n    </div>\r\n    <!-- //gallery container -->\r\n  </div>\r\n</section>\r\n<!-- end our projects  -->\r\n<!-- our work progresh  -->\r\n<div class=\" container\">\r\n\r\n  <div class=\"row \">\r\n    <h1 class=\"heading text-uppercase mb-lg-5 mb-3 text-center \">Our Skill</h1>\r\n    <div class=\"col-md-6 \">\r\n      <img src=\"../../assets/image/webdevlopment.jpg \" class=\"img-responsive \">\r\n    </div>\r\n    <div class=\"col-md-6 \">\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"1000\">\r\n        <h4>App Development</h4>\r\n        <div class=\"progress \">\r\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:60% \">60%</div>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"2000\">\r\n        <h4>Ecommerce</h4>\r\n        <div class=\"progress \">\r\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:70% \">70%</div>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"2500\">\r\n        <h4>Web Design</h4>\r\n        <div class=\"progress \">\r\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:80% \">80%</div>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"3000\">\r\n        <h4>Web Development</h4>\r\n        <div class=\"progress \">\r\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated active \" style=\"width:90% \">90%</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end our work progresh  -->\r\n<!-- our cliant  -->\r\n<div class=\"container-fluid parallax\">\r\n  <h1 class=\"text-center slide-font\">WHAT OUR CLIENTS SAY</h1>\r\n  <div class=\"row\">\r\n    <div id=\"slideshow\">\r\n      <div>\r\n        <!-- <h1 class=\"text-center\">cliant name</h1> -->\r\n        <p> <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Glory AutoTech was a pleasure to work with. Experts were\r\n          professional in their attitude and delivered quality work on time. Also we found them as good listeners who\r\n          understood what was\r\n          being explained to them first time.We gladly recommend Glory AutoTech to anyone needing aptitudinal services.\r\n          <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></p>\r\n      </div>\r\n      <div>\r\n        <!-- <h1 class=\"text-center\">cliant name</h1> -->\r\n        <p> <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Glory AutoTech Team is very professional and they knows\r\n          the subject. They has put best effort to get the product usable. <i class=\"fa fa-quote-right\"\r\n            aria-hidden=\"true\"></i></p>\r\n      </div>\r\n      <div>\r\n        <!-- <h1 class=\"text-center\">cliant name</h1> -->\r\n        <p><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Team has a good understanding of core concepts.\r\n          Communicates updates in a timely manner to the client in the loop. Will definitely consider for future\r\n          projects. <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end our cliant  -->\r\n<!-- get in touch  -->\r\n<div class=\"container\">\r\n  <form>\r\n    <h2 class=\"text-center heading\">GET IN TOUCH</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"YOUR NAME\" id=\"first\">\r\n        </div>\r\n      </div>\r\n      <!--  col-md-6   -->\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"EMAILID\" id=\"last\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"PHONE\" id=\"company\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <select class=\"form-control\">\r\n            <option>SELECT DEPARTMENT</option>\r\n            <option>App Development</option>\r\n            <option>Ecommerce</option>\r\n            <option>Web Design</option>\r\n            <option>Web Development</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\" placeholder=\"Type your massage here...\"></textarea>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n    <!--  row   -->\r\n\r\n  </form>\r\n</div>\r\n<!-- end get in touch  -->\r\n<!--  footer -->\r\n<app-footer></app-footer>\r\n"

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