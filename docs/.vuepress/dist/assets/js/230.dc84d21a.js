(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{216:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"oatpp-zlib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oatpp-zlib","aria-hidden":"true"}},[t._v("#")]),t._v(" oatpp-zlib "),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-zlib",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("oatpp-zlib")]),t._v(" - extension of "),a("router-link",{attrs:{to:"/docs/modules/oatpp/"}},[t._v("oatpp")]),t._v(" module."),a("br"),t._v("\nIt provides functionality for compressing/decompressing content with "),a("code",[t._v("deflate")]),t._v(" and "),a("code",[t._v("gzip")]),t._v("."),a("br"),t._v('\nSupports both "Simple" and "Async" oatpp APIs.')],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("Clone this repository. In the root of the repository run:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-to-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build","aria-hidden":"true"}},[this._v("#")]),this._v(" How To Build")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"requires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requires","aria-hidden":"true"}},[this._v("#")]),this._v(" Requires")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("ZLib installed.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"install-zlib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-zlib","aria-hidden":"true"}},[this._v("#")]),this._v(" Install ZLib")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" zlib1g-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"install-oatpp-zlib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-oatpp-zlib","aria-hidden":"true"}},[this._v("#")]),this._v(" Install oatpp-zlib")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" build\ncmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apis","aria-hidden":"true"}},[this._v("#")]),this._v(" APIs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"automatically-compress-served-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatically-compress-served-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Automatically Compress Served Content")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Configure "),s("code",[this._v("server::ConnectionHandler")]),this._v(" in "),s("code",[this._v("AppComponent.hpp")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-zlib/EncoderProvider.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_CREATE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionHandler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serverConnectionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpRouter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get Router component")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create HttpProcessor::Components */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" components "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpProcessor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Add content encoders */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" encoders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ProviderCollection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  encoders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("zlib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("DeflateEncoderProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  encoders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("zlib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("GzipEncoderProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Set content encoders */")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("contentEncodingProviders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" encoders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* return HttpConnectionHandler */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpConnectionHandler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now served content will be automatically compressed and streamed to the client if the client sets "),s("code",[this._v("Accept-Encoding")]),this._v(" header appropriately.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"automatically-decompress-uploaded-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatically-decompress-uploaded-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Automatically Decompress Uploaded Content")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Configure "),s("code",[this._v("server::ConnectionHandler")]),this._v(" in "),s("code",[this._v("AppComponent.hpp")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-zlib/EncoderProvider.hpp"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp/web/protocol/http/incoming/SimpleBodyDecoder.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_CREATE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionHandler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serverConnectionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpRouter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get Router component")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create HttpProcessor::Components */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" components "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpProcessor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Add content decoders */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" decoders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ProviderCollection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  decoders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("zlib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("DeflateDecoderProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  decoders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("zlib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("GzipDecoderProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Set Body Decoder */")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("bodyDecoder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("incoming"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SimpleBodyDecoder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decoders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* return HttpConnectionHandler */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpConnectionHandler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now uploaded content will be automatically decompressed if the client sets "),s("code",[this._v("Content-Encoding")]),this._v(" header properly.")])}],!1,null,null,null);s.default=r.exports}}]);