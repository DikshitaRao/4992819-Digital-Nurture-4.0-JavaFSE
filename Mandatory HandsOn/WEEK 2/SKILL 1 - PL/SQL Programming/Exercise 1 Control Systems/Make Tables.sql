-- Drop if exists (for repeated testing)
BEGIN
EXECUTE IMMEDIATE 'DROP TABLE loans';
EXECUTE IMMEDIATE 'DROP TABLE customers';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create customers table
CREATE TABLE customers (
                           customer_id NUMBER PRIMARY KEY,
                           name VARCHAR2(100),
                           age NUMBER,
                           balance NUMBER,
                           is_vip CHAR(1) DEFAULT 'N'
);

-- Create loans table
CREATE TABLE loans (
                       loan_id NUMBER PRIMARY KEY,
                       customer_id NUMBER,
                       due_date DATE,
                       interest_rate NUMBER(5,2),
                       FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert sample customers
INSERT INTO customers VALUES (1, 'Alice', 65, 12000, 'N');
INSERT INTO customers VALUES (2, 'Bob', 45, 8000, 'N');
INSERT INTO customers VALUES (3, 'Charlie', 70, 15000, 'N');

-- Insert sample loans
INSERT INTO loans VALUES (101, 1, SYSDATE + 20, 8.5);
INSERT INTO loans VALUES (102, 2, SYSDATE + 40, 7.5);
INSERT INTO loans VALUES (103, 3, SYSDATE + 10, 9.0);

COMMIT;
