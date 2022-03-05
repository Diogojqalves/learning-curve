SELECT * 
FROM student;

SELECT name 
FROM student;

SELECT name, major
FROM student;

SELECT student.name
FROM student;

SELECT student.name, student.major
FROM student
ORDER BY name; -- DESC to invert order

SELECT *
FROM student
ORDER BY major, student_id;

SELECT *
FROM student
ORDER BY student_id DESC -- from last to first
LIMIT 2; -- only gives 2 results

SELECT *
FROM student
WHERE major = 'Law';