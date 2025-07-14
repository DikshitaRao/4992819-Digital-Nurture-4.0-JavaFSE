#  Spring Boot REST API – Get Country by Code (Case-Insensitive)

##  Objective

In this exercise, I built a RESTful web service using Spring Boot that allows us to fetch the details of a country **based on its code**, like `IN`, `us`, or `jp`.

What’s interesting here is:
- The country code matching is **case-insensitive**
- The country data is loaded from an **XML configuration file** (`country.xml`)
- I used a **service layer** to separate logic cleanly
- The result is returned as a **JSON** response, perfect for front-end apps or APIs

---

##  What I Built

- A REST endpoint: `GET /country/{code}`
- It takes a **2-letter country code** as input
- It returns the **name and code** of that country from a predefined list

---

##  Steps I Followed

### 1️ Updated `country.xml` to Define a List of Countries

In `src/main/resources/country.xml`, I defined a list of 4 countries using a Spring bean with `id="countryList"`.

```xml
<bean id="countryList" class="java.util.ArrayList">
    <constructor-arg>
        <list>
            <bean class="com.cognizant.springlearn.Country">
                <property name="code" value="IN"/>
                <property name="name" value="India"/>
            </bean>
            <bean class="com.cognizant.springlearn.Country">
                <property name="code" value="US"/>
                <property name="name" value="United States"/>
            </bean>
            <bean class="com.cognizant.springlearn.Country">
                <property name="code" value="JP"/>
                <property name="name" value="Japan"/>
            </bean>
            <bean class="com.cognizant.springlearn.Country">
                <property name="code" value="DE"/>
                <property name="name" value="Germany"/>
            </bean>
        </list>
    </constructor-arg>
</bean>
