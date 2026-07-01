CREATE TABLE Accounts (
AccountID NUMBER PRIMARY KEY,
CustomerID NUMBER,
AccountType VARCHAR2(20),
Balance NUMBER,
LastModified DATE
);

CREATE TABLE Employees (
EmployeeID NUMBER PRIMARY KEY,
Name VARCHAR2(100),
Position VARCHAR2(50),
Salary NUMBER,
Department VARCHAR2(50),
HireDate DATE
);

INSERT INTO Accounts
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts
VALUES (2, 2, 'Checking', 1500, SYSDATE);

INSERT INTO Employees
VALUES (
1,
'Alice Johnson',
'Manager',
70000,
'HR',
TO_DATE('2015-06-15','YYYY-MM-DD')
);

INSERT INTO Employees
VALUES (
2,
'Bob Brown',
'Developer',
60000,
'IT',
TO_DATE('2017-03-20','YYYY-MM-DD')
);

COMMIT;

-- SCENARIO 1 : Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

```
UPDATE Accounts
SET Balance = Balance + (Balance * 0.01)
WHERE AccountType = 'Savings';

COMMIT;
```

END;
/

EXEC ProcessMonthlyInterest;

SELECT * FROM Accounts;

-- SCENARIO 2 : Update Employee Bonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
p_department IN VARCHAR2,
p_bonus_percent IN NUMBER
)
AS
BEGIN

```
UPDATE Employees
SET Salary = Salary + (Salary * p_bonus_percent / 100)
WHERE Department = p_department;

COMMIT;
```

END;
/

EXEC UpdateEmployeeBonus('IT', 10);

SELECT * FROM Employees;

-- SCENARIO 3 : Transfer Funds

CREATE OR REPLACE PROCEDURE TransferFunds(
p_from_account IN NUMBER,
p_to_account IN NUMBER,
p_amount IN NUMBER
)
AS
v_balance NUMBER;
BEGIN

```
SELECT Balance
INTO v_balance
FROM Accounts
WHERE AccountID = p_from_account;

IF v_balance < p_amount THEN

    DBMS_OUTPUT.PUT_LINE('Insufficient balance.');

ELSE

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Funds transferred successfully.'
    );

END IF;
```

EXCEPTION

```
WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Account not found.');

WHEN OTHERS THEN
    ROLLBACK;

    DBMS_OUTPUT.PUT_LINE(
        'Error: ' || SQLERRM
    );
```

END;
/

EXEC TransferFunds(1, 2, 500);

SELECT * FROM Accounts;
