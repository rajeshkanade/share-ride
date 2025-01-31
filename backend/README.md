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


# User Login

## Endpoint
`/users/login`

## Description
`This endpoint is used to log in an existing user.`

## Method
POST

## Request Body
The request body should be a JSON object with the following fields:

 - `email` : A string representing a valid email address (required)
 - `password` : A string with a minimum length of 6 characters (required)
 - `Example` : Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```
## Response Body 
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

## Validation Error
`Status Code`: 400 Bad Request
`Body`: A JSON object containing the validation errors.
`Example`:
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
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
## Authentication Error
`Status Code`: 401 Unauthorized
`Body`: A JSON object containing an error message.
`Example`:
```json
{
  "message": "Invalid email or password"
}
```


# User Profile

## Endpoint
`/users/profile`

## Description
`This endpoint is used to get the profile of the authenticated user.`

## Method
GET

## Request Header
Authorization: Bearer token (required)

## Responses
`Success`
`Status Code: 200 OK`
`Body: A JSON object containing the user profile information.`
### Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}

```

## Authentication Error
`Status Code`: 400 Unathorized
`Body`: A JSON object containing an error message.
`Example`:
```json
{
  "message": "Authentication required"
}

```

# User Logout 

## Endpoint 
`/users/logout`

## Description 
`This endpoint is used to log out the authenticated user.`

## Method
GET

## Request Header
Authorization: Bearer token (required)

## Responses
`Success`
`Status Code: 200 OK`
`Body: A JSON object containing the user profile information.`
### Example:
```json
{
  "message": "Logout successfully"
}

```

## Authentication Error
`Status Code`: 401 Unathorized
`Body`: A JSON object containing an error message.
`Example`:
```json
{
  "message": "Unauthorized Access"
}
```

<br>
<br>

# Captain Registration 

## Endpoint

`/captains/register`

### Description
This endpoint is used to register a new captain.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 8 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `model`: A string with a minimum length of 3 characters (required)
  - `type`: A string representing the type of vehicle (required, one of ["car", "motorcycle", "auto", "van"])
  - `capacity`: An integer representing the capacity of the vehicle (required, minimum 1)
- `location`: An object containing:
  - `lat`: A number representing the latitude (optional)
  - `long`: A number representing the longitude (optional)

## Example: Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "model": "Toyota",
    "type": "car",
    "capacity": 4
  },
  "location": {
    "lat": 12.9716,
    "long": 77.5946
  }
}
```
## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the generated token and captain information.

Example:
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "model": "Toyota",
      "type": "car",
      "capacity": 4
    },
    "location": {
      "lat": 12.9716,
      "long": 77.5946
    },
    "status": "inactive",
    "socketId": null
  }
}
```

### Validation Error
- **Status Code**: 400 Bad Request
- **Body**: A JSON object containing the validation errors.
- **Example**:
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Please provide a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 8 character long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 character long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 character long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Model must be at least 3 character long",
      "param": "vehicle.model",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.type",
      "location": "body"
    }
  ]
}

```
### Authentication Error
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "User already exists"
}
```