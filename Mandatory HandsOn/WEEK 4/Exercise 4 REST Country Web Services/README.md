#  Spring Boot Hands-On: Country REST Web Service

## Objective

In this hands-on, I built a simple RESTful web service using **Spring Boot** that returns the details of a country (India 🇮🇳) by loading the data from an **XML-based Spring configuration** (`country.xml`).

This was an extension of the `spring-learn` project previously created.

---

##  API Details

- **Endpoint URL**: `/country`
- **HTTP Method**: `GET`
- **Controller**: `CountryController.java`
- **Bean Source**: Loaded from `country.xml`
- **Response Format**: JSON

---

##  Steps Performed

### 1. Created the Bean Configuration in `country.xml`

Located in `src/main/resources/country.xml`:

```xml
<bean id="country" class="com.cognizant.springlearn.Country">
    <property name="code" value="IN" />
    <property name="name" value="India" />
</bean>
