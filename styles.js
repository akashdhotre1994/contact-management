(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".wrapper{\r\n    height: 100vh;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color:white;\r\n  \r\n  }\r\n  .form-wrapper\r\n  {\r\n    position: absolute;\r\n    width: 90%;\r\n    height: 90%;\r\n    margin-top: 10px;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px 40px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 10px 50px #555;\r\n    background-color: #ffffff;\r\n  \r\n  }\r\n  .form-wrapper12\r\n  {\r\n    height:500px;\r\n    width: 100%;\r\n\r\n    margin-left: 100px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px 40px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 10px 50px #555;\r\n    background-color: #ffffff;\r\n  \r\n  }\r\n  .highlight{\r\n    background:rgb(206, 203, 203);\r\n    color:black;\r\n  }\r\n  .submitForm\r\n{\r\n\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n}\r\n  .wrapperEdit{\r\n  height: 80vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color:white;\r\n\r\n}\r\n  .form-wrapperEdit\r\n{\r\n  position: absolute;\r\n  width: 90%;\r\n  height: 80%;\r\n  margin-top: 10px;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px 40px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 10px 50px #555;\r\n  background-color: #ffffff;\r\n\r\n}\r\n  .form-wrapper22\r\n  {\r\n      width: 100%;\r\n      height:500px;\r\n    margin-left: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px 40px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 10px 50px #555;\r\n    background-color: #ffffff;\r\n  \r\n  }\r\n  .form{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  \r\n  }\r\n  .form-wrapper h1\r\n  {\r\n    text-align: center;\r\n    width: 100%;\r\n    color: #111;\r\n    font-weight: lighter;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\r\n  \r\n  }\r\n  .form-wrapperEdit h1\r\n  {\r\n    text-align: center;\r\n    width: 100%;\r\n    color: #111;\r\n    font-weight: lighter;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\r\n  \r\n  }\r\n  .form-wrapper label{\r\n   font-size: 0.8em;\r\n   margin-bottom: 0.25em;\r\n   color: #222;\r\n   font-weight: lighter;\r\n  }\r\n  .form-wrapperEdit label{\r\n    font-size: 0.8em;\r\n    margin-bottom: 0.25em;\r\n    color: #222;\r\n    font-weight: lighter;\r\n   }\r\n  .form-wrapper input {\r\n    padding: 10px 75px;\r\n    border-radius: 10px;\r\n    outline: none;\r\n    border: 1px solid #cfcfcf;\r\n  }\r\n  .form-wrapperEdit input {\r\n    padding: 10px 75px;\r\n    border-radius: 10px;\r\n    outline: none;\r\n    border: 1px solid #cfcfcf;\r\n  }\r\n  .form-wrapper input::-webkit-input-placeholder\r\n  {\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: #999;\r\n  }\r\n  .form-wrapper input::-ms-input-placeholder\r\n  {\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: #999;\r\n  }\r\n  .form-wrapper input::placeholder\r\n  {\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: #999;\r\n  }\r\n  .form-wrapperEdit input::-webkit-input-placeholder\r\n  {\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: #999;\r\n  }\r\n  .form-wrapperEdit input::-ms-input-placeholder\r\n  {\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: #999;\r\n  }\r\n  .form-wrapperEdit input::placeholder\r\n  {\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: #999;\r\n  }\r\n  .btn{\r\n    margin: 10px;\r\n    background-color: green;\r\n    color: white;\r\n    padding: 16px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin-bottom:10px;\r\n    opacity: 0.8;\r\n  }\r\n  @media(max-width: 767px){\r\n   \r\n    .form-wrapper \r\n    {\r\n        width: 95%;\r\n        height: 100%;\r\n    }\r\n    .form-wrapper12 \r\n    {\r\n        width: 50%;\r\n        height: 390px;\r\n        margin-top: 5px;\r\n    margin-left: 0px;\r\n\r\n    }\r\n    .form-wrapper22 \r\n    {\r\n        width: 50%;\r\n        height: 390px;\r\n        margin-top: 5px;\r\n        margin-left: 0px;\r\n\r\n\r\n    }\r\n  }\r\n  a.btn:hover {\r\n    -webkit-transform: scale(1.1);\r\n    -moz-transform: scale(1.1);\r\n    -o-transform: scale(1.1);\r\n}\r\n  a.btn {\r\n    -webkit-transform: scale(0.8);\r\n    -moz-transform: scale(0.8);\r\n    -o-transform: scale(0.8);\r\n    -webkit-transition-duration: 0.5s;\r\n    -moz-transition-duration: 0.5s;\r\n    -o-transition-duration: 0.5s;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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O1FBQ1gsY0FBYztRQUNkLGdCQUFnQjtJQUNwQixpQkFBaUI7O0tBRWhCO0lBQ0Q7O1FBRUksV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsaUJBQWlCOzs7S0FHcEI7R0FDRjtFQUlEO0lBQ0UsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7Q0FDNUI7RUFDRDtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsNkJBQTZCO0NBQ2hDIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgXHJcbiAgfVxyXG4gIC5mb3JtLXdyYXBwZXJcclxuICB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcbiAgLmZvcm0td3JhcHBlcjEyXHJcbiAge1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIC5oaWdobGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyMDYsIDIwMywgMjAzKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdEZvcm1cclxue1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuLndyYXBwZXJFZGl0e1xyXG4gIGhlaWdodDogODB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cclxufVxyXG4uZm9ybS13cmFwcGVyRWRpdFxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggIzU1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG5cclxuXHJcbiAgLmZvcm0td3JhcHBlcjIyXHJcbiAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIC5mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9ybS13cmFwcGVyIGgxXHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZlxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmZvcm0td3JhcHBlckVkaXQgaDFcclxuICB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXdyYXBwZXIgbGFiZWx7XHJcbiAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcclxuICAgY29sb3I6ICMyMjI7XHJcbiAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuICAuZm9ybS13cmFwcGVyRWRpdCBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICB9XHJcbiAgLmZvcm0td3JhcHBlciBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XHJcbiAgfVxyXG4gIC5mb3JtLXdyYXBwZXJFZGl0IGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0td3JhcHBlciBpbnB1dDo6cGxhY2Vob2xkZXJcclxuICB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiAgLmZvcm0td3JhcHBlckVkaXQgaW5wdXQ6OnBsYWNlaG9sZGVyXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiBcclxuICAuYnRue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgXHJcbiAgICAuZm9ybS13cmFwcGVyIFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0td3JhcHBlcjEyIFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5mb3JtLXdyYXBwZXIyMiBcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMzkwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcblxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBhLmJ0bjpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbmEuYnRuIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4iXX0= */", '', '']]

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
	    result = options.transform(obj.css);

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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

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

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\contactManagement\contactManagement\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map