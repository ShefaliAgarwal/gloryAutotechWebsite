(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");




var routes = [
    {
        path: '',
        component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* footer */\n\n.site-footer {\n    background-color: #26272b;\n    padding: 45px 0 20px;\n    font-size: 15px;\n    line-height: 24px;\n    color: #fff;\n    margin-top: 1em;\n}\n\n.site-footer hr {\n    border-top-color: #bbb;\n    opacity: 0.5\n}\n\n.site-footer hr.small {\n    margin: 20px 0\n}\n\n.site-footer h6 {\n    color: #fff;\n    font-size: 16px;\n    text-transform: uppercase;\n    margin-top: 5px;\n    letter-spacing: 2px\n}\n\n.site-footer a {\n    color: #737373;\n}\n\n.site-footer a:hover {\n    color: #3366cc;\n    text-decoration: none;\n}\n\n.footer-links {\n    padding-left: 0;\n    list-style: none\n}\n\n.footer-links li {\n    display: block\n}\n\n.footer-links a {\n    color: #ffff;\n}\n\n.footer-links a:active,\n.footer-links a:focus,\n.footer-links a:hover {\n    color: #3366cc;\n    text-decoration: none;\n}\n\n.footer-links.inline li {\n    display: inline-block\n}\n\n.site-footer .social-icons {\n    text-align: right\n}\n\n.site-footer .social-icons a {\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin-left: 6px;\n    margin-right: 0;\n    border-radius: 100%;\n    background-color: #33353d\n}\n\n.copyright-text {\n    margin: 0\n}\n\n@media (max-width:991px) {\n    .site-footer [class^=col-] {\n        margin-bottom: 30px\n    }\n}\n\n@media (max-width :500px)\n{\n    .site-footer\n    {\n        margin-top: 32em;\n    }\n}\n\n@media (max-width:767px) {\n    .site-footer {\n        padding-bottom: 0\n    }\n    .site-footer .copyright-text,\n    .site-footer .social-icons {\n        text-align: center\n    }\n}\n\n.social-icons {\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none\n}\n\n.social-icons li {\n    display: inline-block;\n    margin-bottom: 4px\n}\n\n.social-icons li.title {\n    margin-right: 15px;\n    text-transform: uppercase;\n    color: #96a2b2;\n    font-weight: 700;\n    font-size: 13px\n}\n\n.social-icons a {\n    background-color: #eceeef;\n    color: #818a91;\n    font-size: 16px;\n    display: inline-block;\n    line-height: 44px;\n    width: 44px;\n    height: 44px;\n    text-align: center;\n    margin-right: 8px;\n    border-radius: 100%;\n    transition: all .2s linear\n}\n\n.social-icons a:active,\n.social-icons a:focus,\n.social-icons a:hover {\n    color: #fff;\n    background-color: #29aafe\n}\n\n.social-icons.size-sm a {\n    line-height: 34px;\n    height: 34px;\n    width: 34px;\n    font-size: 14px\n}\n\n.social-icons a.facebook:hover {\n    background-color: #3b5998\n}\n\n.social-icons a.twitter:hover {\n    background-color: #00aced\n}\n\n.social-icons a.linkedin:hover {\n    background-color: #007bb6\n}\n\n.social-icons a.dribbble:hover {\n    background-color: #ea4c89\n}\n\n@media (max-width:767px) {\n    .social-icons li.title {\n        display: block;\n        margin-right: 0;\n        font-weight: 600\n    }\n}\n\n/* end footer  */\n\n@media (max-width :500px){\n    .footer {\n        margin-top: 5em;\n    }\n}\n\n@media (max-width: 767px)\n{\n    .footer{\n        margin-top: 5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUNBOztJQUVJOztRQUVJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7O1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUduQjtBQUNKOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmO0lBQ0o7QUFDSjs7QUFHQSxnQkFBZ0I7O0FBQ2hCO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7O0lBRUk7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvb3RlciAqL1xuXG4uc2l0ZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3MmI7XG4gICAgcGFkZGluZzogNDVweCAwIDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLnNpdGUtZm9vdGVyIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYmJiO1xuICAgIG9wYWNpdHk6IDAuNVxufVxuXG4uc2l0ZS1mb290ZXIgaHIuc21hbGwge1xuICAgIG1hcmdpbjogMjBweCAwXG59XG5cbi5zaXRlLWZvb3RlciBoNiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHhcbn1cblxuLnNpdGUtZm9vdGVyIGEge1xuICAgIGNvbG9yOiAjNzM3MzczO1xufVxuXG4uc2l0ZS1mb290ZXIgYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzY2Y2M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vdGVyLWxpbmtzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG4uZm9vdGVyLWxpbmtzIGxpIHtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4uZm9vdGVyLWxpbmtzIGEge1xuICAgIGNvbG9yOiAjZmZmZjtcbn1cblxuLmZvb3Rlci1saW5rcyBhOmFjdGl2ZSxcbi5mb290ZXItbGlua3MgYTpmb2N1cyxcbi5mb290ZXItbGlua3MgYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzY2Y2M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vdGVyLWxpbmtzLmlubGluZSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodFxufVxuXG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTNkXG59XG5cbi5jb3B5cmlnaHQtdGV4dCB7XG4gICAgbWFyZ2luOiAwXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLnNpdGUtZm9vdGVyIFtjbGFzc149Y29sLV0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGggOjUwMHB4KVxue1xuICAgIC5zaXRlLWZvb3RlclxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJlbTtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5zaXRlLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwXG4gICAgfVxuICAgIC5zaXRlLWZvb3RlciAuY29weXJpZ2h0LXRleHQsXG4gICAgLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbn1cblxuLnNvY2lhbC1pY29ucyBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDRweFxufVxuXG4uc29jaWFsLWljb25zIGxpLnRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzk2YTJiMjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4uc29jaWFsLWljb25zIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XG4gICAgY29sb3I6ICM4MThhOTE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhclxufVxuXG4uc29jaWFsLWljb25zIGE6YWN0aXZlLFxuLnNvY2lhbC1pY29ucyBhOmZvY3VzLFxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhYWZlXG59XG5cbi5zb2NpYWwtaWNvbnMuc2l6ZS1zbSBhIHtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5zb2NpYWwtaWNvbnMgYS5mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OFxufVxuXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZFxufVxuXG4uc29jaWFsLWljb25zIGEubGlua2VkaW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYjZcbn1cblxuLnNvY2lhbC1pY29ucyBhLmRyaWJiYmxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0Yzg5XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLnNvY2lhbC1pY29ucyBsaS50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcbiAgICB9XG59XG5cblxuLyogZW5kIGZvb3RlciAgKi9cbkBtZWRpYSAobWF4LXdpZHRoIDo1MDBweCl7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpXG57XG4gICAgLmZvb3RlcntcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- contect us  -->\n<div class=\"container-fluid \">\n  <div class=\"row \">\n    <div class=\"col-md-2\">\n     <a routerLink=\"'/'\"> <img src=\"../../assets/image/2LOGO.png\" class=\"img-responsive\"></a>\n    </div>\n    <div class=\"col-md-8\">\n      <h2 class=\"heading text-center \">\n        <br>Contact Us</h2>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 \">\n      <div class=\"map-responsive map \">\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63727541058!2d72.68220805203599!3d21.159462704479317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1580205932449!5m2!1sen!2sin \"></iframe>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container contact-form \">\n  <div class=\"contact-image \">\n    <img src=\"https://image.ibb.co/kUagtU/rocket_contact.png \" alt=\"rocket_contact \" />\n  </div>\n  <form method=\"post \">\n    <h3>Drop Us a Message</h3>\n    <div class=\"row \">\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Name\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Phone Number\">\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group \">\n          <textarea name=\"txtMsg \" class=\"form-control \" placeholder=\"Your Message * \"\n            style=\"width: 100%; height: 150px; \"></textarea>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\">Send massage</button>\n    </div>\n  </form>\n</div>\n<!-- end contect us  -->\n<!--  footer -->\n<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\" align=\"center\">\n      <div class=\"col-sm-12 col-md-3\">\n        <a (click)=\"navigate()\"><img src=\"../../../../assets/image/2LOGO.png\" class=\"img-responsive\"></a>\n      </div>\n      <div class=\"col-md-3\">\n        <i class=\"fa fa-phone fa-3x\" aria-hidden=\"true\"></i>\n        <ul class=\"footer-links\">\n          <li><a href=\"tel:8000078216\">Phone : (+91) 8000078216</a></li>\n          <li><a href=\"tel:8141422244\">Phone : (+91) 8141422244</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4\">\n        <i class=\"fa fa-envelope fa-3x\" aria-hidden=\"true\"></i>\n        <ul class=\"footer-links\">\n          <li><a href=\"mailto:hrgloryautotech@gmail.com\" target=\"_blank\">hrgloryautotech@gmail.com</a></li>\n\n        </ul>\n      </div>\n\n      <div class=\"col-md-2\">\n        <i class=\"fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\n        <ul class=\"footer-links\">\n          <li><a href=\"https://goo.gl/maps/p8ufPgXcKxxGVErq8\" target=\"_blank\">814 ,Sns Arista <br> vesu surat ,\n              gujarat.</a></li>\n\n        </ul>\n      </div>\n    </div>\n    <hr>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\n        <p class=\"copyright-text\">© 2018, All Rights Reserved.</p>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <ul class=\"social-icons\">\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n          <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- end footer  -->\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.navigate = function () {
        this.router.navigate(['/']);
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/contact/contact-routing.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactRoutingModule"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map