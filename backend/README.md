# API Documentation


# User Registration 

## Endpoint

`/users/register`

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

## Example: Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```


## Responses
Success
Status Code: 201 Created
Body: A JSON object containing the generated token and user information.

### Response Body
The request body should be a JSON object with the following fields:
-`user` - (object) : 
  - `fullname`: An object containing:
    - `firstname`: A string with a minimum length of 3 characters (required)
    - `lastname`: A string with a minimum length of 3 characters (optional)
  - `email`: A string representing a valid email address (required)
  - `password`: A string with a minimum length of 6 characters (required)
-`token` : A string with jwt token

## Example: Response

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "socketId": null
  }
}
```


## Error
-Status Code: 400 Bad Request
-Body: A JSON object containing an error message.

-Validation Error
-Status Code: 400 Bad Request
-Body: A JSON object containing the validation errors.

## Example: Error Response Body

The error response body should be a JSON object with the following fields:

- `errors`: An array of error objects containing:
  - `msg`: A string describing the error message
  - `param`: A string indicating the parameter that caused the error
  - `location`: A string indicating the location of the parameter (e.g., "body")


## Error Example:

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be 6 character long",
      "param": "password",
      "location": "body"
    }
  ]
}

```