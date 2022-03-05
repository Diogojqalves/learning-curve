SELECT * FROM student;

UPDATE student
SET major = 'Bio'
Where major = 'Biology';

UPDATE student
SET major = 'Comp Science'
Where student_id = 4;

UPDATE student
SET major = 'Biochemistry'
Where major = 'Bio' or major = 'Chemistry';

UPDATE student
SET name = 'Tom', major = 'Biochemistry'
Where student_id = 1;

UPDATE student
SET major = 'Comp Science';

DELETE FROM student
WHERE student_id = 3;

DELETE FROM student;