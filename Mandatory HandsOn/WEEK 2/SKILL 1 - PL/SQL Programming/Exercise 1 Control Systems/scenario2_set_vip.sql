BEGIN
FOR cust IN (SELECT customer_id, age, loan_interest FROM customers) LOOP
    IF cust.age > 60 THEN
UPDATE customers
SET loan_interest = loan_interest * 0.99
WHERE customer_id = cust.customer_id;
END IF;
END LOOP;
END;
/
