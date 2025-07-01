CREATE TABLE Employees (
                           EmpID NUMBER PRIMARY KEY,
                           Name VARCHAR2(100),
                           DepartmentID NUMBER,
                           Salary NUMBER
);
INSERT INTO Employees VALUES (1, 'Alice', 10, 50000);
INSERT INTO Employees VALUES (2, 'Bob', 10, 60000);
INSERT INTO Employees VALUES (3, 'Charlie', 20, 55000);
COMMIT;
