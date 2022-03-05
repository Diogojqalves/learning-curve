-- % = any # characters, _ = one character

-- Find any clients that are an LLC
SELECT *
FROM client
WHERE client_name LIKE '%LLC';

-- find any branch suppliers who are in the label business
SELECT *
FROM branch_supplier
WHERE supplier_name LIKE '%Label%';

--find any employee born in October
SELECT *
FROM employee
WHERE birth_day LIKE '____-10%';