CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);
INSERT INTO Customers
VALUES (
    1,
    'Robert',
    TO_DATE('1950-05-15','YYYY-MM-DD'),
    20000,
    SYSDATE
);

INSERT INTO Customers
VALUES (
    2,
    'John',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    15000,
    SYSDATE
);

INSERT INTO Loans
VALUES (
    1,
    1,
    5000,
    8,
    SYSDATE,
    SYSDATE + 10
);

INSERT INTO Loans
VALUES (
    2,
    2,
    6000,
    10,
    SYSDATE,
    ADD_MONTHS(SYSDATE,12)
);

COMMIT;
DECLARE

    v_age NUMBER;

BEGIN

    FOR cust IN (

        SELECT c.CustomerID,
               c.DOB,
               l.LoanID
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID

    )

    LOOP

        v_age := FLOOR(
            MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12
        );

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = cust.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied for Customer ID: '
                || cust.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/
BEGIN

    FOR cust IN (
        SELECT CustomerID,
               Balance
        FROM Customers
    )

    LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'VIP Customer: '
                || cust.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/
SELECT * FROM Customers;
UPDATE Loans
SET EndDate = SYSDATE + 10
WHERE LoanID = 1;

COMMIT;
BEGIN

    FOR loan_rec IN (

        SELECT c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID

        WHERE l.EndDate
        BETWEEN SYSDATE AND SYSDATE + 30

    )

    LOOP

        DBMS_OUTPUT.PUT_LINE(

            'Reminder: Loan '
            || loan_rec.LoanID
            || ' for customer '
            || loan_rec.Name
            || ' is due on '
            || loan_rec.EndDate

        );

    END LOOP;

END;
/