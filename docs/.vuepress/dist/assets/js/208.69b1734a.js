(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{580:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"httprequesthandler-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-hpp"}},[t._v("#")]),t._v(" HttpRequestHandler.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/server/HttpRequestHandler.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/server/HttpRequestHandler.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp/web/server/HttpRequestHandler.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"httprequesthandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler"}},[t._v("#")]),t._v(" HttpRequestHandler")]),t._v(" "),a("p",[t._v("HTTP request handler.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequestHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"typedefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typedefs"}},[t._v("#")]),t._v(" Typedefs")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::Status")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-status"}},[t._v("Status")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#status"}},[t._v("oatpp::web::protocol::http::Status")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::Header")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-header"}},[t._v("Header")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#header"}},[t._v("oatpp::web::protocol::http::Header")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::Headers")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-headers"}},[t._v("Headers")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::QueryParams")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-queryparams"}},[t._v("QueryParams")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#queryparams"}},[t._v("oatpp::web::protocol::http::QueryParams")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::incoming::Request")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-incomingrequest"}},[t._v("IncomingRequest")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Request/#request"}},[t._v("oatpp::web::protocol::http::incoming::Request")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::outgoing::Response")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-outgoingresponse"}},[t._v("OutgoingResponse")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::outgoing::ResponseFactory")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-responsefactory"}},[t._v("ResponseFactory")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/ResponseFactory/#responsefactory"}},[t._v("oatpp::web::protocol::http::outgoing::ResponseFactory")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::HttpError")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-httperror"}},[t._v("HttpError")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#httperror"}},[t._v("oatpp::web::protocol::http::HttpError")]),t._v(".")],1)])])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("std::shared_ptr<OutgoingResponse>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-handle"}},[t._v("handle")])]),t._v(" "),a("td",[t._v("Handle incoming http request. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::CoroutineStarterForResult<const std::shared_ptr<OutgoingResponse>&>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-handleasync"}},[t._v("handleAsync")])]),t._v(" "),a("td",[t._v("Handle incoming http request in Asynchronous manner. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#httprequesthandler-~httprequesthandler"}},[t._v("~HttpRequestHandler")])]),t._v(" "),a("td",[t._v("You have to provide a definition for destructors, otherwise its undefined behaviour.")])])])]),t._v(" "),a("h3",{attrs:{id:"httprequesthandler-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-status"}},[t._v("#")]),t._v(" HttpRequestHandler::Status")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#status"}},[t._v("oatpp::web::protocol::http::Status")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Status Status\n")])])]),a("h3",{attrs:{id:"httprequesthandler-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-header"}},[t._v("#")]),t._v(" HttpRequestHandler::Header")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#header"}},[t._v("oatpp::web::protocol::http::Header")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Header Header\n")])])]),a("h3",{attrs:{id:"httprequesthandler-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-headers"}},[t._v("#")]),t._v(" HttpRequestHandler::Headers")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Headers Headers\n")])])]),a("h3",{attrs:{id:"httprequesthandler-queryparams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-queryparams"}},[t._v("#")]),t._v(" HttpRequestHandler::QueryParams")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#queryparams"}},[t._v("oatpp::web::protocol::http::QueryParams")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("QueryParams QueryParams\n")])])]),a("h3",{attrs:{id:"httprequesthandler-incomingrequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-incomingrequest"}},[t._v("#")]),t._v(" HttpRequestHandler::IncomingRequest")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Request/#request"}},[t._v("oatpp::web::protocol::http::incoming::Request")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("incoming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Request IncomingRequest\n")])])]),a("h3",{attrs:{id:"httprequesthandler-outgoingresponse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-outgoingresponse"}},[t._v("#")]),t._v(" HttpRequestHandler::OutgoingResponse")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("outgoing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Response OutgoingResponse\n")])])]),a("h3",{attrs:{id:"httprequesthandler-responsefactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-responsefactory"}},[t._v("#")]),t._v(" HttpRequestHandler::ResponseFactory")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/ResponseFactory/#responsefactory"}},[t._v("oatpp::web::protocol::http::outgoing::ResponseFactory")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("outgoing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ResponseFactory ResponseFactory\n")])])]),a("h3",{attrs:{id:"httprequesthandler-httperror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-httperror"}},[t._v("#")]),t._v(" HttpRequestHandler::HttpError")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#httperror"}},[t._v("oatpp::web::protocol::http::HttpError")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpError HttpError\n")])])]),a("h3",{attrs:{id:"httprequesthandler-handle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-handle"}},[t._v("#")]),t._v(" HttpRequestHandler::handle")]),t._v(" "),a("p",[t._v("Handle incoming http request. "),a("br"),t._v(" "),a("em",[t._v("Implement this method.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" request - incoming http request. "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Request/#request"}},[t._v("oatpp::web::protocol::http::incoming::Request")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - outgoing http response. "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OutgoingResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IncomingRequest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"httprequesthandler-handleasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-handleasync"}},[t._v("#")]),t._v(" HttpRequestHandler::handleAsync")]),t._v(" "),a("p",[t._v("Handle incoming http request in Asynchronous manner. "),a("br"),t._v(" "),a("em",[t._v("Implement this method.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" request - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Request/#request"}},[t._v("oatpp::web::protocol::http::incoming::Request")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - oatpp::async::CoroutineStarterForResult of "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarterForResult"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OutgoingResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IncomingRequest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"httprequesthandler-httprequesthandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httprequesthandler-httprequesthandler"}},[t._v("#")]),t._v(" HttpRequestHandler::~HttpRequestHandler")]),t._v(" "),a("p",[t._v("You have to provide a definition for destructors, otherwise its undefined behaviour.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpRequestHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);