(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{588:function(e,t,r){"use strict";r.r(t);var o=r(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"benchmark-oatpp-aws-cloud"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#benchmark-oatpp-aws-cloud"}},[e._v("#")]),e._v(" Benchmark oatpp - AWS cloud "),r("seo")],1),e._v(" "),r("h2",{attrs:{id:"aws-t2-micro-instance-1vcpu-1gb-ubuntu-18-04-free-tier"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws-t2-micro-instance-1vcpu-1gb-ubuntu-18-04-free-tier"}},[e._v("#")]),e._v(" AWS t2.micro instance. 1vCPU 1GB Ubuntu 18.04 - free tier")]),e._v(" "),r("p",[e._v('Performance test of "Hello World" endpoint.')]),e._v(" "),r("p",[r("strong",[e._v("Machine")]),e._v(" - AWS t2.micro instance. 1vCPU 1GB Ubuntu 18.04 - free tier"),r("br"),e._v(" "),r("strong",[e._v("Tool")]),e._v(" - wrk")]),e._v(" "),r("p",[e._v("oatpp-async compiled with: "),r("code",[e._v("-D OATPP_ASYNC_HTTP_CONNECTION_HANDLER_THREAD_NUM_DEFAULT=1")]),e._v(" option.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github.com/lganzzzo/oatpp-website-res/blob/master/aws-1.png?raw=true",alt:"benchmark aws t2.micro"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("go net/http")]),e._v(' service performs clearly till 10 concurrent connection. At higher concurrency levels performs with "timeout" errors. Down at concurrency level > 15K.')]),e._v(" "),r("li",[r("strong",[e._v("oatpp-async")]),e._v(" service performs clearly and stays available up till 20K concurrent connections load. At higher loads no response. Service available if load drops.")]),e._v(" "),r("li",[r("strong",[e._v("oatpp-multithreaded")]),e._v(" service shows very high performance and works clearly up to 2.5K concurrent connections. Then down at load 5K concurrent connections.")])]),e._v(" "),r("h2",{attrs:{id:"aws-t3-xlarge-instance-4vcpus-16gb-ubuntu-18-04-121-81-month"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws-t3-xlarge-instance-4vcpus-16gb-ubuntu-18-04-121-81-month"}},[e._v("#")]),e._v(" AWS t3.xlarge instance. 4vCPUs 16GB Ubuntu 18.04 - $121.81/Month")]),e._v(" "),r("p",[e._v('Performance test of "Hello World" endpoint.')]),e._v(" "),r("p",[r("strong",[e._v("Machine")]),e._v(" - AWS t3.xlarge instance. 4vCPUs 16GB Ubuntu 18.04 - $121.81/Month"),r("br"),e._v(" "),r("strong",[e._v("Tool")]),e._v(" - wrk")]),e._v(" "),r("p",[e._v("oatpp-async compiled with:\n"),r("code",[e._v("-D OATPP_ASYNC_HTTP_CONNECTION_HANDLER_THREAD_NUM_DEFAULT=3")]),e._v(" option.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github.com/lganzzzo/oatpp-website-res/blob/master/aws-2.png?raw=true",alt:"benchmark aws t3.xlarge"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("go net/http")]),e._v(' service performs clearly till 10 concurrent connection. At higher concurrency levels (till 25K connections) performs with "timeout" errors. At 30K load no response. Service available if load drops.')]),e._v(" "),r("li",[r("strong",[e._v("oatpp-async")]),e._v(" service performs clearly and stays available up till 25K concurrent connections load. At 30K load no response. Service available if load drops.")]),e._v(" "),r("li",[r("strong",[e._v("oatpp-multithreaded")]),e._v(' service shows very high performance and works clearly up to 2.5K concurrent connections. At higher concurrency levels (till 20K connections) performs with "timeout" errors. Down at higher load.')])])])}),[],!1,null,null,null);t.default=n.exports}}]);