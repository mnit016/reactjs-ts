import { useState, useEffect } from "react";
import { getPassword, getUsername } from "../common/local-storage";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FormControl, RadioGroup, FormControlLabel, Button, Radio } from "@material-ui/core";
import { Loading, showLoading, hideLoading } from "./loading"

interface Choices {
    A: string;
    B: string;
    C: string;
    D: String
}

interface Question {
    id: number;
    question: string;
    choices: Choices;
}

interface Answer {
    id: number;
    choice: string
}

interface QuizResponse {
    result: Question[]
}

interface QuizSubmitResponse {
    status: string;
    incorrectAnswers: Question[]
}

export default function Quizz() {
    const [questions, setQuestions] = useState<Question[]>()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const history = useHistory();
    useEffect(() => {
        if (getPassword() !== "sa" && getUsername() !== "sa") {
            history.push("/403")
        }
        showLoading()
        axios.get<QuizResponse>("https://react14-contest-easy-quiz-app.herokuapp.com/quiz")
        .then(response => {
            setQuestions(response.data.result)
            hideLoading()
        })
    }, [])

    const [selected, setSelected] = useState('')
    const [answers, setAnswers] = useState<Answer[]>([])

    const [result, setResult] = useState<QuizSubmitResponse>()

    const submitAnswer = () => {
        console.log(answers)
        showLoading()
        axios.post<QuizSubmitResponse>("https://react14-contest-easy-quiz-app.herokuapp.com/quiz/answer", {"listAnswer": answers})
        .then(Response => {
            setResult(Response.data)
            hideLoading()
        })
    }

    const nextQuestion = () => {
        if (questions) {
            setCurrentQuestion(currentQuestion + 1)
            if(questions.length > currentQuestion + 1) 
                chooseQuestion(currentQuestion + 1)
            else
                submitAnswer()
        }
    }

    const chooseAnswer = (value: string) => {
        setSelected(value)
        let indexDuplicated = -1;
        let newAnswers
        if (questions) {
            answers.forEach((item, index) => {
                if (item.id === questions[currentQuestion].id)
                    indexDuplicated = index
            })
            if (indexDuplicated !== -1)
                newAnswers = [...answers.slice(0, indexDuplicated), ...answers.slice(indexDuplicated+1, answers.length)]
            else
                newAnswers = [...answers]
            newAnswers.push({id: questions[currentQuestion].id, choice: value})
            setAnswers(newAnswers)
        }
    }

    const setQuestion = (index: number) => {
        chooseQuestion(index)
        setCurrentQuestion(index)
    }

    const chooseQuestion = (index: number) => {
        if (questions) {
            let choice = ''
            answers.forEach((item) => {
                if (item.id === questions[index].id)
                    choice = item.choice
            })
            setSelected(choice)
        }
    }

    const tryAgain = () => {
        setAnswers([])
        setCurrentQuestion(0)
        setResult(undefined)
        setSelected('')
    }

    return (
        <div>
            <Loading/>
            {questions && questions.length > currentQuestion && (
            <div className="quiz">
            <h4>Question list of React challenger: {`${currentQuestion + 1}/${questions?.length}`}</h4>
            <div className="quiz-list">
            {questions?.map((item, index) => {
                return (
                <Button key={index} onClick={() => setQuestion(index)} size="small"><span className={index === currentQuestion ? "quiz-name-active" : ""}>Q{index+1}</span></Button>
                )
            })}
            </div>
                <form>
                    <FormControl component="fieldset">
                        <h4>{questions[currentQuestion].question}</h4>
                        <RadioGroup aria-label="quiz" name="quiz" value={selected} onChange={(e) => chooseAnswer(e.target.value)}>
                            <FormControlLabel value="A" control={<Radio />} label={questions[currentQuestion].choices.A} />
                            <FormControlLabel value="B" control={<Radio />} label={questions[currentQuestion].choices.B} />
                            <FormControlLabel value="C" control={<Radio />} label={questions[currentQuestion].choices.C} />
                            <FormControlLabel value="D" control={<Radio />} label={questions[currentQuestion].choices.D} />
                        </RadioGroup>
                        <Button onClick={nextQuestion} variant="outlined" color="primary">
                            {questions.length > currentQuestion + 1 && `Next Question`}
                            {questions.length === currentQuestion + 1 && `Submit Quiz`}
                        </Button>
                    </FormControl>
                </form>
            </div>
            )}
            {result && questions && (
            <div className="quiz-result">
                {result.status === "F" && (
                <div>
                    <img alt="fail" src="../quiz-fail.png"/>
                    <p>You've failed the test with {`${questions.length - result.incorrectAnswers.length}/${questions.length}`} correct answers</p>
                    <Button onClick={tryAgain} variant="contained" color="secondary">Try again</Button>
                </div>
                )}
                {result.status !== "F" && (
                <div>
                    <img alt="congrats" src="../quiz-pass.png"/>
                    <p>You've passed the test with {`${questions.length}/${questions.length}`} correct answers</p>
                    <Button onClick={tryAgain} variant="contained" color="secondary">Try again</Button>
                </div>
                )}
            </div>
            )}
        </div>
    )
}
