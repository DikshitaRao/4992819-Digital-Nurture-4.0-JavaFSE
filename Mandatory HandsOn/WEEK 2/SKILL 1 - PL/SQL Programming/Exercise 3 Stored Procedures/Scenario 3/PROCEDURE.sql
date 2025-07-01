CREATE OR REPLACE PROCEDURE TransferFunds (
    FromAccountID IN NUMBER,
    ToAccountID IN NUMBER,
    Amount IN NUMBER
) IS
    InsufficientFunds EXCEPTION;
    FromBalance NUMBER;
BEGIN
    -- Get current balance
SELECT Balance INTO FromBalance FROM Accounts WHERE AccountID = FromAccountID;

IF FromBalance < Amount THEN
        RAISE InsufficientFunds;
END IF;

    -- Deduct from source
UPDATE Accounts
SET Balance = Balance - Amount
WHERE AccountID = FromAccountID;

-- Add to destination
UPDATE Accounts
SET Balance = Balance + Amount
WHERE AccountID = ToAccountID;

EXCEPTION
    WHEN InsufficientFunds THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient funds in the source account.');
WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An error occurred: ' || SQLERRM);
END;
/
