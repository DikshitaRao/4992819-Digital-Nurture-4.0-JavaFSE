#  Spring Boot RESTful Hello World API

##  What I Did

I created a simple **REST API** in my existing Spring Boot project (`spring-learn`) that returns a hardcoded message: `"Hello World!!"`.

---

## Endpoint Summary

- **Method:** GET
- **URL:** `/hello`
- **Response:** `Hello World!!`
- **Port:** `8083` (customized)

---

## Steps I Followed

### 1. Set the Server Port

In `application.properties`, I changed the default port to avoid conflict:
```properties
server.port=8083
