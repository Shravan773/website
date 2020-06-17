(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{239:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"example-crud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-crud","aria-hidden":"true"}},[t._v("#")]),t._v(" Example-CRUD "),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/example-crud",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Example project how-to create basic CRUD endpoints and document them with Swagger-UI and OpenApi 3.0.0")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("This project is using "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-swagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp-swagger"),a("OutboundLink")],1),t._v(" modules.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),a("hr"),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("hr"),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"project-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Project layout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("|- CMakeLists.txt                        // projects CMakeLists.txt\n|- src/\n|   |\n|   |- controller/                       // Folder containing UserController where all endpoints are declared\n|   |- db/                               // Folder with database mock\n|   |- dto/                              // DTOs are declared here\n|   |- SwaggerComponent.hpp              // Swagger-UI config\n|   |- AppComponent.hpp                  // Service config\n|   |- App.cpp                           // main() is here\n|\n|- test/                                 // test folder\n|- utility/install-oatpp-modules.sh      // utility script to install required oatpp-modules.\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"build-and-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-run","aria-hidden":"true"}},[this._v("#")]),this._v(" Build and Run")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"using-cmake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-cmake","aria-hidden":"true"}},[this._v("#")]),this._v(" Using CMake")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Requires")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("oatpp")]),this._v(" and "),s("code",[this._v("oatpp-swagger")]),this._v(" modules installed. You may run "),s("code",[this._v("utility/install-oatpp-modules.sh")]),this._v("\nscript to install required oatpp modules.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ mkdir build && cd build\n$ cmake ..\n$ make \n$ ./crud-exe        # - run application.\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"in-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" In Docker")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ docker build -t example-crud .\n$ docker run -p 8000:8000 -t example-crud\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"endpoints-declaration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-declaration","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoints declaration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"create-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Create User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Create new User"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addConsumes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/api/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"update-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Update User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Update User by userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addConsumes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/api/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" putUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"get-one-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-one-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Get one User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getUserById"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Get one User by userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/api/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getUserById"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_ASSERT_HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User not found"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"get-list-of-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-list-of-users","aria-hidden":"true"}},[this._v("#")]),this._v(" Get list of users")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getUsers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get all stored users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/api/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getUsers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDtoResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"delete-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deleteUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Delete User by userId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("addResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DELETE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/api/users/{userId}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deleteUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" success "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m_database"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_ASSERT_HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_417"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User not deleted. Perhaps no such User in the Database"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CODE_200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User successfully deleted"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])])}],!1,null,null,null);s.default=e.exports}}]);