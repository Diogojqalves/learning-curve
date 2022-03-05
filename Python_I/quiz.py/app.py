from question import Question
question_prompts = [
    "What color are apples?\n(a)Red/Green \n(b)Purple\n(c)Orange\n\nChoose letter: ",
    "What color are bananas?\n(a)Yellow\n(b)Red\n(c)Blue\n\nChoose letter: ",
    "What color are strawberries?\n(a)Yellow\n(b)Red\n(c)Blue\n\nChoose letter: "
]

questions = [
    Question(question_prompts[0], "a" ),
    Question(question_prompts[1], "c" ),
    Question(question_prompts[2], "b" )
]

def run_test(questions):
    score = 0
    for question in questions:
        answer = input(question.prompt) #ask question to the user
        if answer == question.answer:
            score += 1
    print("You got " + str(score) + "/" + str(len(questions)))

run_test(questions)