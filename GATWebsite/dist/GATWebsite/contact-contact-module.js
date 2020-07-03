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

module.exports = "/* footer */\n\n.site-footer {\n    background-color: #26272b;\n    padding: 45px 0 20px;\n    font-size: 15px;\n    line-height: 24px;\n    color: #fff;\n    margin-top: 1em;\n}\n\n.site-footer hr {\n    border-top-color: #bbb;\n    opacity: 0.5\n}\n\n.site-footer hr.small {\n    margin: 20px 0\n}\n\n.site-footer h6 {\n    color: #fff;\n    font-size: 16px;\n    text-transform: uppercase;\n    margin-top: 5px;\n    letter-spacing: 2px\n}\n\n.site-footer a {\n    color: #737373;\n}\n\n.site-footer a:hover {\n    color: #3366cc;\n    text-decoration: none;\n}\n\n.footer-links {\n    padding-left: 0;\n    list-style: none\n}\n\n.footer-links li {\n    display: block\n}\n\n.footer-links a {\n    color: #ffff;\n}\n\n.footer-links a:active,\n.footer-links a:focus,\n.footer-links a:hover {\n    color: #3366cc;\n    text-decoration: none;\n}\n\n.footer-links.inline li {\n    display: inline-block\n}\n\n.site-footer .social-icons {\n    text-align: right\n}\n\n.site-footer .social-icons a {\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin-left: 6px;\n    margin-right: 0;\n    border-radius: 100%;\n    background-color: #33353d\n}\n\n.copyright-text {\n    margin: 0\n}\n\n@media (max-width:991px) {\n    .site-footer [class^=col-] {\n        margin-bottom: 30px\n    }\n}\n\n@media (max-width :500px)\n{\n    .site-footer\n    {\n        margin-top: 32em;\n    }\n}\n\n@media (max-width:767px) {\n    .site-footer {\n        padding-bottom: 0\n    }\n    .site-footer .copyright-text,\n    .site-footer .social-icons {\n        text-align: center\n    }\n}\n\n.social-icons {\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none\n}\n\n.social-icons li {\n    display: inline-block;\n    margin-bottom: 4px\n}\n\n.social-icons li.title {\n    margin-right: 15px;\n    text-transform: uppercase;\n    color: #96a2b2;\n    font-weight: 700;\n    font-size: 13px\n}\n\n.social-icons a {\n    background-color: #eceeef;\n    color: #818a91;\n    font-size: 16px;\n    display: inline-block;\n    line-height: 44px;\n    width: 44px;\n    height: 44px;\n    text-align: center;\n    margin-right: 8px;\n    border-radius: 100%;\n    transition: all .2s linear\n}\n\n.social-icons a:active,\n.social-icons a:focus,\n.social-icons a:hover {\n    color: #fff;\n    background-color: #29aafe\n}\n\n.social-icons.size-sm a {\n    line-height: 34px;\n    height: 34px;\n    width: 34px;\n    font-size: 14px\n}\n\n.social-icons a.facebook:hover {\n    background-color: #3b5998\n}\n\n.social-icons a.twitter:hover {\n    background-color: #00aced\n}\n\n.social-icons a.linkedin:hover {\n    background-color: #007bb6\n}\n\n.social-icons a.dribbble:hover {\n    background-color: #ea4c89\n}\n\n@media (max-width:767px) {\n    .social-icons li.title {\n        display: block;\n        margin-right: 0;\n        font-weight: 600\n    }\n}\n\n/* end footer  */\n\n@media (max-width :500px){\n    .footer {\n        margin-top: 5em;\n    }\n}\n\n@media (max-width: 767px)\n{\n    .footer{\n        margin-top: 5em;\n    }\n}\n\n.footer-nav li{\n    list-style: none;\n    text-align: justify;\n    padding-left: 3em;\n}\n\n.footer-nav li a {\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUNBOztJQUVJOztRQUVJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7O1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUduQjtBQUNKOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmO0lBQ0o7QUFDSjs7QUFHQSxnQkFBZ0I7O0FBQ2hCO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7O0lBRUk7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9vdGVyICovXG5cbi5zaXRlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjcyYjtcbiAgICBwYWRkaW5nOiA0NXB4IDAgMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uc2l0ZS1mb290ZXIgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNiYmI7XG4gICAgb3BhY2l0eTogMC41XG59XG5cbi5zaXRlLWZvb3RlciBoci5zbWFsbCB7XG4gICAgbWFyZ2luOiAyMHB4IDBcbn1cblxuLnNpdGUtZm9vdGVyIGg2IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweFxufVxuXG4uc2l0ZS1mb290ZXIgYSB7XG4gICAgY29sb3I6ICM3MzczNzM7XG59XG5cbi5zaXRlLWZvb3RlciBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzNjZjYztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lXG59XG5cbi5mb290ZXItbGlua3MgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5mb290ZXItbGlua3MgYSB7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuXG4uZm9vdGVyLWxpbmtzIGE6YWN0aXZlLFxuLmZvb3Rlci1saW5rcyBhOmZvY3VzLFxuLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzNjZjYztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbGlua3MuaW5saW5lIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0XG59XG5cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM1M2Rcbn1cblxuLmNvcHlyaWdodC10ZXh0IHtcbiAgICBtYXJnaW46IDBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aCA6NTAwcHgpXG57XG4gICAgLnNpdGUtZm9vdGVyXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMmVtO1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLnNpdGUtZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBcbiAgICB9XG4gICAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCxcbiAgICAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG4uc29jaWFsLWljb25zIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjOTZhMmIyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbi5zb2NpYWwtaWNvbnMgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZjtcbiAgICBjb2xvcjogIzgxOGE5MTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyXG59XG5cbi5zb2NpYWwtaWNvbnMgYTphY3RpdmUsXG4uc29jaWFsLWljb25zIGE6Zm9jdXMsXG4uc29jaWFsLWljb25zIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWFhZmVcbn1cblxuLnNvY2lhbC1pY29ucy5zaXplLXNtIGEge1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogMzRweDtcbiAgICBmb250LXNpemU6IDE0cHhcbn1cblxuLnNvY2lhbC1pY29ucyBhLmZhY2Vib29rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4XG59XG5cbi5zb2NpYWwtaWNvbnMgYS50d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkXG59XG5cbi5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JiNlxufVxuXG4uc29jaWFsLWljb25zIGEuZHJpYmJibGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTRjODlcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuc29jaWFsLWljb25zIGxpLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxuICAgIH1cbn1cblxuXG4vKiBlbmQgZm9vdGVyICAqL1xuQG1lZGlhIChtYXgtd2lkdGggOjUwMHB4KXtcbiAgICAuZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweClcbntcbiAgICAuZm9vdGVye1xuICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgfVxufVxuLmZvb3Rlci1uYXYgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmctbGVmdDogM2VtO1xufVxuLmZvb3Rlci1uYXYgbGkgYSB7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- contect us  -->\n<div class=\"container-fluid \">\n  <div class=\"row \">\n    <div class=\"col-md-2\">\n     <a routerLink=\"'/'\"> <img src=\"../../assets/image/2LOGO.png\" class=\"img-responsive\"></a>\n    </div>\n    <div class=\"col-md-8\">\n      <h2 class=\"heading text-center \">\n        <br>Contact Us</h2>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 \">\n      <div class=\"map-responsive map \">\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63727541058!2d72.68220805203599!3d21.159462704479317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1580205932449!5m2!1sen!2sin \"></iframe>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container contact-form \">\n  <div class=\"contact-image \">\n    <img src=\"https://image.ibb.co/kUagtU/rocket_contact.png \" alt=\"rocket_contact \" />\n  </div>\n  <form method=\"post \">\n    <h3>Drop Us a Message</h3>\n    <div class=\"row \">\n      <div class=\"col-md-6 \">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Name\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Phone Number\">\n        </div>\n      </div>\n      <div class=\"col-md-6 \">\n        <div class=\"form-group \">\n          <textarea name=\"txtMsg \" class=\"form-control \" placeholder=\"Your Message * \"\n            style=\"width: 100%; height: 150px; \"></textarea>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\">Send massage</button>\n    </div>\n  </form>\n</div>\n<!-- end contect us  -->\n<!--  footer -->\n<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\" align=\"center\">\n      <div class=\"col-sm-12 col-md-3\">\n        <a style=\"cursor:pointer\" (click)=\"navigate()\"><img src=\"../../../../assets/image/2LOGO.png\" class=\"img-responsive\"></a>\n        <ul class=\"footer-nav\">\n          <li><a href=\"#service\"><i class=\"fa fa-angle-double-right\"></i> SERVICE</a></li>\n          <li><a href=\"#projects\"><i class=\"fa fa-angle-double-right\"></i> PROJECTS</a></li>\n          <li><a style=\"cursor:pointer\" (click)=\"onCarrer()\"><i class=\"fa fa-angle-double-right\"></i> CAREER</a></li>\n          <li><a style=\"cursor:pointer\" (click)=\"onContact()\"><i class=\"fa fa-angle-double-right\"></i> CONTACT US</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-3\">\n        <i class=\"fa fa-phone fa-3x\" aria-hidden=\"true\"></i>\n        <ul class=\"footer-links\">\n          <li><a href=\"tel:8000078216\">Phone : (+91) 8000078216</a></li>\n          <li><a href=\"tel:8141422244\">Phone : (+91) 8141422244</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4\">\n        <i class=\"fa fa-envelope fa-3x\" aria-hidden=\"true\"></i>\n        <ul class=\"footer-links\">\n          <li><a href=\"mailto:hrgloryautotech@gmail.com\" target=\"_blank\">hrgloryautotech@gmail.com</a></li>\n\n        </ul>\n      </div>\n\n      <div class=\"col-md-2\">\n        <i class=\"fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\n        <ul class=\"footer-links\">\n          <li><a href=\"https://goo.gl/maps/p8ufPgXcKxxGVErq8\" target=\"_blank\">309 - 310 , SNS Arista , behind Prime Shoppers, Vesu.</a></li>\n\n        </ul>\n      </div>\n    </div>\n    <hr>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\n        <p class=\"copyright-text\">© 2019, All Rights Reserved.</p>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <ul class=\"social-icons\">\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n          <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- end footer  -->\n"

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
    ContactComponent.prototype.onCarrer = function () {
        this.router.navigate(['/carrer']);
    };
    ContactComponent.prototype.onContact = function () {
        this.router.navigate(['/contact']);
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