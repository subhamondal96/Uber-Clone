# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

---

### Request Body

The request body should be in JSON format and include the following fields:

-   **fullname** (object):
    -   **firstname** (string, required): User's first name (minimum 3 characters).
    -   **lastname** (string, optional): User's last name (minimum 3 characters).
-   **email** (string, required): User's email address (must be a valid email).
-   **password** (string, required): User's password (minimum 6 characters).

#### Example Request

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
```

---

### Example Response

The server will respond with the created user object and a JWT token.

#### Response Body

-   **user** (object):
    -   **fullname** (object):
        -   **firstname** (string): User's first name (minimum 3 characters).
        -   **lastname** (string): User's last name (minimum 3 characters).
    -   **email** (string): User's email address (must be a valid email).
    -   **password** (string): User's password (minimum 6 characters).
-   **token** (string): JWT Token

#### Example Response

```json
{
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "securepassword123"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## `/users/login ` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

---

### Endpoint

`/users/login`

---

### Request Body

The request body should be in JSON format and include the following fields:

-   **email** (string, required): User's email address (must be a valid email).
-   **password** (string, required): User's password (minimum 6 characters).

#### Example Request

```json
{
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
```

---

### Example Response

The server will respond with the authenticated user object and a JWT token.

#### Response Body

-   **user** (object):
    -   **fullname** (object):
        -   **firstname** (string): User's first name (minimum 3 characters).
        -   **lastname** (string): User's last name (minimum 3 characters).
    -   **email** (string): User's email address (must be a valid email).
    -   **password** (string): User's password (minimum 6 characters).
-   **token** (string): JWT Token

#### Example Response

```json
{
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "securepassword123"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

---

### Authentication

Requires a valid JWT token in the Authorization header:

---

### Example Response

The server will respond with the authenticated user's profile information.

#### Response Body

-   **user** (object):
    -   **fullname** (object):
        -   **firstname** (string): User's first name (minimum 3 characters).
        -   **lastname** (string): User's last name (minimum 3 characters).
    -   **email** (string): User's email address (must be a valid email).

#### Example Response

```json
{
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

---

## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`Get`

### Authentication

Requires a valid JWT token in the Authorization header or cookie:

---

### `/captains/register` Endpoint

## Description

Registers a new captain by creating a captain account with the provided information.

## HTTP Method

`POST`

## Request Body

The request body should be in JSON format and include the following fields:

-   **fullname** (object):
    -   **firstname** (string, required): Captain's first name (minimum 3 characters).
    -   **lastname** (string, optional): Captain's last name (minimum 3 characters).
-   **email** (string, required): Captain's email address (must be a valid email).
-   **password** (string, required): Captain's password (minimum 6 characters).

-   **vehicle** (object):
    -   **color** (string, required): Vehicle color (minimum 3 characters).
    -   **plate** (string, required): Vehicle plate number (minimum 3 characters).
    -   **capacity** (number, required): Vehicle passenger capacity (minimum 1).
    -   **vehicleType** (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

## Example Response

```json
{
    "captain": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "securepassword",
        "vehicle": {
            "color": "Red",
            "plate": "AB123CD",
            "capacity": 4,
            "vehicleType": "car"
        },
        "token": "jwt_token_example"
    }
}
```
