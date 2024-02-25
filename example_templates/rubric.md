# Project 4 (P4) Grading Rubric


## Code reviews

- The Gradescope autograder will make deductions based on the rubric provided below.
- To ensure that you don't lose any points, you must **review** the rubric and make sure that you have followed the instructions provided in the project correctly.
- If you **fail** the **public tests** for a function or **hardcode** the answers to that question, you will automatically lose **all** points for that question.

## Rubric

### General guidelines:

- Did not save the notebook file prior to running the cell containing "export". We cannot see your output if you do not save before generating the zip file. This deduction will become stricter for future projects. (-3)
- Functions are defined more than once. (-3)
- Import statements are not all placed at the top of the notebook. (-1)
- Used loops or other material not covered in class yet. (-20)

### Question specific guidelines:

- `damage` (4)
	- function output is incorrect when the `attacker` needs to choose its physical attack (-2)
	- function output is incorrect when the `attacker` needs to choose its special attack (-2)

- q1 (3)
	- correct arguments are not passed to `damage` function (-2)

- q2 (3)
	- correct arguments are not passed to `damage` function (-2)

- `type_bonus` (4)
	- function output is incorrect when the `defender` has only one type (-2)
	- function output is incorrect when the `defender` has two types (-2)

- q3 (3)
	- correct arguments are not passed to `type_bonus` function (-2)

- q4 (3)
	- correct arguments are not passed to `type_bonus` function (-2)

- `get_num_types` (1)
	- function logic is incorrect (-1)

- `effective_damage` (5)
	- `get_num_types` function is not used by `effective_damage` (-1)
	- function output is incorrect when the `attacker` has only one type (-2)
	- function output is incorrect when the `attacker` has two types (-2)

- q5 (3)
	- correct arguments are not passed to `effective_damage` function (-2)

- q6 (3)
	- correct arguments are not passed to `effective_damage` function (-2)

- q7 (3)
	- correct arguments are not passed to `effective_damage` function (-2)

- `num_hits` (4)
	- function output is incorrect when the `attacker` can do non-zero effective damage to the `defender` (-2)
	- function output is incorrect when the `attacker` cannot do any damage to the `defender` (-2)

- q8 (3)
	- correct arguments are not passed to `num_hits` function (-2)

- q9 (3)
	- correct arguments are not passed to `num_hits` function (-2)

- q10 (3)
	- correct arguments are not passed to `num_hits` function (-2)

- `battle` (8)
	- function output is incorrect when the two Pokemon can do damage to each other and do not take the same number of hits to defeat each other (-3)
	- function output is incorrect when the two Pokemon can do damage to each other but take the same number of hits to defeat each other (-3)
	- function output is incorrect when one or more of the Pokemon cannot damage the other (-2)

- q11 (4)
	- correct arguments are not passed to `battle` function (-2)

- q12 (4)
	- correct arguments are not passed to `battle` function (-2)

- q13 (4)
	- correct arguments are not passed to `battle` function (-2)

- q14 (4)
	- correct arguments are not passed to `battle` function (-2)

- q15 (4)
	- correct arguments are not passed to `battle` function (-2)

- q16 (4)
	- correct arguments are not passed to `battle` function (-2)

- `friendship_score` (4)
	- function output is incorrect when the stat difference of the two Pokemon is exactly 20 (-1)
	- function output is incorrect when the two Pokemon have the same types but not necessarily the same corresponding types (-1)
	- function logic is incorrect (-2)

- q17 (4)
	- correct arguments are not passed to `friendship_score` function (-2)

- q18 (4)
	- correct arguments are not passed to `friendship_score` function (-2)

- q19 (4)
	- correct arguments are not passed to `friendship_score` function (-2)

- q20 (4)
	- correct arguments are not passed to `friendship_score` function (-2)

