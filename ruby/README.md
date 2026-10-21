# Variable Name Converter API - Ruby Gem

Variable Name Converter transforms variable names between different naming conventions including camelCase, snake_case, PascalCase, and kebab-case.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_variablenameconverter'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_variablenameconverter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_variablenameconverter'

# Initialize the client
client = APIVerve::Variablenameconverter::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  variables: myVariableName,another_var_name,SomeClassName,kebab-case-name,CONSTANT_VALUE,
  to: "snake_case"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ variables: myVariableName,another_var_name,SomeClassName,kebab-case-name,CONSTANT_VALUE, to: "snake_case" })
  puts response["data"]
rescue APIVerve::Variablenameconverter::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Variablenameconverter::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Variablenameconverter::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/variablenameconverter?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/variablenameconverter?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/variablenameconverter?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
