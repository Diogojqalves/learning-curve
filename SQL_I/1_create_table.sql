DROP TABLE student;

CREATE TABLE student (
    -- student_id INT AUTO_INCREMENT, -- adds id per order
    student_id INT,
    name VARCHAR(20) NOT NULL, -- can´t accept empty value
  --  major VARCHAR(20) UNIQUE, -- can´t repeat
    major VARCHAR(20) DEFAULT 'undecided', -- gives default value when empty
    PRIMARY KEY(student_id)
);


--DESCRIBE student; --checks success
--DROP TABLE student; --Drop Table
--ALTER TABLE student ADD gpa DECIMAL(3);  --adds a new column
--ALTER TABLE student DROP COLUMN gpa;
SELECT * FROM student; --takes all the info from student table

INSERT INTO student VALUES(1, 'Jack', 'Biology');

INSERT INTO student VALUES(2, 'Kate', 'Sociology');

-- INSERT INTO student(student_id, name) VALUES(3, 'Claire');
INSERT INTO student VALUES(3, 'Claire', 'Chemistry');

INSERT INTO student VALUES(4, 'Jack', 'Law');
INSERT INTO student VALUES(5, 'Mike', 'Computer Science');
INSERT INTO student(student_id, name) VALUES(6, 'John');
-- AUTO_INCREMENT studentid example: INSERT INTO student(name, major) VALUES('Jack', 'Medicine')