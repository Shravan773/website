(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{422:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"serializer-hpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-hpp"}},[t._v("#")]),t._v(" Serializer.hpp"),e("seo")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/oatpp/oatpp-mongo/blob/master/src/oatpp-mongo/bson/mapping/Serializer.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp-mongo/issues/new?title=API%20question&body=In%20file:%20oatpp-mongo/bson/mapping/Serializer.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("API: latest")]),e("br"),t._v(" "),e("code",[t._v("module: oatpp-mongo")]),e("br"),t._v(" "),e("code",[t._v('#include "oatpp-mongo/bson/mapping/Serializer.hpp"')])]),t._v(" "),e("h2",{attrs:{id:"serializer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer"}},[t._v("#")]),t._v(" Serializer")]),t._v(" "),e("p",[t._v("BSON Serializer. Serializes oatpp DTO object to bson. See "),e("a",{attrs:{href:"https://oatpp.io/docs/components/dto/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Transfer Object(DTO) component"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mongo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" bson "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mapping "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serializer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-serializer"}},[t._v("Serializer")])]),t._v(" "),e("td",[t._v("Constructor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-setserializermethod"}},[t._v("setSerializerMethod")])]),t._v(" "),e("td",[t._v("Set serializer method for type.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-serializetostream"}},[t._v("serializeToStream")])]),t._v(" "),e("td",[t._v("Serialize object to stream.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("const std::shared_ptr<Config>&")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-getconfig"}},[t._v("getConfig")])]),t._v(" "),e("td",[t._v("Get serializer config.")])])])]),t._v(" "),e("h3",{attrs:{id:"serializer-serializer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-serializer"}},[t._v("#")]),t._v(" Serializer::Serializer")]),t._v(" "),e("p",[t._v("Constructor. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" config - serializer config. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serializer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"serializer-setserializermethod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-setserializermethod"}},[t._v("#")]),t._v(" Serializer::setSerializerMethod")]),t._v(" "),e("p",[t._v("Set serializer method for type. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" classId - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Type/#classid"}},[t._v("oatpp::data::mapping::type::ClassId")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" method - "),e("code",[t._v("typedef void (*SerializerMethod)(Serializer*, data::stream::ConsistentOutputStream*, const oatpp::Void)")]),t._v(". ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSerializerMethod")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ClassId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" classId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SerializerMethod method"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"serializer-serializetostream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-serializetostream"}},[t._v("#")]),t._v(" Serializer::serializeToStream")]),t._v(" "),e("p",[t._v("Serialize object to stream. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" stream - "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#consistentoutputstream"}},[t._v("oatpp::data::stream::ConsistentOutputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" polymorph - DTO as "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/Types/#void"}},[t._v("oatpp::Void")]),t._v(". ")],1)])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("serializeToStream")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConsistentOutputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Void"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" polymorph"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"serializer-getconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-getconfig"}},[t._v("#")]),t._v(" Serializer::getConfig")]),t._v(" "),e("p",[t._v("Get serializer config. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfig")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"serializer-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-config"}},[t._v("#")]),t._v(" Serializer::Config")]),t._v(" "),e("p",[t._v("Serializer config.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mongo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" bson "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mapping "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serializer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[t._v("#")]),t._v(" Fields")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("bool")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-config-includenullfields"}},[t._v("includeNullFields")])]),t._v(" "),e("td",[t._v("Include fields with value == nullptr into serialized bson.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("bool")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-config-throwonunknowntypes"}},[t._v("throwOnUnknownTypes")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(" - insert string "),e("code",[t._v('"<unknown-type>"')]),t._v(" in bson field value in case unknown field found. Fail if "),e("code",[t._v("false")]),t._v(". Known types for this serializer are:"),e("br"),t._v(" (String, Int8, Int16, Int32, Int64, Float32, Float64, Boolean, DTOs, List, Fields).")])])])]),t._v(" "),e("h3",{attrs:{id:"methods-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-config-config"}},[t._v("Config")])]),t._v(" "),e("td",[t._v("Constructor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<Config>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#serializer-config-createshared"}},[t._v("createShared")])]),t._v(" "),e("td",[t._v("Create shared config.")])])])]),t._v(" "),e("h3",{attrs:{id:"serializer-config-includenullfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-config-includenullfields"}},[t._v("#")]),t._v(" Serializer::Config::includeNullFields")]),t._v(" "),e("p",[t._v("Include fields with value == nullptr into serialized bson.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" includeNullFields "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),e("h3",{attrs:{id:"serializer-config-throwonunknowntypes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-config-throwonunknowntypes"}},[t._v("#")]),t._v(" Serializer::Config::throwOnUnknownTypes")]),t._v(" "),e("p",[t._v("If "),e("code",[t._v("true")]),t._v(" - insert string "),e("code",[t._v('"<unknown-type>"')]),t._v(" in bson field value in case unknown field found. Fail if "),e("code",[t._v("false")]),t._v(". Known types for this serializer are:"),e("br"),t._v(" (String, Int8, Int16, Int32, Int64, Float32, Float64, Boolean, DTOs, List, Fields).")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" throwOnUnknownTypes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),e("h3",{attrs:{id:"serializer-config-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-config-config"}},[t._v("#")]),t._v(" Serializer::Config::Config")]),t._v(" "),e("p",[t._v("Constructor.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"serializer-config-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializer-config-createshared"}},[t._v("#")]),t._v(" Serializer::Config::createShared")]),t._v(" "),e("p",[t._v("Create shared config. "),e("ul",[e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("code",[t._v("std::shared_ptr")]),t._v(" to Config. ")])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);