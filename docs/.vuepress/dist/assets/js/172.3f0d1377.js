(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{544:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deserializer-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-hpp"}},[e._v("#")]),e._v(" Deserializer.hpp"),a("seo")],1),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/parser/json/mapping/Deserializer.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("This File On Github"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/parser/json/mapping/Deserializer.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ask A Question"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("code",[e._v("API: latest")]),a("br"),e._v(" "),a("code",[e._v("module: oatpp")]),a("br"),e._v(" "),a("code",[e._v('#include "oatpp/parser/json/mapping/Deserializer.hpp"')])]),e._v(" "),a("h2",{attrs:{id:"deserializer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer"}},[e._v("#")]),e._v(" Deserializer")]),e._v(" "),a("p",[e._v("Json Deserializer. Deserialize oatpp DTO object from json. See "),a("a",{attrs:{href:"https://oatpp.io/docs/components/dto/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Transfer Object(DTO) component"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" parser "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" mapping "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Deserializer")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[e._v("#")]),e._v(" Fields")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-object-scope-open"}},[e._v("ERROR_CODE_OBJECT_SCOPE_OPEN")])]),e._v(" "),a("td",[e._v("\"'{' - expected\"")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-object-scope-close"}},[e._v("ERROR_CODE_OBJECT_SCOPE_CLOSE")])]),e._v(" "),a("td",[e._v("\"'}' - expected\"")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-object-scope-unknown-field"}},[e._v("ERROR_CODE_OBJECT_SCOPE_UNKNOWN_FIELD")])]),e._v(" "),a("td",[e._v('"Unknown field"')])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-object-scope-colon-missing"}},[e._v("ERROR_CODE_OBJECT_SCOPE_COLON_MISSING")])]),e._v(" "),a("td",[e._v("\"':' - expected\"")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-array-scope-open"}},[e._v("ERROR_CODE_ARRAY_SCOPE_OPEN")])]),e._v(" "),a("td",[e._v("\"'[' - expected\"")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-array-scope-close"}},[e._v("ERROR_CODE_ARRAY_SCOPE_CLOSE")])]),e._v(" "),a("td",[e._v("\"']' - expected\"")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("v_int32")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-error-code-value-boolean"}},[e._v("ERROR_CODE_VALUE_BOOLEAN")])]),e._v(" "),a("td",[e._v("\"'true' or 'false' - expected\"")])])])]),e._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Return Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("[none]")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-deserializer"}},[e._v("Deserializer")])]),e._v(" "),a("td",[e._v("Constructor.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("void")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-setdeserializermethod"}},[e._v("setDeserializerMethod")])]),e._v(" "),a("td",[e._v("Set deserializer method for type.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("oatpp::Void")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-deserialize"}},[e._v("deserialize")])]),e._v(" "),a("td",[e._v("Deserialize text.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("const std::shared_ptr<Config>&")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-getconfig"}},[e._v("getConfig")])]),e._v(" "),a("td",[e._v("Get deserializer config.")])])])]),e._v(" "),a("h3",{attrs:{id:"deserializer-error-code-object-scope-open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-object-scope-open"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_OBJECT_SCOPE_OPEN")]),e._v(" "),a("p",[e._v("\"'{' - expected\"")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_OBJECT_SCOPE_OPEN "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-error-code-object-scope-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-object-scope-close"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_OBJECT_SCOPE_CLOSE")]),e._v(" "),a("p",[e._v("\"'}' - expected\"")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_OBJECT_SCOPE_CLOSE "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-error-code-object-scope-unknown-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-object-scope-unknown-field"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_OBJECT_SCOPE_UNKNOWN_FIELD")]),e._v(" "),a("p",[e._v('"Unknown field"')]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_OBJECT_SCOPE_UNKNOWN_FIELD "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-error-code-object-scope-colon-missing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-object-scope-colon-missing"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_OBJECT_SCOPE_COLON_MISSING")]),e._v(" "),a("p",[e._v("\"':' - expected\"")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_OBJECT_SCOPE_COLON_MISSING "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-error-code-array-scope-open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-array-scope-open"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_ARRAY_SCOPE_OPEN")]),e._v(" "),a("p",[e._v("\"'[' - expected\"")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_ARRAY_SCOPE_OPEN "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-error-code-array-scope-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-array-scope-close"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_ARRAY_SCOPE_CLOSE")]),e._v(" "),a("p",[e._v("\"']' - expected\"")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_ARRAY_SCOPE_CLOSE "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-error-code-value-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-error-code-value-boolean"}},[e._v("#")]),e._v(" Deserializer::ERROR_CODE_VALUE_BOOLEAN")]),e._v(" "),a("p",[e._v("\"'true' or 'false' - expected\"")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("constexpr")]),e._v(" v_int32 ERROR_CODE_VALUE_BOOLEAN "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-deserializer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-deserializer"}},[e._v("#")]),e._v(" Deserializer::Deserializer")]),e._v(" "),a("p",[e._v("Constructor. "),a("ul",[a("li",[a("strong",[e._v("@param")]),e._v(" config ")])])]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Deserializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("make_shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-setdeserializermethod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-setdeserializermethod"}},[e._v("#")]),e._v(" Deserializer::setDeserializerMethod")]),e._v(" "),a("p",[e._v("Set deserializer method for type. "),a("ul",[a("li",[a("strong",[e._v("@param")]),e._v(" classId - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Type/#classid"}},[e._v("oatpp::data::mapping::type::ClassId")]),e._v(". ")],1),a("li",[a("strong",[e._v("@param")]),e._v(" method - "),a("code",[e._v("typedef oatpp::Void (*DeserializerMethod)(Deserializer*, parser::Caret, const Type* const)")]),e._v(". ")])])]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setDeserializerMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("ClassId"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" DeserializerMethod method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-deserialize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-deserialize"}},[e._v("#")]),e._v(" Deserializer::deserialize")]),e._v(" "),a("p",[e._v("Deserialize text. "),a("ul",[a("li",[a("strong",[e._v("@param")]),e._v(" caret - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/parser/Caret/#caret"}},[e._v("oatpp::parser::Caret")]),e._v(". ")],1),a("li",[a("strong",[e._v("@param")]),e._v(" type - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Type/#type"}},[e._v("oatpp::data::mapping::type::Type")])],1),a("li",[a("strong",[e._v("@return")]),e._v(" - "),a("code",[e._v("oatpp::Void")]),e._v(" over deserialized object. ")])])]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[e._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("Void "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("Caret"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" caret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-getconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-getconfig"}},[e._v("#")]),e._v(" Deserializer::getConfig")]),e._v(" "),a("p",[e._v("Get deserializer config. "),a("ul",[a("li",[a("strong",[e._v("@return")])])])]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h2",{attrs:{id:"deserializer-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-config"}},[e._v("#")]),e._v(" Deserializer::Config")]),e._v(" "),a("p",[e._v("Deserializer config.")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" parser "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" mapping "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Deserializer")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Config")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("Countable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields-2"}},[e._v("#")]),e._v(" Fields")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("bool")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-config-allowunknownfields"}},[e._v("allowUnknownFields")])]),e._v(" "),a("td",[e._v('Do not fail if unknown field is found in json. "unknown field" is the one which is not present in DTO object class.')])])])]),e._v(" "),a("h3",{attrs:{id:"methods-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Return Type")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Summary")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("[none]")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-config-config"}},[e._v("Config")])]),e._v(" "),a("td",[e._v("Constructor.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("std::shared_ptr<Config>")])]),e._v(" "),a("td",[a("a",{attrs:{href:"#deserializer-config-createshared"}},[e._v("createShared")])]),e._v(" "),a("td",[e._v("Create shared Config.")])])])]),e._v(" "),a("h3",{attrs:{id:"deserializer-config-allowunknownfields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-config-allowunknownfields"}},[e._v("#")]),e._v(" Deserializer::Config::allowUnknownFields")]),e._v(" "),a("p",[e._v('Do not fail if unknown field is found in json. "unknown field" is the one which is not present in DTO object class.')]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("bool")]),e._v(" allowUnknownFields "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-config-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-config-config"}},[e._v("#")]),e._v(" Deserializer::Config::Config")]),e._v(" "),a("p",[e._v("Constructor.")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h3",{attrs:{id:"deserializer-config-createshared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deserializer-config-createshared"}},[e._v("#")]),e._v(" Deserializer::Config::createShared")]),e._v(" "),a("p",[e._v("Create shared Config. "),a("ul",[a("li",[a("strong",[e._v("@return")]),e._v(" - "),a("code",[e._v("std::shared_ptr")]),e._v(" to Config. ")])])]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);