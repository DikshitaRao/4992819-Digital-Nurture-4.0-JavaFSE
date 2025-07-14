# Spring Boot Hands-On 1: Spring Web Project using Maven

##  Objective

This exercise walks through the creation and setup of a simple Spring Boot web project using Maven, with a focus on understanding the structure and purpose of each component. We used IntelliJ IDEA for implementation instead of Eclipse.

---

##  Steps Performed

### 1. Project Initialization

- Navigated to: [https://start.spring.io](https://start.spring.io)
- Configured project metadata:
    - **Group**: `com.cognizant`
    - **Artifact**: `spring-learn`
- Selected dependencies:
    - **Spring Web**
    - **Spring Boot DevTools**
- Clicked **Generate** to download the project as a ZIP.

---

### 2. Project Setup in IntelliJ

- Extracted the downloaded project ZIP.
- Opened IntelliJ and selected **File > Open** to load the `spring-learn` folder.
- IntelliJ automatically recognized it as a Maven project and synced dependencies.

---

### 3. Build Using Maven (with optional proxy)

Ran the following Maven command in terminal to build the project:

```bash
mvn clean package -Dhttp.proxyHost=proxy.cognizant.com -Dhttp.proxyPort=6050 \
-Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 \
-Dhttp.proxyUser=123456
