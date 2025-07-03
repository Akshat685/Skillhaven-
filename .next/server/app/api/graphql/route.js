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

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n// app/api/auth/[...nextauth]/route.ts\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma),\n    session: {\n        strategy: \"database\"\n    },\n    pages: {\n        signIn: \"/\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUNnQjtBQUNFO0FBQ0U7QUFDcEI7QUFFL0IsTUFBTUksY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEosc0VBQWNBLENBQUM7WUFDYkssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7S0FDRDtJQUNEQyxTQUFTVix3RUFBYUEsQ0FBQ0MsK0NBQU1BO0lBQzdCVSxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtBQUNGLEVBQUU7QUFFRixNQUFNQyxVQUFVakIsZ0RBQVFBLENBQUNJO0FBQ2tCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGFrc2hhXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXFNraWxsaGF2ZW4tXFxhcHBcXGFwaVxcYXV0aFxcWy4uLm5leHRhdXRoXVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcclxuaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHaXRIdWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQhLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiZGF0YWJhc2VcIixcclxuICB9LFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46IFwiL1wiLCAvLyByZWRpcmVjdCB0byBob21lIG9yIGN1c3RvbSBwYWdlXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0SHViUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/graphql/route.ts":
/*!**********************************!*\
  !*** ./app/api/graphql/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/server */ \"(rsc)/./node_modules/@apollo/server/dist/esm/index.js\");\n/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @as-integrations/next */ \"(rsc)/./node_modules/@as-integrations/next/dist/index.js\");\n/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/schema */ \"(rsc)/./graphql/schema/index.ts\");\n/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/resolvers */ \"(rsc)/./graphql/resolvers/index.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n\n\nconst server = new _apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_2__.schema,\n    resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_3__.resolvers,\n    introspection: true\n});\nconst handler = (0,_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__.startServerAndCreateNextHandler)(server, {\n    context: async (req, res)=>{\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(req, res, _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_5__.authOptions);\n        return {\n            session,\n            req,\n            res\n        };\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dyYXBocWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QztBQUMwQjtBQUM5QjtBQUNNO0FBQ0g7QUFDb0I7QUFFakUsTUFBTU0sU0FBUyxJQUFJTix3REFBWUEsQ0FBQztJQUM5Qk8sVUFBVUwsbURBQU1BO0lBQ2hCQyxTQUFTQSwyREFBQUE7SUFDVEssZUFBZTtBQUNqQjtBQUVBLE1BQU1DLFVBQVVSLHNGQUErQkEsQ0FBQ0ssUUFBUTtJQUN0REksU0FBUyxPQUFPQyxLQUFLQztRQUNuQixNQUFNQyxVQUFVLE1BQU1ULDJEQUFnQkEsQ0FBQ08sS0FBS0MsS0FBS1AscUVBQVdBO1FBRTVELE9BQU87WUFDTFE7WUFDQUY7WUFDQUM7UUFDRjtJQUNGO0FBQ0Y7QUFFMkMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtzaGFcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcU2tpbGxoYXZlbi1cXGFwcFxcYXBpXFxncmFwaHFsXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiQGFwb2xsby9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgc3RhcnRTZXJ2ZXJBbmRDcmVhdGVOZXh0SGFuZGxlciB9IGZyb20gXCJAYXMtaW50ZWdyYXRpb25zL25leHRcIjtcclxuaW1wb3J0IHsgc2NoZW1hIH0gZnJvbSBcIkAvZ3JhcGhxbC9zY2hlbWFcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZXJzIH0gZnJvbSBcIkAvZ3JhcGhxbC9yZXNvbHZlcnNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XHJcbiAgdHlwZURlZnM6IHNjaGVtYSxcclxuICByZXNvbHZlcnMsXHJcbiAgaW50cm9zcGVjdGlvbjogdHJ1ZSwgLy8gRW5hYmxlIGZvciBkZXYgdG9vbHMgbGlrZSBBcG9sbG8gU3R1ZGlvXHJcbn0pO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IHN0YXJ0U2VydmVyQW5kQ3JlYXRlTmV4dEhhbmRsZXIoc2VydmVyLCB7XHJcbiAgY29udGV4dDogYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlc3Npb24sXHJcbiAgICAgIHJlcSxcclxuICAgICAgcmVzLFxyXG4gICAgfTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuIl0sIm5hbWVzIjpbIkFwb2xsb1NlcnZlciIsInN0YXJ0U2VydmVyQW5kQ3JlYXRlTmV4dEhhbmRsZXIiLCJzY2hlbWEiLCJyZXNvbHZlcnMiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJzZXJ2ZXIiLCJ0eXBlRGVmcyIsImludHJvc3BlY3Rpb24iLCJoYW5kbGVyIiwiY29udGV4dCIsInJlcSIsInJlcyIsInNlc3Npb24iLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/graphql/route.ts\n");

/***/ }),

/***/ "(rsc)/./graphql/resolvers/index.ts":
/*!************************************!*\
  !*** ./graphql/resolvers/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolvers: () => (/* binding */ resolvers)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\nconst resolvers = {\n    Query: {\n        courses: async ()=>_lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.course.findMany({\n                include: {\n                    modules: true\n                }\n            }),\n        course: async (_, { id })=>_lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.course.findUnique({\n                where: {\n                    id\n                },\n                include: {\n                    modules: true\n                }\n            }),\n        freelancers: async ()=>_lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.freelancerProfile.findMany(),\n        me: async (_, __, context)=>{\n            const session = context.session;\n            if (!session?.user?.email) return null;\n            return _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                where: {\n                    email: session.user.email\n                },\n                include: {\n                    freelancer: true,\n                    enrollments: {\n                        include: {\n                            course: true\n                        }\n                    },\n                    completedLessons: {\n                        include: {\n                            lesson: true\n                        }\n                    }\n                }\n            });\n        }\n    },\n    Mutation: {\n        enroll: async (_, { courseId }, context)=>{\n            const session = context.session;\n            if (!session?.user?.email) throw new Error(\"Not authenticated\");\n            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                where: {\n                    email: session.user.email\n                }\n            });\n            if (!user) throw new Error(\"User not found\");\n            return _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.enrollment.create({\n                data: {\n                    courseId,\n                    userId: user.id\n                }\n            });\n        },\n        completeLesson: async (_, { lessonId }, context)=>{\n            const session = context.session;\n            if (!session?.user?.email) throw new Error(\"Not authenticated\");\n            const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                where: {\n                    email: session.user.email\n                }\n            });\n            if (!user) throw new Error(\"User not found\");\n            return _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.completedLesson.create({\n                data: {\n                    lessonId,\n                    userId: user.id\n                }\n            });\n        }\n    },\n    Course: {\n        modules: (parent)=>_lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.module.findMany({\n                where: {\n                    courseId: parent.id\n                }\n            })\n    },\n    Module: {\n        lessons: (parent)=>_lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.lesson.findMany({\n                where: {\n                    moduleId: parent.id\n                }\n            })\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ncmFwaHFsL3Jlc29sdmVycy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUkvQixNQUFNQyxZQUFZO0lBQ3ZCQyxPQUFPO1FBQ0xDLFNBQVMsVUFBWUgsK0NBQU1BLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO2dCQUFFQyxTQUFTO29CQUFFQyxTQUFTO2dCQUFLO1lBQUU7UUFDekVILFFBQVEsT0FBT0ksR0FBUSxFQUFFQyxFQUFFLEVBQWtCLEdBQzNDVCwrQ0FBTUEsQ0FBQ0ksTUFBTSxDQUFDTSxVQUFVLENBQUM7Z0JBQUVDLE9BQU87b0JBQUVGO2dCQUFHO2dCQUFHSCxTQUFTO29CQUFFQyxTQUFTO2dCQUFLO1lBQUU7UUFDdkVLLGFBQWEsVUFBWVosK0NBQU1BLENBQUNhLGlCQUFpQixDQUFDUixRQUFRO1FBQzFEUyxJQUFJLE9BQU9OLEdBQVFPLElBQVNDO1lBQzFCLE1BQU1DLFVBQVVELFFBQVFDLE9BQU87WUFDL0IsSUFBSSxDQUFDQSxTQUFTQyxNQUFNQyxPQUFPLE9BQU87WUFFbEMsT0FBT25CLCtDQUFNQSxDQUFDa0IsSUFBSSxDQUFDUixVQUFVLENBQUM7Z0JBQzVCQyxPQUFPO29CQUFFUSxPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7Z0JBQUM7Z0JBQ25DYixTQUFTO29CQUNQYyxZQUFZO29CQUNaQyxhQUFhO3dCQUFFZixTQUFTOzRCQUFFRixRQUFRO3dCQUFLO29CQUFFO29CQUN6Q2tCLGtCQUFrQjt3QkFBRWhCLFNBQVM7NEJBQUVpQixRQUFRO3dCQUFLO29CQUFFO2dCQUNoRDtZQUNGO1FBQ0Y7SUFDRjtJQUVBQyxVQUFVO1FBQ1JDLFFBQVEsT0FBT2pCLEdBQVEsRUFBRWtCLFFBQVEsRUFBd0IsRUFBRVY7WUFDekQsTUFBTUMsVUFBVUQsUUFBUUMsT0FBTztZQUMvQixJQUFJLENBQUNBLFNBQVNDLE1BQU1DLE9BQU8sTUFBTSxJQUFJUSxNQUFNO1lBRTNDLE1BQU1ULE9BQU8sTUFBTWxCLCtDQUFNQSxDQUFDa0IsSUFBSSxDQUFDUixVQUFVLENBQUM7Z0JBQUVDLE9BQU87b0JBQUVRLE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztnQkFBQztZQUFFO1lBQ2pGLElBQUksQ0FBQ0QsTUFBTSxNQUFNLElBQUlTLE1BQU07WUFFM0IsT0FBTzNCLCtDQUFNQSxDQUFDNEIsVUFBVSxDQUFDQyxNQUFNLENBQUM7Z0JBQzlCQyxNQUFNO29CQUNKSjtvQkFDQUssUUFBUWIsS0FBS1QsRUFBRTtnQkFDakI7WUFDRjtRQUNGO1FBRUF1QixnQkFBZ0IsT0FBT3hCLEdBQVEsRUFBRXlCLFFBQVEsRUFBd0IsRUFBRWpCO1lBQ2pFLE1BQU1DLFVBQVVELFFBQVFDLE9BQU87WUFDL0IsSUFBSSxDQUFDQSxTQUFTQyxNQUFNQyxPQUFPLE1BQU0sSUFBSVEsTUFBTTtZQUUzQyxNQUFNVCxPQUFPLE1BQU1sQiwrQ0FBTUEsQ0FBQ2tCLElBQUksQ0FBQ1IsVUFBVSxDQUFDO2dCQUFFQyxPQUFPO29CQUFFUSxPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7Z0JBQUM7WUFBRTtZQUNqRixJQUFJLENBQUNELE1BQU0sTUFBTSxJQUFJUyxNQUFNO1lBRTNCLE9BQU8zQiwrQ0FBTUEsQ0FBQ2tDLGVBQWUsQ0FBQ0wsTUFBTSxDQUFDO2dCQUNuQ0MsTUFBTTtvQkFDSkc7b0JBQ0FGLFFBQVFiLEtBQUtULEVBQUU7Z0JBQ2pCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEwQixRQUFRO1FBQ041QixTQUFTLENBQUM2QixTQUFnQnBDLCtDQUFNQSxDQUFDcUMsTUFBTSxDQUFDaEMsUUFBUSxDQUFDO2dCQUFFTSxPQUFPO29CQUFFZSxVQUFVVSxPQUFPM0IsRUFBRTtnQkFBQztZQUFFO0lBQ3BGO0lBQ0E2QixRQUFRO1FBQ05DLFNBQVMsQ0FBQ0gsU0FBZ0JwQywrQ0FBTUEsQ0FBQ3VCLE1BQU0sQ0FBQ2xCLFFBQVEsQ0FBQztnQkFBRU0sT0FBTztvQkFBRTZCLFVBQVVKLE9BQU8zQixFQUFFO2dCQUFDO1lBQUU7SUFDcEY7QUFDRixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGFrc2hhXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXFNraWxsaGF2ZW4tXFxncmFwaHFsXFxyZXNvbHZlcnNcXGluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgY291cnNlczogYXN5bmMgKCkgPT4gcHJpc21hLmNvdXJzZS5maW5kTWFueSh7IGluY2x1ZGU6IHsgbW9kdWxlczogdHJ1ZSB9IH0pLFxyXG4gICAgY291cnNlOiBhc3luYyAoXzogYW55LCB7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSA9PlxyXG4gICAgICBwcmlzbWEuY291cnNlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9LCBpbmNsdWRlOiB7IG1vZHVsZXM6IHRydWUgfSB9KSxcclxuICAgIGZyZWVsYW5jZXJzOiBhc3luYyAoKSA9PiBwcmlzbWEuZnJlZWxhbmNlclByb2ZpbGUuZmluZE1hbnkoKSxcclxuICAgIG1lOiBhc3luYyAoXzogYW55LCBfXzogYW55LCBjb250ZXh0OiBhbnkpID0+IHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGNvbnRleHQuc2Vzc2lvbjtcclxuICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICByZXR1cm4gcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGZyZWVsYW5jZXI6IHRydWUsXHJcbiAgICAgICAgICBlbnJvbGxtZW50czogeyBpbmNsdWRlOiB7IGNvdXJzZTogdHJ1ZSB9IH0sXHJcbiAgICAgICAgICBjb21wbGV0ZWRMZXNzb25zOiB7IGluY2x1ZGU6IHsgbGVzc29uOiB0cnVlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgTXV0YXRpb246IHtcclxuICAgIGVucm9sbDogYXN5bmMgKF86IGFueSwgeyBjb3Vyc2VJZCB9OiB7IGNvdXJzZUlkOiBzdHJpbmcgfSwgY29udGV4dDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBjb250ZXh0LnNlc3Npb247XHJcbiAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHRocm93IG5ldyBFcnJvcihcIk5vdCBhdXRoZW50aWNhdGVkXCIpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0gfSk7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICByZXR1cm4gcHJpc21hLmVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjb3Vyc2VJZCxcclxuICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcGxldGVMZXNzb246IGFzeW5jIChfOiBhbnksIHsgbGVzc29uSWQgfTogeyBsZXNzb25JZDogc3RyaW5nIH0sIGNvbnRleHQ6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uID0gY29udGV4dC5zZXNzaW9uO1xyXG4gICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9IH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIHByaXNtYS5jb21wbGV0ZWRMZXNzb24uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZXNzb25JZCxcclxuICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgQ291cnNlOiB7XHJcbiAgICBtb2R1bGVzOiAocGFyZW50OiBhbnkpID0+IHByaXNtYS5tb2R1bGUuZmluZE1hbnkoeyB3aGVyZTogeyBjb3Vyc2VJZDogcGFyZW50LmlkIH0gfSksXHJcbiAgfSxcclxuICBNb2R1bGU6IHtcclxuICAgIGxlc3NvbnM6IChwYXJlbnQ6IGFueSkgPT4gcHJpc21hLmxlc3Nvbi5maW5kTWFueSh7IHdoZXJlOiB7IG1vZHVsZUlkOiBwYXJlbnQuaWQgfSB9KSxcclxuICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJjb3Vyc2VzIiwiY291cnNlIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwibW9kdWxlcyIsIl8iLCJpZCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImZyZWVsYW5jZXJzIiwiZnJlZWxhbmNlclByb2ZpbGUiLCJtZSIsIl9fIiwiY29udGV4dCIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJmcmVlbGFuY2VyIiwiZW5yb2xsbWVudHMiLCJjb21wbGV0ZWRMZXNzb25zIiwibGVzc29uIiwiTXV0YXRpb24iLCJlbnJvbGwiLCJjb3Vyc2VJZCIsIkVycm9yIiwiZW5yb2xsbWVudCIsImNyZWF0ZSIsImRhdGEiLCJ1c2VySWQiLCJjb21wbGV0ZUxlc3NvbiIsImxlc3NvbklkIiwiY29tcGxldGVkTGVzc29uIiwiQ291cnNlIiwicGFyZW50IiwibW9kdWxlIiwiTW9kdWxlIiwibGVzc29ucyIsIm1vZHVsZUlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./graphql/resolvers/index.ts\n");

/***/ }),

/***/ "(rsc)/./graphql/schema/index.ts":
/*!*********************************!*\
  !*** ./graphql/schema/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   schema: () => (/* binding */ schema)\n/* harmony export */ });\n/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-core */ \"(rsc)/./node_modules/apollo-server-core/dist/index.js\");\n/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schema = (0,apollo_server_core__WEBPACK_IMPORTED_MODULE_0__.gql)`\r\n  type Course {\r\n    id: ID!\r\n    title: String!\r\n    modules: [Module!]\r\n  }\r\n\r\n  type Module {\r\n    id: ID!\r\n    title: String!\r\n    courseId: ID!\r\n    lessons: [Lesson!]\r\n  }\r\n\r\n  type Lesson {\r\n    id: ID!\r\n    title: String!\r\n    slug: String!\r\n    moduleId: ID!\r\n  }\r\n\r\n  type FreelancerProfile {\r\n    id: ID!\r\n    bio: String!\r\n    skills: [String!]!\r\n    userId: ID!\r\n  }\r\n\r\n  type User {\r\n    id: ID!\r\n    name: String\r\n    email: String\r\n    freelancer: FreelancerProfile\r\n    enrollments: [Enrollment!]\r\n    completedLessons: [CompletedLesson!]\r\n  }\r\n\r\n  type Enrollment {\r\n    id: ID!\r\n    courseId: ID!\r\n    userId: ID!\r\n    course: Course\r\n  }\r\n\r\n  type CompletedLesson {\r\n    id: ID!\r\n    lessonId: ID!\r\n    userId: ID!\r\n    lesson: Lesson\r\n  }\r\n\r\n  type Query {\r\n    courses: [Course!]\r\n    course(id: ID!): Course\r\n    freelancers: [FreelancerProfile!]\r\n    me: User\r\n  }\r\n\r\n  type Mutation {\r\n    enroll(courseId: ID!): Enrollment\r\n    completeLesson(lessonId: ID!): CompletedLesson\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ncmFwaHFsL3NjaGVtYS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFbEMsTUFBTUMsU0FBU0QsdURBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RDFCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxha3NoYVxcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFxTa2lsbGhhdmVuLVxcZ3JhcGhxbFxcc2NoZW1hXFxpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgQ291cnNlIHtcclxuICAgIGlkOiBJRCFcclxuICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICBtb2R1bGVzOiBbTW9kdWxlIV1cclxuICB9XHJcblxyXG4gIHR5cGUgTW9kdWxlIHtcclxuICAgIGlkOiBJRCFcclxuICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICBjb3Vyc2VJZDogSUQhXHJcbiAgICBsZXNzb25zOiBbTGVzc29uIV1cclxuICB9XHJcblxyXG4gIHR5cGUgTGVzc29uIHtcclxuICAgIGlkOiBJRCFcclxuICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICBzbHVnOiBTdHJpbmchXHJcbiAgICBtb2R1bGVJZDogSUQhXHJcbiAgfVxyXG5cclxuICB0eXBlIEZyZWVsYW5jZXJQcm9maWxlIHtcclxuICAgIGlkOiBJRCFcclxuICAgIGJpbzogU3RyaW5nIVxyXG4gICAgc2tpbGxzOiBbU3RyaW5nIV0hXHJcbiAgICB1c2VySWQ6IElEIVxyXG4gIH1cclxuXHJcbiAgdHlwZSBVc2VyIHtcclxuICAgIGlkOiBJRCFcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgZW1haWw6IFN0cmluZ1xyXG4gICAgZnJlZWxhbmNlcjogRnJlZWxhbmNlclByb2ZpbGVcclxuICAgIGVucm9sbG1lbnRzOiBbRW5yb2xsbWVudCFdXHJcbiAgICBjb21wbGV0ZWRMZXNzb25zOiBbQ29tcGxldGVkTGVzc29uIV1cclxuICB9XHJcblxyXG4gIHR5cGUgRW5yb2xsbWVudCB7XHJcbiAgICBpZDogSUQhXHJcbiAgICBjb3Vyc2VJZDogSUQhXHJcbiAgICB1c2VySWQ6IElEIVxyXG4gICAgY291cnNlOiBDb3Vyc2VcclxuICB9XHJcblxyXG4gIHR5cGUgQ29tcGxldGVkTGVzc29uIHtcclxuICAgIGlkOiBJRCFcclxuICAgIGxlc3NvbklkOiBJRCFcclxuICAgIHVzZXJJZDogSUQhXHJcbiAgICBsZXNzb246IExlc3NvblxyXG4gIH1cclxuXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICBjb3Vyc2VzOiBbQ291cnNlIV1cclxuICAgIGNvdXJzZShpZDogSUQhKTogQ291cnNlXHJcbiAgICBmcmVlbGFuY2VyczogW0ZyZWVsYW5jZXJQcm9maWxlIV1cclxuICAgIG1lOiBVc2VyXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGVucm9sbChjb3Vyc2VJZDogSUQhKTogRW5yb2xsbWVudFxyXG4gICAgY29tcGxldGVMZXNzb24obGVzc29uSWQ6IElEISk6IENvbXBsZXRlZExlc3NvblxyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbImdxbCIsInNjaGVtYSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./graphql/schema/index.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUU5QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxDQUFDO0lBQUVJLEtBQUs7UUFBQztLQUFRO0FBQUMsR0FBRztBQUVqRSxJQUFJQyxJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtzaGFcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcU2tpbGxoYXZlbi1cXGxpYlxccHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9wcmlzbWEudHNcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xyXG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

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

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@apollo","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/graphql","vendor-chunks/tslib","vendor-chunks/graphql-tag","vendor-chunks/lru-cache","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/@next-auth","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@graphql-tools","vendor-chunks/apollo-server-core","vendor-chunks/uuid","vendor-chunks/apollo-reporting-protobuf","vendor-chunks/@apollographql","vendor-chunks/sha.js","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/@protobufjs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/xss","vendor-chunks/whatwg-url","vendor-chunks/whatwg-mimetype","vendor-chunks/negotiator","vendor-chunks/cssfilter","vendor-chunks/@as-integrations","vendor-chunks/retry","vendor-chunks/get-proto","vendor-chunks/apollo-server-env","vendor-chunks/tr46","vendor-chunks/inherits","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/node-fetch","vendor-chunks/available-typed-arrays","vendor-chunks/which-typed-array","vendor-chunks/webidl-conversions","vendor-chunks/typed-array-buffer","vendor-chunks/to-buffer","vendor-chunks/set-function-length","vendor-chunks/safe-buffer","vendor-chunks/possible-typed-array-names","vendor-chunks/node-abort-controller","vendor-chunks/loglevel","vendor-chunks/lodash.sortby","vendor-chunks/isarray","vendor-chunks/is-typed-array","vendor-chunks/is-callable","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-property-descriptors","vendor-chunks/get-intrinsic","vendor-chunks/for-each","vendor-chunks/fast-json-stable-stringify","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/define-data-property","vendor-chunks/call-bound","vendor-chunks/call-bind","vendor-chunks/async-retry","vendor-chunks/apollo-server-types","vendor-chunks/apollo-server-errors","vendor-chunks/@josephg"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphql%2Froute&page=%2Fapi%2Fgraphql%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphql%2Froute.ts&appDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caksha%5COneDrive%5CDocuments%5CGitHub%5CSkillhaven-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();