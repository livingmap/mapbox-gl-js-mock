# mapbox-gl-js-mock

A fork from the mapbox/mapbox-gl-js-mock project. For us this project represents a way to interact with mapbox in our testing environment, without it failing due toa lack of webGL.

In terms of usage; It is worth noting that you should seriously consider if this mock is needed for your usecase. Testing(/using) an external library in your unit tests often is a signal your unit tests are not up-to scratch. 

### Usage:

```
$ npm install github:livingmap/mapbox-gl-js-mock
```

To make use of this mock, feed this class into your mocking tools. For us right now, we are using Jest, and something like this should suffice:

```
jest.mock("mapbox-gl", () => require("mapbox-gl-js-mock"));
```

#### (legacy) Usage:

__Note: the legacy method is not recommended due to bad problematic side effects it causes. Please rever to the above usage section if you want to use this package__

In webpack, add a module-resolve rule that will resolve the mapbox import to the mock import when building for the test environment. This ensures when testing you use the mock, and on normal run mode the actual mapbox-gl instance is used.



### Developer Note:

- please commit this WITH a builded version. Since this is not a npm package, but is referenced straight from through the NPM git protocol, it requires a build version of the code to exist. 
