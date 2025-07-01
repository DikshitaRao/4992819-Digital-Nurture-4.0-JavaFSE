DECLARE
v_due_date DATE := SYSDATE + 30;
BEGIN
FOR loan_rec IN (
    SELECT loan_id, customer_id, due_date
    FROM loans
    WHERE due_date <= v_due_date
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || loan_rec.loan_id ||
                         ' for customer ' || loan_rec.customer_id ||
                         ' is due on ' || loan_rec.due_date);
END LOOP;
END;
/
