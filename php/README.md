# Variable Name Converter API - PHP Package

Variable Name Converter transforms variable names between different naming conventions including camelCase, snake_case, PascalCase, and kebab-case.

## Installation

Install via Composer:

```bash
composer require apiverve/variablenameconverter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Variablenameconverter\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'variables' => myVariableName,another_var_name,SomeClassName,kebab-case-name,CONSTANT_VALUE,
    'to' => 'snake_case'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Variablenameconverter\Client;
use APIVerve\Variablenameconverter\Exceptions\APIException;
use APIVerve\Variablenameconverter\Exceptions\ValidationException;

try {
    $response = $client->execute(['variables' => myVariableName,another_var_name,SomeClassName,kebab-case-name,CONSTANT_VALUE, 'to' => 'snake_case']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/variablenameconverter?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/variablenameconverter?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/variablenameconverter?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
