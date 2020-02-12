(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/career.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/career.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9jYXJlZXIuY3NzIn0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/firstpage.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/firstpage.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\n/* header image  */\r\n\r\n\r\n.first {\r\n    background-image: url('header-bg.jpg');\r\n    background-color: #cccccc;\r\n    height: 650px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n\r\n/* end header image  */\r\n\r\n\r\n/* navigation  */\r\n\r\n\r\n.nav {\r\n    margin-top: 5em;\r\n    display: -webkit-box;\r\n}\r\n\r\n\r\n/* .nav .active span {\r\nbackground: #CEDD3E;\r\ncolor: aqua;\r\n} */\r\n\r\n\r\n.navbar-default {\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n\r\n.speak {\r\n    position: relative;\r\n    display: inline-block;\r\n    min-width: 2.7em;\r\n    margin: 1em;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.speak span {\r\n    transition: color 0.3s ease-out;\r\n    color: inherit;\r\n    font-weight: 600;\r\n    font-size: 2rem;\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n.speak:after,\r\n.speak:before,\r\n.speak span:after,\r\n.speak span:before {\r\n    color: #333333;\r\n    background-color: currentColor;\r\n}\r\n\r\n\r\n.one:before,\r\n.one:after,\r\n.one span:before,\r\n.one span:after {\r\n    background-color: #CEDD3E;\r\n}\r\n\r\n\r\n.two:before,\r\n.two:after,\r\n.two span:before,\r\n.two span:after {\r\n    background-color: #F27132;\r\n}\r\n\r\n\r\n.three:before,\r\n.three:after,\r\n.three span:before,\r\n.three span:after {\r\n    background-color: #85C3E9;\r\n}\r\n\r\n\r\n.four:before,\r\n.four:after,\r\n.four span:before,\r\n.four span:after {\r\n    background-color: #FDBE2A;\r\n}\r\n\r\n\r\n.speak:after,\r\n.speak:before,\r\n.speak span:before,\r\n.speak span:after {\r\n    position: absolute;\r\n    content: '';\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.speak:after,\r\n.speak:before {\r\n    bottom: -6px;\r\n    height: 4px;\r\n}\r\n\r\n\r\n.speak:after {\r\n    left: 0;\r\n    right: 39px;\r\n}\r\n\r\n\r\n.speak:before {\r\n    right: -2px;\r\n    width: 13px;\r\n}\r\n\r\n\r\n.speak span:before {\r\n    height: 0;\r\n    width: 4px;\r\n    bottom: -2px;\r\n    right: 7px;\r\n    transition: height .3s, bottom .3s;\r\n}\r\n\r\n\r\n.speak span:after {\r\n    height: 4px;\r\n    width: 34px;\r\n    bottom: -6px;\r\n    right: 8px;\r\n    transform: rotate(0deg);\r\n    transform-origin: left top;\r\n    transition: transform .3s, right .3s, width .3s;\r\n}\r\n\r\n\r\n.speak.active span:before {\r\n    height: 22px;\r\n    bottom: -24px;\r\n}\r\n\r\n\r\n.speak.active span:after {\r\n    right: 1px;\r\n    width: 40px;\r\n    transform: rotate(30deg);\r\n}\r\n\r\n\r\n.speak.active,\r\n.speak.active {\r\n    outline: 0;\r\n}\r\n\r\n\r\n/* end navigation  */\r\n\r\n\r\n/* second part  */\r\n\r\n\r\n.company {\r\n    color: white;\r\n    font-weight: 600;\r\n    font-size: 50px;\r\n}\r\n\r\n\r\n.font-main {\r\n    color: white;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\n.button {\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    color: white;\r\n    padding: 16px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n    border-radius: 15px 15px 15px 15px;\r\n}\r\n\r\n\r\n.button1 {\r\n    background-color: white;\r\n    color: black;\r\n    border: 2px solid #08ADC3;\r\n}\r\n\r\n\r\n.button1:hover {\r\n    background-color: #08ADC3;\r\n    color: white;\r\n}\r\n\r\n\r\n/* end second part  */\r\n\r\n\r\n/*-- services --*/\r\n\r\n\r\n.mb-60 {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n\r\n.heading {\r\n    font-size: 21px;\r\n    color: #000;\r\n    font-weight: bold;\r\n    padding: 40px;\r\n    margin-top: -20px;\r\n}\r\n\r\n\r\n.services-inner {\r\n    border: 2px solid #08ADC3;\r\n    margin-left: 35px;\r\n    transition: .3s;\r\n    background: #fff\r\n}\r\n\r\n\r\n.our-services-img {\r\n    float: left;\r\n    margin-left: -36px;\r\n    margin-right: 8px;\r\n    margin-top: 45px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.our-services-img span.fa {\r\n    width: 68px;\r\n    font-size: 40px;\r\n    color: #08ADC3;\r\n    background: #fff;\r\n}\r\n\r\n\r\n.our-services-text {\r\n    padding-right: 10px;\r\n}\r\n\r\n\r\n.our-services-text {\r\n    overflow: hidden;\r\n    padding: 28px 0 25px;\r\n}\r\n\r\n\r\n.our-services-text h4 {\r\n    color: #222222;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 8px;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.our-services-text h4::before {\r\n    background: #08ADC3 none repeat scroll 0 0;\r\n    bottom: 0;\r\n    content: \"\";\r\n    height: 1px;\r\n    position: absolute;\r\n    width: 40px;\r\n}\r\n\r\n\r\n.our-services-wrapper:hover .services-inner {\r\n    background: #fff none repeat scroll 0 0;\r\n    border: 2px solid transparent;\r\n    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n.our-services-text p {\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.services p {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 26px;\r\n    color: #666;\r\n}\r\n\r\n\r\n.services {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n\r\n.btn-danger {\r\n    color: #fff;\r\n    background-color: darkslategray;\r\n    border-color: darkgray;\r\n}\r\n\r\n\r\n/*-- //services-- */\r\n\r\n\r\n/* service */\r\n\r\n\r\n.ban-bottom-w3l {\r\n    padding: 5em 0;\r\n}\r\n\r\n\r\n.ban-bottom1 {\r\n    float: left;\r\n    width: 48%;\r\n    margin-right: 2%\r\n}\r\n\r\n\r\n.ban-bottom2 {\r\n    float: left;\r\n    width: 48%;\r\n    margin-left: 2%\r\n}\r\n\r\n\r\n.ban-img {\r\n    margin-top: 2.1em;\r\n}\r\n\r\n\r\n.ban-top {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.ban-top img {\r\n    transition: all 1s;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.ban-top:hover img {\r\n    transform: scale3d(1.1, 1.1, 1);\r\n}\r\n\r\n\r\n.ban-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 25%;\r\n    background: rgba(13, 89, 175, 0.72);\r\n    padding: 1em;\r\n}\r\n\r\n\r\n.ban-text1 {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 25%;\r\n    background: rgba(13, 89, 175, 0.72);\r\n    padding: 1em;\r\n}\r\n\r\n\r\n.ban-text h4 {\r\n    font-size: 2em;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.ban-text1 h4 {\r\n    font-size: 2em;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.ban-text2 h4 {\r\n    font-size: 1.5em;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.ban-text2 span {\r\n    display: block;\r\n    line-height: 1.5em;\r\n}\r\n\r\n\r\n/* Sweep To Top */\r\n\r\n\r\n.hvr-sweep-to-top {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    transform: translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    position: relative;\r\n    transition-property: color;\r\n    transition-duration: 0.3s;\r\n}\r\n\r\n\r\n.hvr-sweep-to-top:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #F19E1F;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 60%;\r\n    -moz-border-radius: 60%;\r\n    -o-border-radius: 60%;\r\n    -ms-border-radius: 60%;\r\n    transform: scaleY(0);\r\n    transform-origin: 50% 100%;\r\n    transition-property: transform;\r\n    transition-duration: 0.3s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n\r\n.hvr-sweep-to-top:hover,\r\n.hvr-sweep-to-top:focus,\r\n.hvr-sweep-to-top:active {\r\n    color: white;\r\n}\r\n\r\n\r\n.hvr-sweep-to-top:hover:before,\r\n.hvr-sweep-to-top:focus:before,\r\n.hvr-sweep-to-top:active:before,\r\n.services-grid:hover .hvr-sweep-to-top:before {\r\n    transform: scaleY(1);\r\n}\r\n\r\n\r\n.ban-text2 {\r\n    position: absolute;\r\n    top: 14%;\r\n    left: 45%;\r\n    background: #1565C0;\r\n    padding: 1.5em;\r\n    border-radius: 60px;\r\n    text-align: center;\r\n    width: 18%;\r\n}\r\n\r\n\r\nh2.tittle {\r\n    text-align: center;\r\n    font-size: 3em;\r\n    color: #1565C0;\r\n}\r\n\r\n\r\n.new-arrivals-w3agile {\r\n    padding: 5em 0;\r\n    background: #F9F8F8;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.arrivals-grids {\r\n    margin-top: 4em;\r\n}\r\n\r\n\r\n.grid-arr {\r\n    border: 1px solid #E2E2E2;\r\n    border: 5px solid #ffffff;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\r\n    padding: 0em;\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure {\r\n    position: relative;\r\n    display: block;\r\n    overflow: hidden;\r\n    margin: 0 0 20px 0;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure:hover .grid-img+.grid-img {\r\n    right: 100%;\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure>a {\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure>a .grid-img {\r\n    width: 100%;\r\n    line-height: 0;\r\n    will-change: right;\r\n    transform: translateZ(0);\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure>a .grid-img img {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure>a .grid-img+.grid-img {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    transition: right 0.7s cubic-bezier(0.75, 0, 0.175, 1), opacity 0.7s cubic-bezier(0.75, 0, 0.175, 1);\r\n}\r\n\r\n\r\n.grid-arr .grid-arrival figure>a .grid-img+.grid-img img {\r\n    max-width: none;\r\n}\r\n\r\n\r\n.grid-product {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.women h6 {\r\n    font-size: 1.4em;\r\n    margin: 0.4em 0;\r\n}\r\n\r\n\r\n.women h6 a {\r\n    color: #1565C0;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.women p {\r\n    font-size: 1em;\r\n    color: #999;\r\n    margin: 0.9em 0;\r\n}\r\n\r\n\r\nem.item_price {\r\n    font-style: normal;\r\n    color: #000;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\nspan.size {\r\n    color: #000000;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n/* end service  */\r\n\r\n\r\n/* projects  */\r\n\r\n\r\n.scroling {\r\n    display: block;\r\n    overflow-y: scroll;\r\n    height: 560px;\r\n}\r\n\r\n\r\n.scroling::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n\r\n/*-- gallery --*/\r\n\r\n\r\n.section {\r\n    margin-top: 5em;\r\n}\r\n\r\n\r\n.section_1_gallery_grid {\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n.w3_section_1_gallery_grid {\r\n    padding: 0 8px;\r\n}\r\n\r\n\r\n.section_1_gallery_grid1 {\r\n    position: relative;\r\n    background: #edf3f3;\r\n    padding: 6px;\r\n}\r\n\r\n\r\n.proj_gallery_grid1_pos {\r\n    background: #030605;\r\n    bottom: 23px;\r\n    left: 30px;\r\n    opacity: 0;\r\n    padding: 1em;\r\n    position: absolute;\r\n    right: 30px;\r\n    text-align: center;\r\n    visibility: hidden;\r\n    transform: scaleX(-1);\r\n    -moz-transform: scaleX(-1);\r\n    -o-transform: scaleX(-1);\r\n    -ms-transform: scaleX(-1);\r\n    transition: all 0.8s ease;\r\n}\r\n\r\n\r\n.proj_gallery_grid1_pos h3 {\r\n    font-size: 1em;\r\n    letter-spacing: 2px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    color: #fff;\r\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.proj_gallery_grid1_pos p {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.section_1_gallery_grid:hover .proj_gallery_grid1_pos {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: scaleX(1);\r\n    -moz-transform: scaleX(1);\r\n    -o-transform: scaleX(1);\r\n    -ms-transform: scaleX(1);\r\n}\r\n\r\n\r\n.banner-bottom-wthree.gallery {\r\n    padding: 5em 0;\r\n}\r\n\r\n\r\np.quia {\r\n    font-size: 1.2em;\r\n    color: #140b05;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.proj_gallery_grid img {\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*-- //gallery --*/\r\n\r\n\r\n/* \r\n.experience {\r\n    background: url(\"../images/exp.jpg\") no-repeat 0px 0px;\r\n    background-size: cover;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    -ms-background-size: cover;\r\n    padding: 2em 0;\r\n} */\r\n\r\n\r\n/* end projects  */\r\n\r\n\r\n.progress-bar {\r\n    background-color: #08ADC3;\r\n}\r\n\r\n\r\n.btn-primary\r\n{\r\n    color: #fff;\r\n    background-color: #08ADC3;\r\n    border-color: #08ADC3;\r\n}\r\n\r\n\r\n.btn-primary:hover{\r\n    color: #fff;\r\n    background-color: #08ADC3;\r\n}\r\n\r\n\r\n/* our cliant  */\r\n\r\n\r\n.parallax {\r\n    /* The image used */\r\n    background-image: url('website-startups.jpg');\r\n    /* Full height */\r\n    height: 50%;\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n#slideshow {\r\n    margin: 80px auto;\r\n    position: relative;\r\n    width: 70%;\r\n    height: 140px;\r\n    padding: 10px;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\r\n    background-color: lightgray;\r\n    opacity: 0.8;\r\n    align-items: center;\r\n    border-radius: 15px 15px 15px 15px;\r\n}\r\n\r\n\r\n#slideshow>div {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 10px;\r\n    right: 10px;\r\n    bottom: 10px;\r\n}\r\n\r\n\r\n.slide-font {\r\n    color: #fff;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n#slideshow p {\r\n    color: black;\r\n    font-size: 15px;\r\n    margin-top: 1em;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#slideshow h1 {\r\n    color: #fff;\r\n}\r\n\r\n\r\n/* end our cliant  */\r\n\r\n\r\n/* about us  */\r\n\r\n\r\n.about {\r\n    font-size: 50px;\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.aboutp {\r\n    font-size: 20px;\r\n    margin: 10px;\r\n}\r\n\r\n\r\n/*-- stats --*/\r\n\r\n\r\n.stats-info {\r\n    background: url('we-do-bg.jpg') no-repeat center;\r\n    background-size: cover;\r\n    -webkit-background-size: cover;\r\n    -o-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -ms-background-size: cover;\r\n}\r\n\r\n\r\n.stats-info h3.heading,\r\np.center {\r\n    color: #fff;\r\n}\r\n\r\n\r\n.overlay {\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\np.text-li {\r\n    color: #ccc;\r\n    margin: 0 88px 10px;\r\n}\r\n\r\n\r\n.stats-grid-w3-agile .icon-right-w3ls {\r\n    background: #ff3c41;\r\n    width: 65px;\r\n    height: 65px;\r\n    line-height: 65px;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: auto;\r\n    border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n}\r\n\r\n\r\n.stats-grid-w3-agile span.fa {\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 65px;\r\n}\r\n\r\n\r\n.counter {\r\n    font-size: 40px;\r\n    line-height: 1.2;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    margin-left: 106px;\r\n    margin-top: 28px;\r\n}\r\n\r\n\r\n/* end about us  */\r\n\r\n\r\n/* --/contact-- */\r\n\r\n\r\n.map iframe {\r\n    border: none;\r\n    width: 100%;\r\n    min-height: 40em;\r\n}\r\n\r\n\r\n.map {\r\n    position: relative;\r\n    margin-bottom: 20em;\r\n}\r\n\r\n\r\n.contact-form {\r\n    background: #fff;\r\n    margin-top: -35em;\r\n    margin-bottom: 10rem;\r\n    width: 70%;\r\n    position: absolute;\r\n    margin-left: 14em;\r\n}\r\n\r\n\r\n.contact-form .form-control {\r\n    border-radius: 1rem;\r\n}\r\n\r\n\r\n.contact-image {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.contact-image img {\r\n    border-radius: 6rem;\r\n    width: 11%;\r\n    margin-top: -3%;\r\n    transform: rotate(29deg);\r\n}\r\n\r\n\r\n.contact-form form {\r\n    padding: 12%;\r\n}\r\n\r\n\r\n.contact-form form .row {\r\n    margin-bottom: -7%;\r\n}\r\n\r\n\r\n.contact-form h3 {\r\n    margin-bottom: 8%;\r\n    margin-top: -10%;\r\n    text-align: center;\r\n    color: #0062cc;\r\n}\r\n\r\n\r\n.contact-form .btnContact {\r\n    width: 20%;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    background: #08ADC3;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.btnContactSubmit {\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* --//contact-- */\r\n\r\n\r\n/* footer */\r\n\r\n\r\n.site-footer {\r\n    background-color: #26272b;\r\n    padding: 45px 0 20px;\r\n    font-size: 15px;\r\n    line-height: 24px;\r\n    color: #fff;\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n.site-footer hr {\r\n    border-top-color: #bbb;\r\n    opacity: 0.5\r\n}\r\n\r\n\r\n.site-footer hr.small {\r\n    margin: 20px 0\r\n}\r\n\r\n\r\n.site-footer h6 {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    margin-top: 5px;\r\n    letter-spacing: 2px\r\n}\r\n\r\n\r\n.site-footer a {\r\n    color: #737373;\r\n}\r\n\r\n\r\n.site-footer a:hover {\r\n    color: #3366cc;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.footer-links {\r\n    padding-left: 0;\r\n    list-style: none\r\n}\r\n\r\n\r\n.footer-links li {\r\n    display: block\r\n}\r\n\r\n\r\n.footer-links a {\r\n    color: #ffff;\r\n}\r\n\r\n\r\n.footer-links a:active,\r\n.footer-links a:focus,\r\n.footer-links a:hover {\r\n    color: #3366cc;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.footer-links.inline li {\r\n    display: inline-block\r\n}\r\n\r\n\r\n.site-footer .social-icons {\r\n    text-align: right\r\n}\r\n\r\n\r\n.site-footer .social-icons a {\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    margin-left: 6px;\r\n    margin-right: 0;\r\n    border-radius: 100%;\r\n    background-color: #33353d\r\n}\r\n\r\n\r\n.copyright-text {\r\n    margin: 0\r\n}\r\n\r\n\r\n@media (max-width:991px) {\r\n    .site-footer [class^=col-] {\r\n        margin-bottom: 30px\r\n    }\r\n}\r\n\r\n\r\n@media (max-width:768px){\r\n        .contact-form {\r\n            background: #fff;\r\n            margin-top: -2em;\r\n            margin-bottom: 3rem;\r\n            width: 70%;\r\n            position: inherit;\r\n            margin-left: 9em;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width:767px) {\r\n    .site-footer {\r\n        padding-bottom: 0\r\n    }\r\n    .site-footer .copyright-text,\r\n    .site-footer .social-icons {\r\n        text-align: center\r\n    }\r\n}\r\n\r\n\r\n.social-icons {\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none\r\n}\r\n\r\n\r\n.social-icons li {\r\n    display: inline-block;\r\n    margin-bottom: 4px\r\n}\r\n\r\n\r\n.social-icons li.title {\r\n    margin-right: 15px;\r\n    text-transform: uppercase;\r\n    color: #96a2b2;\r\n    font-weight: 700;\r\n    font-size: 13px\r\n}\r\n\r\n\r\n.social-icons a {\r\n    background-color: #eceeef;\r\n    color: #818a91;\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    line-height: 44px;\r\n    width: 44px;\r\n    height: 44px;\r\n    text-align: center;\r\n    margin-right: 8px;\r\n    border-radius: 100%;\r\n    transition: all .2s linear\r\n}\r\n\r\n\r\n.social-icons a:active,\r\n.social-icons a:focus,\r\n.social-icons a:hover {\r\n    color: #fff;\r\n    background-color: #29aafe\r\n}\r\n\r\n\r\n.social-icons.size-sm a {\r\n    line-height: 34px;\r\n    height: 34px;\r\n    width: 34px;\r\n    font-size: 14px\r\n}\r\n\r\n\r\n.social-icons a.facebook:hover {\r\n    background-color: #3b5998\r\n}\r\n\r\n\r\n.social-icons a.twitter:hover {\r\n    background-color: #00aced\r\n}\r\n\r\n\r\n.social-icons a.linkedin:hover {\r\n    background-color: #007bb6\r\n}\r\n\r\n\r\n.social-icons a.dribbble:hover {\r\n    background-color: #ea4c89\r\n}\r\n\r\n\r\n@media (max-width:767px) {\r\n    .social-icons li.title {\r\n        display: block;\r\n        margin-right: 0;\r\n        font-weight: 600\r\n    }\r\n}\r\n\r\n\r\n/* end footer  */\r\n\r\n\r\n/* responsive  */\r\n\r\n\r\n@media (max-width:500px) {\r\n    .col-xs-6 {\r\n        width: 42%;\r\n    }\r\n    .nav {\r\n        margin-top: 1em;\r\n        margin-left: 0em;\r\n        display: contents;\r\n    }\r\n    .navbar-default .navbar-collapse {\r\n        border-color: black;\r\n    }\r\n    .navbar-collapse.in {\r\n        overflow-y: initial;\r\n    }\r\n    .speak {\r\n        min-width: 20.7em;\r\n    }\r\n    .navbar-toggle {\r\n        margin-right: 0em;\r\n        margin-top: -10em;\r\n    }\r\n    .company {\r\n        font-size: 3em;\r\n    }\r\n    .services {\r\n        margin-top: 16em;\r\n    }\r\n    .scroling {\r\n        display: block;\r\n        overflow-y: scroll;\r\n        height: 480px;\r\n    }\r\n    .scroling::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n    .contact-form {\r\n        background: #fff;\r\n        margin-top: -2em;\r\n        margin-bottom: 5%;\r\n        width: 90%;\r\n        position: absolute;\r\n        margin-left: 1em;\r\n    }\r\n    .box {\r\n        width: 100%;\r\n        height: 500px;\r\n        margin: 2em;\r\n        margin-top: 10px;\r\n    }\r\n    .footer {\r\n        margin-top: 1em\r\n    }\r\n    #slideshow {\r\n        margin: 8px auto;\r\n        position: relative;\r\n        width: 100%;\r\n        height: 290px;\r\n    }\r\n   #service{\r\n       margin-top: 1em;\r\n   }\r\n}\r\n\r\n\r\n@media (max-width: 414px) {\r\n    .counter {\r\n        font-size: 30px;\r\n        margin-left: 6em;\r\n        margin-top: -2em;\r\n    }\r\n    .text-li {\r\n        margin-left: 13em;\r\n    }\r\n    .stats-grid-w3-agile .icon-right-w3ls {\r\n        margin-left: 5em;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width :736) {\r\n    .stats-grid-w3-agile .icon-right-w3ls {\r\n        width: 60px;\r\n        height: 60px;\r\n        line-height: 60px;\r\n    }\r\n    .stats-grid-w3-agile span.fa {\r\n        font-size: 25px;\r\n        line-height: 60px;\r\n    }\r\n    .counter {\r\n        font-size: 34px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .navbar-collapse.in {\r\n        overflow-y: initial;\r\n    }\r\n    .navbar-default .navbar-collapse,\r\n    .navbar-default .navbar-form {\r\n        border-color: black;\r\n        margin-bottom: 12em;\r\n    }\r\n    .map {\r\n        margin-bottom: 0em;\r\n    }\r\n    .map iframe {\r\n        border: none;\r\n        width: 100%;\r\n        min-height: 18em;\r\n        margin-bottom: 1em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2ZpcnN0cGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBLGtCQUFrQjs7O0FBRWxCO0lBQ0ksc0NBQStDO0lBQy9DLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxzQkFBc0I7OztBQUd0QixnQkFBZ0I7OztBQUVoQjtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7OztBQUdBOzs7R0FHRzs7O0FBRUg7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0FBRUE7Ozs7SUFJSSxjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOzs7QUFFQTs7OztJQUlJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7Ozs7SUFJSSx5QkFBeUI7QUFDN0I7OztBQUVBOzs7O0lBSUkseUJBQXlCO0FBQzdCOzs7QUFFQTs7OztJQUlJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsV0FBVztBQUNmOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLGtDQUFrQztBQUN0Qzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFD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WCxhQUFhO1FBQ2IsV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtJQUNqQjtHQUNEO09BQ0ksZUFBZTtHQUNuQjtBQUNIOzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7O1FBRUksbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9maXJzdHBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuXHJcbi8qIGhlYWRlciBpbWFnZSAgKi9cclxuXHJcbi5maXJzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZS9oZWFkZXItYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi8qIGVuZCBoZWFkZXIgaW1hZ2UgICovXHJcblxyXG5cclxuLyogbmF2aWdhdGlvbiAgKi9cclxuXHJcbi5uYXYge1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbn1cclxuXHJcblxyXG4vKiAubmF2IC5hY3RpdmUgc3BhbiB7XHJcbmJhY2tncm91bmQ6ICNDRUREM0U7XHJcbmNvbG9yOiBhcXVhO1xyXG59ICovXHJcblxyXG4ubmF2YmFyLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnNwZWFrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMi43ZW07XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3BlYWsgc3BhbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuLnNwZWFrOmFmdGVyLFxyXG4uc3BlYWs6YmVmb3JlLFxyXG4uc3BlYWsgc3BhbjphZnRlcixcclxuLnNwZWFrIHNwYW46YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4ub25lOmJlZm9yZSxcclxuLm9uZTphZnRlcixcclxuLm9uZSBzcGFuOmJlZm9yZSxcclxuLm9uZSBzcGFuOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUREM0U7XHJcbn1cclxuXHJcbi50d286YmVmb3JlLFxyXG4udHdvOmFmdGVyLFxyXG4udHdvIHNwYW46YmVmb3JlLFxyXG4udHdvIHNwYW46YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyNzEzMjtcclxufVxyXG5cclxuLnRocmVlOmJlZm9yZSxcclxuLnRocmVlOmFmdGVyLFxyXG4udGhyZWUgc3BhbjpiZWZvcmUsXHJcbi50aHJlZSBzcGFuOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NUMzRTk7XHJcbn1cclxuXHJcbi5mb3VyOmJlZm9yZSxcclxuLmZvdXI6YWZ0ZXIsXHJcbi5mb3VyIHNwYW46YmVmb3JlLFxyXG4uZm91ciBzcGFuOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREJFMkE7XHJcbn1cclxuXHJcbi5zcGVhazphZnRlcixcclxuLnNwZWFrOmJlZm9yZSxcclxuLnNwZWFrIHNwYW46YmVmb3JlLFxyXG4uc3BlYWsgc3BhbjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNwZWFrOmFmdGVyLFxyXG4uc3BlYWs6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogLTZweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG59XHJcblxyXG4uc3BlYWs6YWZ0ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAzOXB4O1xyXG59XHJcblxyXG4uc3BlYWs6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiAtMnB4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbn1cclxuXHJcbi5zcGVhayBzcGFuOmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgYm90dG9tOiAtMnB4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MsIGJvdHRvbSAuM3M7XHJcbn1cclxuXHJcbi5zcGVhayBzcGFuOmFmdGVyIHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBib3R0b206IC02cHg7XHJcbiAgICByaWdodDogOHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MsIHJpZ2h0IC4zcywgd2lkdGggLjNzO1xyXG59XHJcblxyXG4uc3BlYWsuYWN0aXZlIHNwYW46YmVmb3JlIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvdHRvbTogLTI0cHg7XHJcbn1cclxuXHJcbi5zcGVhay5hY3RpdmUgc3BhbjphZnRlciB7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbn1cclxuXHJcbi5zcGVhay5hY3RpdmUsXHJcbi5zcGVhay5hY3RpdmUge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbi8qIGVuZCBuYXZpZ2F0aW9uICAqL1xyXG5cclxuXHJcbi8qIHNlY29uZCBwYXJ0ICAqL1xyXG5cclxuLmNvbXBhbnkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLmZvbnQtbWFpbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4QURDMztcclxufVxyXG5cclxuLmJ1dHRvbjE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4QURDMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIGVuZCBzZWNvbmQgcGFydCAgKi9cclxuXHJcblxyXG4vKi0tIHNlcnZpY2VzIC0tKi9cclxuXHJcbi5tYi02MCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4QURDMztcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZlxyXG59XHJcblxyXG4ub3VyLXNlcnZpY2VzLWltZyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm91ci1zZXJ2aWNlcy1pbWcgc3Bhbi5mYSB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjMDhBREMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLm91ci1zZXJ2aWNlcy10ZXh0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtdGV4dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMjhweCAwIDI1cHg7XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtdGV4dCBoNCB7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ub3VyLXNlcnZpY2VzLXRleHQgaDQ6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDhBREMzIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLm91ci1zZXJ2aWNlcy13cmFwcGVyOmhvdmVyIC5zZXJ2aWNlcy1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4ub3VyLXNlcnZpY2VzLXRleHQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2VydmljZXMgcCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLnNlcnZpY2VzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcblxyXG4vKi0tIC8vc2VydmljZXMtLSAqL1xyXG5cclxuXHJcbi8qIHNlcnZpY2UgKi9cclxuXHJcbi5iYW4tYm90dG9tLXczbCB7XHJcbiAgICBwYWRkaW5nOiA1ZW0gMDtcclxufVxyXG5cclxuLmJhbi1ib3R0b20xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMiVcclxufVxyXG5cclxuLmJhbi1ib3R0b20yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJVxyXG59XHJcblxyXG4uYmFuLWltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjFlbTtcclxufVxyXG5cclxuLmJhbi10b3Age1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhbi10b3AgaW1nIHtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJhbi10b3A6aG92ZXIgaW1nIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7XHJcbn1cclxuXHJcbi5iYW4tdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTMsIDg5LCAxNzUsIDAuNzIpO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uYmFuLXRleHQxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMywgODksIDE3NSwgMC43Mik7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5iYW4tdGV4dCBoNCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFuLXRleHQxIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iYW4tdGV4dDIgaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFuLXRleHQyIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbn1cclxuXHJcblxyXG4vKiBTd2VlcCBUbyBUb3AgKi9cclxuXHJcbi5odnItc3dlZXAtdG8tdG9wIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5odnItc3dlZXAtdG8tdG9wOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjE5RTFGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDYwJTtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDYwJTtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5cclxuLmh2ci1zd2VlcC10by10b3A6aG92ZXIsXHJcbi5odnItc3dlZXAtdG8tdG9wOmZvY3VzLFxyXG4uaHZyLXN3ZWVwLXRvLXRvcDphY3RpdmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaHZyLXN3ZWVwLXRvLXRvcDpob3ZlcjpiZWZvcmUsXHJcbi5odnItc3dlZXAtdG8tdG9wOmZvY3VzOmJlZm9yZSxcclxuLmh2ci1zd2VlcC10by10b3A6YWN0aXZlOmJlZm9yZSxcclxuLnNlcnZpY2VzLWdyaWQ6aG92ZXIgLmh2ci1zd2VlcC10by10b3A6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxufVxyXG5cclxuLmJhbi10ZXh0MiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0JTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIGJhY2tncm91bmQ6ICMxNTY1QzA7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTglO1xyXG59XHJcblxyXG5oMi50aXR0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBjb2xvcjogIzE1NjVDMDtcclxufVxyXG5cclxuLm5ldy1hcnJpdmFscy13M2FnaWxlIHtcclxuICAgIHBhZGRpbmc6IDVlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI0Y5RjhGODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFycml2YWxzLWdyaWRzIHtcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxufVxyXG5cclxuLmdyaWQtYXJyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTI7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHBhZGRpbmc6IDBlbTtcclxufVxyXG5cclxuLmdyaWQtYXJyIC5ncmlkLWFycml2YWwgZmlndXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC1hcnIgLmdyaWQtYXJyaXZhbCBmaWd1cmU6aG92ZXIgLmdyaWQtaW1nKy5ncmlkLWltZyB7XHJcbiAgICByaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtYXJyIC5ncmlkLWFycml2YWwgZmlndXJlPmEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmdyaWQtYXJyIC5ncmlkLWFycml2YWwgZmlndXJlPmEgLmdyaWQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aWxsLWNoYW5nZTogcmlnaHQ7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcblxyXG4uZ3JpZC1hcnIgLmdyaWQtYXJyaXZhbCBmaWd1cmU+YSAuZ3JpZC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC1hcnIgLmdyaWQtYXJyaXZhbCBmaWd1cmU+YSAuZ3JpZC1pbWcrLmdyaWQtaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiByaWdodCAwLjdzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjE3NSwgMSksIG9wYWNpdHkgMC43cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC4xNzUsIDEpO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogcmlnaHQgMC43cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC4xNzUsIDEpLCBvcGFjaXR5IDAuN3MgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMTc1LCAxKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogcmlnaHQgMC43cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC4xNzUsIDEpLCBvcGFjaXR5IDAuN3MgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMTc1LCAxKTtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuN3MgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMTc1LCAxKSwgb3BhY2l0eSAwLjdzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjE3NSwgMSk7XHJcbn1cclxuXHJcbi5ncmlkLWFyciAuZ3JpZC1hcnJpdmFsIGZpZ3VyZT5hIC5ncmlkLWltZysuZ3JpZC1pbWcgaW1nIHtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxufVxyXG5cclxuLmdyaWQtcHJvZHVjdCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi53b21lbiBoNiB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgbWFyZ2luOiAwLjRlbSAwO1xyXG59XHJcblxyXG4ud29tZW4gaDYgYSB7XHJcbiAgICBjb2xvcjogIzE1NjVDMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLndvbWVuIHAge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIG1hcmdpbjogMC45ZW0gMDtcclxufVxyXG5cclxuZW0uaXRlbV9wcmljZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbnNwYW4uc2l6ZSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG4vKiBlbmQgc2VydmljZSAgKi9cclxuXHJcblxyXG4vKiBwcm9qZWN0cyAgKi9cclxuXHJcbi5zY3JvbGluZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNTYwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGluZzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qLS0gZ2FsbGVyeSAtLSovXHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uXzFfZ2FsbGVyeV9ncmlkIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLnczX3NlY3Rpb25fMV9nYWxsZXJ5X2dyaWQge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uXzFfZ2FsbGVyeV9ncmlkMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2YzO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4ucHJval9nYWxsZXJ5X2dyaWQxX3BvcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMwNjA1O1xyXG4gICAgYm90dG9tOiAyM3B4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcclxufVxyXG5cclxuLnByb2pfZ2FsbGVyeV9ncmlkMV9wb3MgaDMge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnByb2pfZ2FsbGVyeV9ncmlkMV9wb3MgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uXzFfZ2FsbGVyeV9ncmlkOmhvdmVyIC5wcm9qX2dhbGxlcnlfZ3JpZDFfcG9zIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcblxyXG4uYmFubmVyLWJvdHRvbS13dGhyZWUuZ2FsbGVyeSB7XHJcbiAgICBwYWRkaW5nOiA1ZW0gMDtcclxufVxyXG5cclxucC5xdWlhIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogIzE0MGIwNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnByb2pfZ2FsbGVyeV9ncmlkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qLS0gLy9nYWxsZXJ5IC0tKi9cclxuXHJcblxyXG4vKiBcclxuLmV4cGVyaWVuY2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL2V4cC5qcGdcIikgbm8tcmVwZWF0IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMmVtIDA7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBlbmQgcHJvamVjdHMgICovXHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOEFEQzM7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeVxyXG57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOEFEQzM7XHJcbiAgICBib3JkZXItY29sb3I6ICMwOEFEQzM7XHJcbn1cclxuLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhBREMzO1xyXG59XHJcbi8qIG91ciBjbGlhbnQgICovXHJcblxyXG4ucGFyYWxsYXgge1xyXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2Uvd2Vic2l0ZS1zdGFydHVwcy5qcGcnKTtcclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jc2xpZGVzaG93IHtcclxuICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbiNzbGlkZXNob3c+ZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNsaWRlLWZvbnQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jc2xpZGVzaG93IHAge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc2xpZGVzaG93IGgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogZW5kIG91ciBjbGlhbnQgICovXHJcblxyXG5cclxuLyogYWJvdXQgdXMgICovXHJcblxyXG4uYWJvdXQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hYm91dHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyotLSBzdGF0cyAtLSovXHJcblxyXG4uc3RhdHMtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2Uvd2UtZG8tYmcuanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbXMtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnN0YXRzLWluZm8gaDMuaGVhZGluZyxcclxucC5jZW50ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxucC50ZXh0LWxpIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgbWFyZ2luOiAwIDg4cHggMTBweDtcclxufVxyXG5cclxuLnN0YXRzLWdyaWQtdzMtYWdpbGUgLmljb24tcmlnaHQtdzNscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYzYzQxO1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zdGF0cy1ncmlkLXczLWFnaWxlIHNwYW4uZmEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNjVweDtcclxufVxyXG5cclxuLmNvdW50ZXIge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDZweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuXHJcblxyXG4vKiBlbmQgYWJvdXQgdXMgICovXHJcblxyXG5cclxuLyogLS0vY29udGFjdC0tICovXHJcblxyXG4ubWFwIGlmcmFtZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwZW07XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogLTM1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWltYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtaW1hZ2UgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XHJcbiAgICB3aWR0aDogMTElO1xyXG4gICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjlkZWcpO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMTIlO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gLnJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNyU7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDYyY2M7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLmJ0bkNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgYmFja2dyb3VuZDogIzA4QURDMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bkNvbnRhY3RTdWJtaXQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogLS0vL2NvbnRhY3QtLSAqL1xyXG5cclxuXHJcbi8qIGZvb3RlciAqL1xyXG5cclxuLnNpdGUtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3MmI7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciBociB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYmJiO1xyXG4gICAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciBoci5zbWFsbCB7XHJcbiAgICBtYXJnaW46IDIwcHggMFxyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgaDYge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweFxyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgYSB7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMzY2Y2M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZVxyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYTphY3RpdmUsXHJcbi5mb290ZXItbGlua3MgYTpmb2N1cyxcclxuLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzM2NmNjO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzLmlubGluZSBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTNkXHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtdGV4dCB7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICAgIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDllbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5zaXRlLWZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBcclxuICAgIH1cclxuICAgIC5zaXRlLWZvb3RlciAuY29weXJpZ2h0LXRleHQsXHJcbiAgICAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHhcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBsaS50aXRsZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM5NmEyYjI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmO1xyXG4gICAgY29sb3I6ICM4MThhOTE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXJcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBhOmFjdGl2ZSxcclxuLnNvY2lhbC1pY29ucyBhOmZvY3VzLFxyXG4uc29jaWFsLWljb25zIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhYWZlXHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMuc2l6ZS1zbSBhIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBhLmZhY2Vib29rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OThcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBhLnR3aXR0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZFxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGEubGlua2VkaW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JiNlxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGEuZHJpYmJibGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNGM4OVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLnNvY2lhbC1pY29ucyBsaS50aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIGVuZCBmb290ZXIgICovXHJcblxyXG5cclxuLyogcmVzcG9uc2l2ZSAgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KSB7XHJcbiAgICAuY29sLXhzLTYge1xyXG4gICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICB9XHJcbiAgICAubmF2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIH1cclxuICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5pbiB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaW5pdGlhbDtcclxuICAgIH1cclxuICAgIC5zcGVhayB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMC43ZW07XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwZW07XHJcbiAgICB9XHJcbiAgICAuY29tcGFueSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2ZW07XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgfVxyXG4gICAgLnNjcm9saW5nOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtXHJcbiAgICB9XHJcbiAgICAjc2xpZGVzaG93IHtcclxuICAgICAgICBtYXJnaW46IDhweCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgfVxyXG4gICAjc2VydmljZXtcclxuICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAgIC5jb3VudGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHQtbGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM2VtO1xyXG4gICAgfVxyXG4gICAgLnN0YXRzLWdyaWQtdzMtYWdpbGUgLmljb24tcmlnaHQtdzNscyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGggOjczNikge1xyXG4gICAgLnN0YXRzLWdyaWQtdzMtYWdpbGUgLmljb24tcmlnaHQtdzNscyB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnN0YXRzLWdyaWQtdzMtYWdpbGUgc3Bhbi5mYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvdW50ZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLmluIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItY29sbGFwc2UsXHJcbiAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1mb3JtIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyZW07XHJcbiAgICB9XHJcbiAgICAubWFwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbiAgICB9XHJcbiAgICAubWFwIGlmcmFtZSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/porfolio.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/porfolio.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9wb3Jmb2xpby5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/css/career.css":
/*!***********************************!*\
  !*** ./src/assets/css/career.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./career.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/career.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/css/firstpage.css":
/*!**************************************!*\
  !*** ./src/assets/css/firstpage.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./firstpage.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/firstpage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/css/porfolio.css":
/*!*************************************!*\
  !*** ./src/assets/css/porfolio.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./porfolio.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/porfolio.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!***********************************************************************************************************************!*\
  !*** multi ./src/styles.css ./src/assets/css/firstpage.css ./src/assets/css/porfolio.css ./src/assets/css/career.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Ugam\Desktop\angular\gloryAutotechWebsite\GATWebsite\src\styles.css */"./src/styles.css");
__webpack_require__(/*! C:\Users\Ugam\Desktop\angular\gloryAutotechWebsite\GATWebsite\src\assets\css\firstpage.css */"./src/assets/css/firstpage.css");
__webpack_require__(/*! C:\Users\Ugam\Desktop\angular\gloryAutotechWebsite\GATWebsite\src\assets\css\porfolio.css */"./src/assets/css/porfolio.css");
module.exports = __webpack_require__(/*! C:\Users\Ugam\Desktop\angular\gloryAutotechWebsite\GATWebsite\src\assets\css\career.css */"./src/assets/css/career.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map