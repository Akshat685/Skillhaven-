/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/graphql/route";
exports.ids = ["app/api/graphql/route"];
exports.modules = {

/***/ "(rsc)/./app/api/graphql/route.ts":
/*!**********************************!*\
  !*** ./app/api/graphql/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/server */ \"(rsc)/./node_modules/@apollo/server/dist/esm/index.js\");\n/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @as-integrations/next */ \"(rsc)/./node_modules/@as-integrations/next/dist/index.js\");\n/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/schema */ \"(rsc)/./graphql/schema/index.ts\");\n/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/resolvers */ \"(rsc)/./graphql/resolvers/index.ts\");\n\n\n\n\nconst server = new _apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_2__.typeDefs,\n    resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_3__.resolvers\n});\nconst handler = (0,_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__.startServerAndCreateNextHandler)(server);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dyYXBocWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUMwQjtBQUM1QjtBQUNJO0FBRWhELE1BQU1JLFNBQVMsSUFBSUosd0RBQVlBLENBQUM7SUFBRUUsUUFBUUEsdURBQUFBO0lBQUVDLFNBQVNBLDJEQUFBQTtBQUFDO0FBRXRELE1BQU1FLFVBQVVKLHNGQUErQkEsQ0FBQ0c7QUFDTCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxha3NoYVxcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFxTa2lsbGhhdmVuLVxcYXBwXFxhcGlcXGdyYXBocWxcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ0BhcG9sbG8vc2VydmVyJztcclxuaW1wb3J0IHsgc3RhcnRTZXJ2ZXJBbmRDcmVhdGVOZXh0SGFuZGxlciB9IGZyb20gJ0Bhcy1pbnRlZ3JhdGlvbnMvbmV4dCc7XHJcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnQC9ncmFwaHFsL3NjaGVtYSc7XHJcbmltcG9ydCB7IHJlc29sdmVycyB9IGZyb20gJ0AvZ3JhcGhxbC9yZXNvbHZlcnMnO1xyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gc3RhcnRTZXJ2ZXJBbmRDcmVhdGVOZXh0SGFuZGxlcihzZXJ2ZXIpO1xyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJBcG9sbG9TZXJ2ZXIiLCJzdGFydFNlcnZlckFuZENyZWF0ZU5leHRIYW5kbGVyIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJzZXJ2ZXIiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/graphql/route.ts\n");

/***/ }),

/***/ "(rsc)/./graphql/resolvers/index.ts":
/*!************************************!*\
  !*** ./graphql/resolvers/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolvers: () => (/* binding */ resolvers)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst resolvers = {\n    Query: {\n        courses: async ()=>prisma.course.findMany({\n                include: {\n                    modules: {\n                        include: {\n                            lessons: true\n                        }\n                    }\n                }\n            })\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ncmFwaHFsL3Jlc29sdmVycy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsTUFBTUUsWUFBWTtJQUN2QkMsT0FBTztRQUNMQyxTQUFTLFVBQVlILE9BQU9JLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO2dCQUMxQ0MsU0FBUztvQkFDUEMsU0FBUzt3QkFDUEQsU0FBUzs0QkFBRUUsU0FBUzt3QkFBSztvQkFDM0I7Z0JBQ0Y7WUFDRjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxha3NoYVxcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFxTa2lsbGhhdmVuLVxcZ3JhcGhxbFxccmVzb2x2ZXJzXFxpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgY291cnNlczogYXN5bmMgKCkgPT4gcHJpc21hLmNvdXJzZS5maW5kTWFueSh7XHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICBpbmNsdWRlOiB7IGxlc3NvbnM6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlc29sdmVycyIsIlF1ZXJ5IiwiY291cnNlcyIsImNvdXJzZSIsImZpbmRNYW55IiwiaW5jbHVkZSIsIm1vZHVsZXMiLCJsZXNzb25zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./graphql/resolvers/index.ts\n");

/***/ }),

/***/ "(rsc)/./graphql/schema/index.ts":
/*!*********************************!*\
  !*** ./graphql/schema/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   typeDefs: () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"(rsc)/./node_modules/graphql-tag/lib/index.js\");\n\nconst typeDefs = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql)`\r\n  type Course {\r\n    id: ID!\r\n    title: String!\r\n    modules: [Module!]!\r\n  }\r\n\r\n  type Module {\r\n    id: ID!\r\n    title: String!\r\n    lessons: [Lesson!]!\r\n  }\r\n\r\n  type Lesson {\r\n    id: ID!\r\n    title: String!\r\n    slug: String!\r\n  }\r\n\r\n  type Query {\r\n    courses: [Course!]!\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ncmFwaHFsL3NjaGVtYS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUUzQixNQUFNQyxXQUFXRCxnREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0I1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtzaGFcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcU2tpbGxoYXZlbi1cXGdyYXBocWxcXHNjaGVtYVxcaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIHR5cGUgQ291cnNlIHtcclxuICAgIGlkOiBJRCFcclxuICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICBtb2R1bGVzOiBbTW9kdWxlIV0hXHJcbiAgfVxyXG5cclxuICB0eXBlIE1vZHVsZSB7XHJcbiAgICBpZDogSUQhXHJcbiAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgbGVzc29uczogW0xlc3NvbiFdIVxyXG4gIH1cclxuXHJcbiAgdHlwZSBMZXNzb24ge1xyXG4gICAgaWQ6IElEIVxyXG4gICAgdGl0bGU6IFN0cmluZyFcclxuICAgIHNsdWc6IFN0cmluZyFcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgY291cnNlczogW0NvdXJzZSFdIVxyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbImdxbCIsInR5cGVEZWZzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./graphql/schema/index.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphql%2Froute&page=%2Fapi%2Fgraphql%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphql%2Froute.ts&appDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphql%2Froute&page=%2Fapi%2Fgraphql%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphql%2Froute.ts&appDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_aksha_OneDrive_Documents_GitHub_Skillhaven_app_api_graphql_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/graphql/route.ts */ \"(rsc)/./app/api/graphql/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/graphql/route\",\n        pathname: \"/api/graphql\",\n        filename: \"route\",\n        bundlePath: \"app/api/graphql/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Documents\\\\GitHub\\\\Skillhaven-\\\\app\\\\api\\\\graphql\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_aksha_OneDrive_Documents_GitHub_Skillhaven_app_api_graphql_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZncmFwaHFsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZncmFwaHFsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ3JhcGhxbCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNha3NoYSU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDR2l0SHViJTVDU2tpbGxoYXZlbi0lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2Frc2hhJTVDT25lRHJpdmUlNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNTa2lsbGhhdmVuLSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUM7QUFDcEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGFrc2hhXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcU2tpbGxoYXZlbi1cXFxcYXBwXFxcXGFwaVxcXFxncmFwaHFsXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ncmFwaHFsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ3JhcGhxbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ3JhcGhxbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGFrc2hhXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcU2tpbGxoYXZlbi1cXFxcYXBwXFxcXGFwaVxcXFxncmFwaHFsXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphql%2Froute&page=%2Fapi%2Fgraphql%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphql%2Froute.ts&appDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@apollo","vendor-chunks/lru-cache","vendor-chunks/graphql","vendor-chunks/tslib","vendor-chunks/@graphql-tools","vendor-chunks/uuid","vendor-chunks/sha.js","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/@protobufjs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/whatwg-url","vendor-chunks/whatwg-mimetype","vendor-chunks/negotiator","vendor-chunks/@as-integrations","vendor-chunks/retry","vendor-chunks/get-proto","vendor-chunks/tr46","vendor-chunks/inherits","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/node-fetch","vendor-chunks/available-typed-arrays","vendor-chunks/which-typed-array","vendor-chunks/webidl-conversions","vendor-chunks/typed-array-buffer","vendor-chunks/to-buffer","vendor-chunks/set-function-length","vendor-chunks/safe-buffer","vendor-chunks/possible-typed-array-names","vendor-chunks/node-abort-controller","vendor-chunks/loglevel","vendor-chunks/lodash.sortby","vendor-chunks/isarray","vendor-chunks/is-typed-array","vendor-chunks/is-callable","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-property-descriptors","vendor-chunks/graphql-tag","vendor-chunks/get-intrinsic","vendor-chunks/for-each","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/define-data-property","vendor-chunks/call-bound","vendor-chunks/call-bind","vendor-chunks/async-retry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphql%2Froute&page=%2Fapi%2Fgraphql%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphql%2Froute.ts&appDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();