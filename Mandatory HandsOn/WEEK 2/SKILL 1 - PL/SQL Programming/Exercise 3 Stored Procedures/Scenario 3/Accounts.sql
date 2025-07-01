CREATE TABLE Accounts (
                          AccountID NUMBER PRIMARY KEY,
                          Balance NUMBER
);
INSERT INTO Accounts VALUES (201, 5000);
INSERT INTO Accounts VALUES (202, 3000);
COMMIT;
