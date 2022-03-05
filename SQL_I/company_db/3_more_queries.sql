SELECT * FROM employee; -- find all employees

SELECT *
FROM client;

-- Find all employees ordered by salary
SELECT *
FROM employee
ORDER BY salary DESC;

--  Find all employees ordered by sex then name
SELECT *
FROM employee
ORDER BY sex, first_name, last_name;

-- Find the first 5 employees in the table
SELECT first_name AS forename, last_name AS surname
FROM employee
LIMIT 5;

--Find out all the different genders
SELECT DISTINCT sex
FROM employee;

-- Find number of employees
SELECT COUNT(emp_id)
FROM employee;

--Find number of female employees born after 1970
SELECT COUNT(emp_id)
FROM employee
WHERE sex = 'F' AND birth_day > '1971-01-01';

-- FIND the average of all employee´s salaries
SELECT AVG (salary)
FROM employee;

-- FIND the average of all male employee´s salaries
SELECT AVG (salary)
FROM employee
WHERE sex = 'M';

-- FIND the sum of all employee´s salaries
SELECT SUM (salary)
FROM employee;

--Find out how many males and females there are
SELECT COUNT(sex), sex
FROM employee
GROUP BY sex;

--Find out the total sales or each salesman
SELECT SUM(total_sales), emp_id
FROM works_with
GROUP BY emp_id;

--How much each client spends
SELECT SUM(total_sales), client_id
FROM works_with
GROUP BY client_id;