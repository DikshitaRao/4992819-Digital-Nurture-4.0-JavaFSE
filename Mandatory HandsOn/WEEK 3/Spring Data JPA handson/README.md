#  Library Management Application - Week 3

This is a simple Java-based library management system created using **Spring Framework**, **Hibernate ORM**, and **Spring Data JPA**. The purpose of this project is to practice setting up a Maven-based Spring application, explore ORM concepts, and understand how Hibernate and JPA work in real applications.

---

##  Exercise 4: Creating and Configuring a Maven Project

To start, a new Maven project was created with the name `LibraryManagement`. All the required dependencies for Spring, Hibernate, and JPA were added in the `pom.xml`. This included:

- Spring Context (to manage beans and IoC container)
- Spring AOP (for cross-cutting concerns)
- Spring Web MVC (for web layer, optional)
- Hibernate Core (for ORM functionality)
- Spring Data JPA (to simplify database interaction)
- H2 Database (in-memory DB for quick testing)

Maven's compiler plugin was also configured to use **Java 1.8**, as most Spring and Hibernate features are compatible with this version.

---

##  Exercise 5: Configuring the Spring IoC Container

In this step, an XML file named `applicationContext.xml` was created under `src/main/resources`. This file acts as the main Spring configuration.

Here, beans for `BookService` and `BookRepository` were defined, and dependency injection was set up using setter injection. A main class was used to load the Spring context and fetch the `bookService` bean. The project successfully ran, confirming the IoC setup was working.

---

##  Concepts and Objectives Explained

### 1️ Why ORM is Needed and What Are Its Benefits

In Java applications, when we interact with databases, we often deal with SQL queries, result sets, and manual conversions. ORM (Object Relational Mapping) simplifies this by allowing us to use Java objects directly to represent database tables. Instead of writing SQL manually, we work with entities and let the ORM tool handle the database layer.

**Benefits of ORM:**
- Reduces repetitive JDBC code
- Makes code cleaner and easier to maintain
- Handles transactions and session management internally
- Makes switching databases easier

---

### 2️ Importance of Spring Data JPA

Spring Data JPA makes it even easier to work with JPA and Hibernate. Normally with JPA or Hibernate, we have to write DAO classes, queries, and handle transactions manually. Spring Data JPA handles most of that automatically.

With just an interface extending `JpaRepository`, Spring can generate all the CRUD methods for us. It also supports custom queries and is very flexible.

We used an H2 in-memory database for this project, but the same code can be connected to MySQL or PostgreSQL easily.

---

### 3️ Core Components of Hibernate

Here are the important parts of the Hibernate framework:

- **SessionFactory**: A heavyweight object that's created once and used to get sessions. It connects to the database.
- **Session**: Represents a connection to the DB. Used to perform operations like save, update, delete.
- **Transaction**: Used to wrap DB operations inside a transaction (commit or rollback).
- **Connection Provider**: Gives the underlying JDBC connection.

These objects together handle how data is stored and retrieved in Hibernate.

---

### 4⃣ ORM Using Hibernate (Two Ways)

Hibernate supports two main ways to configure how classes map to tables:

#### a) XML Configuration
- Write a `.hbm.xml` file to describe how a class maps to a table.
- Requires a separate `hibernate.cfg.xml` to load configuration.

#### b) Annotation Configuration
- Use annotations like `@Entity`, `@Id`, and `@Table` directly in the Java class.
- Easier and cleaner than XML.
- Used in this project for mapping the `Book` class.

---

### 5️ Difference Between JPA, Hibernate, and Spring Data JPA

| Concept             | Description |
|---------------------|-------------|
| **JPA**             | A standard/specification that defines how Java apps should interact with databases. It doesn't do anything by itself. |
| **Hibernate**       | A popular tool that implements the JPA specification. It is an ORM framework. |
| **Spring Data JPA** | A wrapper over JPA that simplifies it further. Removes the need to write boilerplate DAO code. |

So in short:
- JPA = Rules
- Hibernate = Tool that follows those rules
- Spring Data JPA = Helper that automates the tool

---

## ▶ How to Run This Project

