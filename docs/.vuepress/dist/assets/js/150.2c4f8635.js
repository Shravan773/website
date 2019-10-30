(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{304:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"chunkedbufferbody-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" ChunkedBufferBody.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/protocol/http/outgoing/ChunkedBufferBody.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/protocol/http/outgoing/ChunkedBufferBody.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Implementation of "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Body/#body"}},[t._v("oatpp::web::protocol::http::outgoing::Body")]),t._v(" class. Implements functionality to use :oatpp::data::stream::ChunkedBuffer as data source for http body.")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Add "),a("code",[t._v("Content-Length")]),t._v(" header. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" headers - "),a("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1)])]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("Write body data to stream. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" stream - "),a("code",[t._v("std::shared_ptr")]),t._v(" to "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1)])]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Start "),a("a",{attrs:{href:"#chunkedbufferbody-writetostreamcoroutine"}},[t._v("ChunkedBufferBody::WriteToStreamCoroutine")]),t._v(" to write buffer data to stream. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" stream - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)])]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("Return known size of the body. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/IODefinitions/#v-io-size"}},[t._v("oatpp::data::v_io_size")]),t._v(". ")],1)])]),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/web/protocol/http/outgoing/ChunkedBufferBody.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"chunkedbufferbody"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" protocol "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" outgoing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChunkedBufferBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("enable_shared_from_this"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ChunkedBufferBody"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#chunkedbufferbody-chunkedbufferbody"}},[t._v("ChunkedBufferBody")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<ChunkedBufferBody>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#chunkedbufferbody-createshared"}},[t._v("createShared")])]),t._v(" "),a("td",[t._v("Create shared ChunkedBufferBody.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#chunkedbufferbody-declareheaders"}},[t._v("declareHeaders")])]),t._v(" "),a("td",[t._v("Add "),a("code",[t._v("Content-Length")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#chunkedbufferbody-writetostream"}},[t._v("writeToStream")])]),t._v(" "),a("td",[t._v("Write body data to stream.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::CoroutineStarter")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#chunkedbufferbody-writetostreamasync"}},[t._v("writeToStreamAsync")])]),t._v(" "),a("td",[t._v("Start "),a("a",{attrs:{href:"#chunkedbufferbody-writetostreamcoroutine"}},[t._v("ChunkedBufferBody::WriteToStreamCoroutine")]),t._v(" to write buffer data to stream.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("data::v_io_size")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#chunkedbufferbody-getknownsize"}},[t._v("getKnownSize")])]),t._v(" "),a("td",[t._v("Return known size of the body.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chunkedbufferbody-chunkedbufferbody"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-chunkedbufferbody","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody::ChunkedBufferBody")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" buffer - :oatpp::data::stream::ChunkedBuffer. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ChunkedBufferBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ChunkedBuffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chunkedbufferbody-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody::createShared")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create shared ChunkedBufferBody. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" buffer - :oatpp::data::stream::ChunkedBuffer. ")]),e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("std::shared_ptr")]),this._v(" to ChunkedBufferBody. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ChunkedBufferBody"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ChunkedBuffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chunkedbufferbody-declareheaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-declareheaders","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody::declareHeaders")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("declareHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chunkedbufferbody-writetostream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-writetostream","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody::writeToStream")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeToStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OutputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chunkedbufferbody-writetostreamasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-writetostreamasync","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody::writeToStreamAsync")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeToStreamAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OutputStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chunkedbufferbody-getknownsize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkedbufferbody-getknownsize","aria-hidden":"true"}},[this._v("#")]),this._v(" ChunkedBufferBody::getKnownSize")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("v_io_size "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getKnownSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" override\n")])])])}],!1,null,null,null);e.default=s.exports}}]);