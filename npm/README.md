# Variable Name Converter API

Variable Name Converter transforms variable names between different naming conventions including camelCase, snake_case, PascalCase, and kebab-case.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)
[![npm version](https://img.shields.io/npm/v/@apiverve/variablenameconverter.svg)](https://www.npmjs.com/package/@apiverve/variablenameconverter)

This is a Javascript Wrapper for the [Variable Name Converter API](https://apiverve.com/marketplace/variablenameconverter?utm_source=npm&utm_medium=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/variablenameconverter
```

Using yarn:
```shell
yarn add @apiverve/variablenameconverter
```

---

## Configuration

Before using the Variable Name Converter API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=readme)

The Variable Name Converter API documentation is found here: [https://docs.apiverve.com/ref/variablenameconverter](https://docs.apiverve.com/ref/variablenameconverter?utm_source=npm&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const variablenameconverterAPI = require('@apiverve/variablenameconverter');
const api = new variablenameconverterAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  "variables": [
    "myVariableName",
    "another_var_name",
    "SomeClassName",
    "kebab-case-name",
    "CONSTANT_VALUE"
  ],
  "to": "snake_case"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  "variables": [
    "myVariableName",
    "another_var_name",
    "SomeClassName",
    "kebab-case-name",
    "CONSTANT_VALUE"
  ],
  "to": "snake_case"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  "variables": [
    "myVariableName",
    "another_var_name",
    "SomeClassName",
    "kebab-case-name",
    "CONSTANT_VALUE"
  ],
  "to": "snake_case"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "results": [
      {
        "original": "myVariableName",
        "converted": "my_variable_name"
      },
      {
        "original": "another_var_name",
        "converted": "another_var_name"
      },
      {
        "original": "SomeClassName",
        "converted": "some_class_name"
      },
      {
        "original": "kebab-case-name",
        "converted": "kebab_case_name"
      },
      {
        "original": "CONSTANT_VALUE",
        "converted": "c_o_n_s_t_a_n_t__v_a_l_u_e"
      }
    ],
    "count": 5,
    "targetFormat": "snake_case"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=npm&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
