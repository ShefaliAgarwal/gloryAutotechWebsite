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

module.exports = "/* footer */\r\n\r\n.site-footer {\r\n    background-color: #26272b;\r\n    padding: 45px 0 20px;\r\n    font-size: 15px;\r\n    line-height: 24px;\r\n    color: #fff;\r\n    margin-top: 1em;\r\n}\r\n\r\n.site-footer hr {\r\n    border-top-color: #bbb;\r\n    opacity: 0.5\r\n}\r\n\r\n.site-footer hr.small {\r\n    margin: 20px 0\r\n}\r\n\r\n.site-footer h6 {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    margin-top: 5px;\r\n    letter-spacing: 2px\r\n}\r\n\r\n.site-footer a {\r\n    color: #737373;\r\n}\r\n\r\n.site-footer a:hover {\r\n    color: #3366cc;\r\n    text-decoration: none;\r\n}\r\n\r\n.footer-links {\r\n    padding-left: 0;\r\n    list-style: none\r\n}\r\n\r\n.footer-links li {\r\n    display: block\r\n}\r\n\r\n.footer-links a {\r\n    color: #ffff;\r\n}\r\n\r\n.footer-links a:active,\r\n.footer-links a:focus,\r\n.footer-links a:hover {\r\n    color: #3366cc;\r\n    text-decoration: none;\r\n}\r\n\r\n.footer-links.inline li {\r\n    display: inline-block\r\n}\r\n\r\n.site-footer .social-icons {\r\n    text-align: right\r\n}\r\n\r\n.site-footer .social-icons a {\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    margin-left: 6px;\r\n    margin-right: 0;\r\n    border-radius: 100%;\r\n    background-color: #33353d\r\n}\r\n\r\n.copyright-text {\r\n    margin: 0\r\n}\r\n\r\n@media (max-width:991px) {\r\n    .site-footer [class^=col-] {\r\n        margin-bottom: 30px\r\n    }\r\n}\r\n\r\n@media (max-width :500px)\r\n{\r\n    .site-footer\r\n    {\r\n        margin-top: 32em;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .site-footer {\r\n        padding-bottom: 0\r\n    }\r\n    .site-footer .copyright-text,\r\n    .site-footer .social-icons {\r\n        text-align: center\r\n    }\r\n}\r\n\r\n.social-icons {\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none\r\n}\r\n\r\n.social-icons li {\r\n    display: inline-block;\r\n    margin-bottom: 4px\r\n}\r\n\r\n.social-icons li.title {\r\n    margin-right: 15px;\r\n    text-transform: uppercase;\r\n    color: #96a2b2;\r\n    font-weight: 700;\r\n    font-size: 13px\r\n}\r\n\r\n.social-icons a {\r\n    background-color: #eceeef;\r\n    color: #818a91;\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    line-height: 44px;\r\n    width: 44px;\r\n    height: 44px;\r\n    text-align: center;\r\n    margin-right: 8px;\r\n    border-radius: 100%;\r\n    transition: all .2s linear\r\n}\r\n\r\n.social-icons a:active,\r\n.social-icons a:focus,\r\n.social-icons a:hover {\r\n    color: #fff;\r\n    background-color: #29aafe\r\n}\r\n\r\n.social-icons.size-sm a {\r\n    line-height: 34px;\r\n    height: 34px;\r\n    width: 34px;\r\n    font-size: 14px\r\n}\r\n\r\n.social-icons a.facebook:hover {\r\n    background-color: #3b5998\r\n}\r\n\r\n.social-icons a.twitter:hover {\r\n    background-color: #00aced\r\n}\r\n\r\n.social-icons a.linkedin:hover {\r\n    background-color: #007bb6\r\n}\r\n\r\n.social-icons a.dribbble:hover {\r\n    background-color: #ea4c89\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .social-icons li.title {\r\n        display: block;\r\n        margin-right: 0;\r\n        font-weight: 600\r\n    }\r\n}\r\n\r\n/* end footer  */\r\n\r\n@media (max-width :500px){\r\n    .footer {\r\n        margin-top: 5em;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px)\r\n{\r\n    .footer{\r\n        margin-top: 5em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUNBOztJQUVJOztRQUVJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7O1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUduQjtBQUNKOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmO0lBQ0o7QUFDSjs7QUFHQSxnQkFBZ0I7O0FBQ2hCO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7O0lBRUk7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvb3RlciAqL1xyXG5cclxuLnNpdGUtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3MmI7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciBociB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYmJiO1xyXG4gICAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciBoci5zbWFsbCB7XHJcbiAgICBtYXJnaW46IDIwcHggMFxyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgaDYge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweFxyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgYSB7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMzY2Y2M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZVxyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYTphY3RpdmUsXHJcbi5mb290ZXItbGlua3MgYTpmb2N1cyxcclxuLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzM2NmNjO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzLmlubGluZSBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTNkXHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtdGV4dCB7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICAgIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGggOjUwMHB4KVxyXG57XHJcbiAgICAuc2l0ZS1mb290ZXJcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuc2l0ZS1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwXHJcbiAgICB9XHJcbiAgICAuc2l0ZS1mb290ZXIgLmNvcHlyaWdodC10ZXh0LFxyXG4gICAgLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgfVxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjOTZhMmIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweFxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZjtcclxuICAgIGNvbG9yOiAjODE4YTkxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyXHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgYTphY3RpdmUsXHJcbi5zb2NpYWwtaWNvbnMgYTpmb2N1cyxcclxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWFmZVxyXG59XHJcblxyXG4uc29jaWFsLWljb25zLnNpemUtc20gYSB7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgYS5mYWNlYm9vazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgYS50d2l0dGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjZWRcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBhLmxpbmtlZGluOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYjZcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBhLmRyaWJiYmxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTRjODlcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBlbmQgZm9vdGVyICAqL1xyXG5AbWVkaWEgKG1heC13aWR0aCA6NTAwcHgpe1xyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweClcclxue1xyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- contect us  -->\r\n<div class=\"container-fluid \">\r\n  <div class=\"row \">\r\n    <div class=\"col-md-2\">\r\n     <a routerLink=\"'/'\"> <img src=\"../../assets/image/2LOGO.png\" class=\"img-responsive\"></a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h2 class=\"heading text-center \">\r\n        <br>Contact Us</h2>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n      <div class=\"map-responsive map \">\r\n        <iframe\r\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63727541058!2d72.68220805203599!3d21.159462704479317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1580205932449!5m2!1sen!2sin \"></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container contact-form \">\r\n  <div class=\"contact-image \">\r\n    <img src=\"https://image.ibb.co/kUagtU/rocket_contact.png \" alt=\"rocket_contact \" />\r\n  </div>\r\n  <form method=\"post \">\r\n    <h3>Drop Us a Message</h3>\r\n    <div class=\"row \">\r\n      <div class=\"col-md-6 \">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Phone Number\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 \">\r\n        <div class=\"form-group \">\r\n          <textarea name=\"txtMsg \" class=\"form-control \" placeholder=\"Your Message * \"\r\n            style=\"width: 100%; height: 150px; \"></textarea>\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-primary\">Send massage</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!-- end contect us  -->\r\n<!--  footer -->\r\n<footer class=\"site-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" align=\"center\">\r\n      <div class=\"col-sm-12 col-md-3\">\r\n        <a (click)=\"navigate()\"><img src=\"../../../../assets/image/2LOGO.png\" class=\"img-responsive\"></a>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <i class=\"fa fa-phone fa-3x\" aria-hidden=\"true\"></i>\r\n        <ul class=\"footer-links\">\r\n          <li><a href=\"tel:8000078216\">Phone : (+91) 8000078216</a></li>\r\n          <li><a href=\"tel:8141422244\">Phone : (+91) 8141422244</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <i class=\"fa fa-envelope fa-3x\" aria-hidden=\"true\"></i>\r\n        <ul class=\"footer-links\">\r\n          <li><a href=\"mailto:hrgloryautotech@gmail.com\" target=\"_blank\">hrgloryautotech@gmail.com</a></li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n        <i class=\"fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\r\n        <ul class=\"footer-links\">\r\n          <li><a href=\"https://goo.gl/maps/p8ufPgXcKxxGVErq8\" target=\"_blank\">814 ,Sns Arista <br> vesu surat ,\r\n              gujarat.</a></li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\r\n        <p class=\"copyright-text\">© 2018, All Rights Reserved.</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n        <ul class=\"social-icons\">\r\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n          <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n          <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\r\n          <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n<!-- end footer  -->\r\n"

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