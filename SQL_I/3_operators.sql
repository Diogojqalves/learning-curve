-- <, >, <=, >=, =, <>, AND, OR, IN
-- <> not equak to
SELECT name, major
FROM student
WHERE major <> 'Law';

SELECT *
FROM student
WHERE student_id <= 3 AND name <> 'Tom';

SELECT *
FROM student
WHERE name IN ('Tom', 'John', 'Mike');

SELECT *
FROM student
WHERE name IN ('Tom', 'John', 'Mike') AND student_id > 2;