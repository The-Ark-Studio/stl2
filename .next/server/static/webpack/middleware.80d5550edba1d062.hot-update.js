"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\nfunction middleware(request) {\n    const pathname = request.nextUrl.pathname;\n    const locale = pathname.split(\"/\")[1];\n    console.log(`Request pathname: ${pathname}`);\n    console.log(`Detected locale: ${locale}`);\n    if (![\n        \"en\",\n        \"ko\"\n    ].includes(locale)) {\n        const url = request.nextUrl.clone();\n        url.pathname = `/en${pathname}`; // Chuyển hướng đến ngôn ngữ mặc định nếu không có ngôn ngữ trong URL\n        return NextResponse.redirect(url);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsV0FBV0MsT0FBb0I7SUFDM0MsTUFBTUMsV0FBV0QsUUFBUUUsT0FBTyxDQUFDRCxRQUFRO0lBQ3pDLE1BQU1FLFNBQVNGLFNBQVNHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUVyQ0MsUUFBUUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLFNBQVMsQ0FBQztJQUMzQ0ksUUFBUUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUVILE9BQU8sQ0FBQztJQUV4QyxJQUFJLENBQUM7UUFBQztRQUFNO0tBQUssQ0FBQ0ksUUFBUSxDQUFDSixTQUFTO1FBQ2hDLE1BQU1LLE1BQU1SLFFBQVFFLE9BQU8sQ0FBQ08sS0FBSztRQUNqQ0QsSUFBSVAsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFQSxTQUFTLENBQUMsRUFBRSxxRUFBcUU7UUFDdEcsT0FBT1MsYUFBYUMsUUFBUSxDQUFDSDtJQUNqQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lO1xuICAgIGNvbnN0IGxvY2FsZSA9IHBhdGhuYW1lLnNwbGl0KCcvJylbMV07XG5cbiAgICBjb25zb2xlLmxvZyhgUmVxdWVzdCBwYXRobmFtZTogJHtwYXRobmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhgRGV0ZWN0ZWQgbG9jYWxlOiAke2xvY2FsZX1gKTtcblxuICAgIGlmICghWydlbicsICdrbyddLmluY2x1ZGVzKGxvY2FsZSkpIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVxdWVzdC5uZXh0VXJsLmNsb25lKCk7XG4gICAgICAgIHVybC5wYXRobmFtZSA9IGAvZW4ke3BhdGhuYW1lfWA7IC8vIENodXnhu4NuIGjGsOG7m25nIMSR4bq/biBuZ8O0biBuZ+G7ryBt4bq3YyDEkeG7i25oIG7hur91IGtow7RuZyBjw7MgbmfDtG4gbmfhu68gdHJvbmcgVVJMXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QodXJsKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInJlcXVlc3QiLCJwYXRobmFtZSIsIm5leHRVcmwiLCJsb2NhbGUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInVybCIsImNsb25lIiwiTmV4dFJlc3BvbnNlIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});