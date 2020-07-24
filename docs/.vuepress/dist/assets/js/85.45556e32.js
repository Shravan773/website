(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{457:function(t,e,a){"use strict";a.r(e);var r=a(42),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"base-define-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-define-hpp"}},[t._v("#")]),t._v(" base_define.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/codegen/api_controller/base_define.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/codegen/api_controller/base_define.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp/codegen/api_controller/base_define.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" ENDPOINT")]),t._v(" "),a("p",[t._v("Codegen macoro to be used in "),a("code",[t._v("oatpp::web::server::api::ApiController")]),t._v(" to generate Endpoint. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(' METHOD - Http method ("GET", "POST", "PUT", etc.). ')]),a("li",[a("strong",[t._v("@param")]),t._v(" PATH - Path to endpoint (without host). ")]),a("li",[a("strong",[t._v("@param")]),t._v(" NAME - Name of the generated method. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - std::shared_ptr to "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" ENDPOINT(METHOD, PATH, ...)")]),t._v("\n")])])]),a("h2",{attrs:{id:"endpoint-interceptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-interceptor"}},[t._v("#")]),t._v(" ENDPOINT_INTERCEPTOR")]),t._v(" "),a("p",[t._v("Endpoint interceptor")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" ENDPOINT_INTERCEPTOR(ENDPOINT_NAME, NAME)")]),t._v("\n")])])]),a("h2",{attrs:{id:"endpoint-async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-async"}},[t._v("#")]),t._v(" ENDPOINT_ASYNC")]),t._v(" "),a("p",[t._v("Codegen macoro to be used in "),a("code",[t._v("oatpp::web::server::api::ApiController")]),t._v(" to generate Asynchronous Endpoint. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(' METHOD - Http method ("GET", "POST", "PUT", etc.). ')]),a("li",[a("strong",[t._v("@param")]),t._v(" PATH - Path to endpoint (without host). ")]),a("li",[a("strong",[t._v("@param")]),t._v(" NAME - Name of the generated method. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" ENDPOINT_ASYNC(METHOD, PATH, NAME)")]),t._v("\n")])])]),a("h2",{attrs:{id:"endpoint-async-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-async-init"}},[t._v("#")]),t._v(" ENDPOINT_ASYNC_INIT")]),t._v(" "),a("p",[t._v("Auxiliary codegen macro for "),a("code",[t._v("ENDPOINT_ASYNC")]),t._v(" to generate correct constructor for Asynchronous Endpoint Coroutine. NAME - Name of the endpoint. Exact the same name as was passed to "),a("code",[t._v("ENDPOINT_ASYNC")]),t._v(" macro.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" ENDPOINT_ASYNC_INIT(NAME)")]),t._v("\n")])])]),a("h2",{attrs:{id:"endpoint-interceptor-async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-interceptor-async"}},[t._v("#")]),t._v(" ENDPOINT_INTERCEPTOR_ASYNC")]),t._v(" "),a("p",[t._v("Endpoint interceptor")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" ENDPOINT_INTERCEPTOR_ASYNC(ENDPOINT_NAME, NAME)")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);