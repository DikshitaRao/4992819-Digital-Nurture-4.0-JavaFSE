#  Spring Hands-On 4: Loading Country Details from XML using Spring Core

##  Overview

In this exercise, I explored the basics of **Spring Core** and how to use **XML-based configuration** to define and load beans. The goal was to simulate an airline booking website that supports multiple countries and display one country's details by loading it through a Spring XML configuration.

---

##  What I Did

### 1. Created an XML Configuration (`country.xml`)

I started by creating an XML file inside `src/main/resources` called `country.xml`. This file holds a `<bean>` definition for a country.

I picked **India** (`IN`, `India`) as the country to configure. Here’s what the XML looked like:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="country" class="com.cognizant.springlearn.Country">
        <property name="code" value="IN" />
        <property name="name" value="India" />
    </bean>

</beans>
