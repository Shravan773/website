---
title: Example ApiClient
description: Example project how-to use oatpp ApiClient and how it works.
sidebarDepth: 0
---

# ApiClient Example <seo/>

[Github Repository](https://github.com/oatpp/example-api-client)

Example project how-to use oatpp [ApiClient](/docs/components/api-client/) and how it works

## About ApiClient

Oatpp [ApiClient](/docs/components/api-client/) is a mechanism which enables you to generate Web Api Clients in declarative manner.
Under the hood it uses provided [RequestExecutor](/api/latest/oatpp/web/client/RequestExecutor/) to perform http requests. Thus you are abstracted from the low-level http-client library implementation and can substitute any other http-client library at any time with zero code changes.
*Roughly you may treat oatpp [ApiClient](/docs/components/api-client/) as Java Retrofit for C++.*

In this example you can configure to use such RequestExecutors:
- [oatpp::curl::RequestExecutor](/api/latest/oatpp-curl/RequestExecutor/) - RequestExecutor for oatpp ApiClient based on libcurl.
- [oatpp::web::client::HttpRequestExecutor](/api/latest/oatpp/web/client/HttpRequestExecutor/) - oatpp out-of-the-box provided [RequestExecutor](/api/latest/oatpp/web/client/RequestExecutor/).

## Example overview

In this example you will find:
- ApiClient built for http://httpbin.org/ web service.
- Simple (Synchronous) API calls example.
- Async API calls example processed with `oatpp::async::Executor`. See [Oatpp Coroutines](/docs/oatpp-coroutines/).

### Project layout

```
|- CMakeLists.txt                          // projects CMakeLists.txt
|- src/
|   |- DemoApiClient.hpp                   // ApiClient built for http://httpbin.org/ web service
|   |- DemoApiModels.hpp                   // DTOs objects for DemoApiClient
|   |- SimpleExample.hpp                   // Simple (Synchronous) API calls example
|   |- AsyncExample.hpp                    // Async API calls example
|   |- App.cpp                             // main is here
|   
|- test/                                   // test folder
|- utility/install-oatpp-modules.sh        // utility script to install required oatpp-modules.
```
---

### Build and Run

#### Using CMake

**Requires** 

- Curl installed. You may refer to this sh script - how to install curl - 
[install-curl.sh](https://github.com/oatpp/oatpp-curl/blob/master/utility/install-deps/install-curl.sh).  
Or try something like ```$ apk add curl-dev```

- `oatpp` and `oatpp-curl` modules installed. You may run `utility/install-oatpp-modules.sh` 
script to install required oatpp modules.

```bash
$ mkdir build && cd build
$ cmake ..
$ make 
$ ./example-api-client-exe      # - run application.
```

#### In Docker

```bash
$ docker build -t example-api-client .
$ docker run -t example-api-client
```
---

### ApiClient declaration overview

Use ```API_CALL``` for simple (synchronous) calls.  
Use ```API_CALL_ASYNC``` for non-blocking Async calls.

```cpp
class DemoApiClient : public oatpp::web::client::ApiClient {
#include OATPP_CODEGEN_BEGIN(ApiClient)
  
  API_CLIENT_INIT(DemoApiClient)
  
  ...
  
  API_CALL("GET", "get", doGet)
  API_CALL("POST", "post", doPost, BODY_STRING(String, body))
  
  ...
  
  API_CALL_ASYNC("GET", "get", doGetAsync)
  API_CALL_ASYNC("POST", "post", doPostAsync, BODY_STRING(String, body))

  ...
  
#include OATPP_CODEGEN_END(ApiClient)
};
```

### Example calls overview

#### SimpleExample.hpp

```cpp
{
  auto data = client->doGet()->readBodyToString();
  OATPP_LOGD(TAG, "[doGet] data='%s'", data->c_str());
}

{
  auto data = client->doPost("Some data passed to POST")->readBodyToString();
  OATPP_LOGD(TAG, "[doPost] data='%s'", data->c_str());
}
```

#### AsyncExample.hpp

```cpp
class SendCoroutine : public oatpp::async::Coroutine<SendCoroutine> {
private:
  std::shared_ptr<DemoApiClient> m_client;
public:

  SendCoroutine(const std::shared_ptr<DemoApiClient> client) : m_client(client) {}

  Action act() override {
    return m_client->doPostAsync("<POST-DATA-HERE>").callbackTo(&SendDtoCoroutine::onResponse);
  }

  Action onResponse(const std::shared_ptr<Response>& response) {
    return response->readBodyToStringAsync().callbackTo(&SendDtoCoroutine::onBody);
  }

  Action onBody(const oatpp::String& body) {
    OATPP_LOGD(TAG, "[SendCoroutine. doPostAsync] data='%s'", body->c_str());
    return finish();
  }

};
```

### Request executor configuration

In ```App.cpp``` method ```run```.
Try to substitute different ```RequestExecutors``` by switching from Curl to oatpp built-in request executor.

```cpp

void run(){
  
  /* Create ObjectMapper for serialization of DTOs  */
  auto objectMapper = oatpp::parser::json::mapping::ObjectMapper::createShared();
  
  /* Create RequestExecutor which will execute ApiClient's requests */
  //auto requestExecutor = createOatppExecutor();  // <-- Uncomment this
  auto requestExecutor = createCurlExecutor();     // <-- Comment this
  
  /* DemoApiClient uses DemoRequestExecutor and json::mapping::ObjectMapper */
  /* ObjectMapper passed here is used for serialization of outgoing DTOs */
  auto client = DemoApiClient::createShared(requestExecutor, objectMapper);
  
  SimpleExample::runExample(client);
  AsyncExample::runExample(client);
  
}

```
