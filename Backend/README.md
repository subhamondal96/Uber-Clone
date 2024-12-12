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
