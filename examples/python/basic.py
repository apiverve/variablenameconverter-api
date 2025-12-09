"""
Variable Name Converter API - Basic Usage Example

This example demonstrates the basic usage of the Variable Name Converter API.
API Documentation: https://docs.apiverve.com/ref/variablenameconverter
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/variablenameconverter'

def call_variablenameconverter_api():
    """
    Make a POST request to the Variable Name Converter API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;variables&#x27;: [
        &#x27;myVariableName&#x27;,
        &#x27;another_var_name&#x27;,
        &#x27;SomeClassName&#x27;,
        &#x27;kebab-case-name&#x27;,
        &#x27;CONSTANT_VALUE&#x27;
    ],
    &#x27;to&#x27;: &#x27;snake_case&#x27;
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Variable Name Converter API...\n')

    result = call_variablenameconverter_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
