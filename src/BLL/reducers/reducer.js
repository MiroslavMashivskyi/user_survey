import  API from '../../API/questions.json';
import { questionsArray } from '../../selectors/questions';

// fetch('https://github.com/MMashivskij/demo/blob/master/db.json')
// .then(response => response.json())
// .then(json => console.log(json)
// )

const NEXT_QUESTION = "NEXT_QUESTION";
const SET_ANSWER = "SET_ANSWER";

const initial = {
    questions: questionsArray(API),
    count: 1,
    text: "Як називається найбільш популярна снайперська гвинтівка у грі CS:GO?",
    answers: ["Fnatic", "Na`Vi", "Team Secret", "OG"],
    correct_answers: ["OG"],
    totalCount: questionsArray(API).length,
    result: [],
}

const questionReducer = (state = initial, action) => {
    
        switch (action.type) {
        case NEXT_QUESTION:
            return {
                ...state,
                count: state.count + 1,
                text: action.question,
                answers: action.answers,
                correct_answers: action.correct_answers
            }

        case SET_ANSWER:
            return {
                ...state,
                result: [...state.result, action.answer]
            }
    
        default:
            return state;
    }
}

export const nextQuestion = (question, answers, correct_answers) => ({type: NEXT_QUESTION, question, answers, correct_answers});
export const setAnswer = (answer) => ({type: SET_ANSWER,  answer});

export default questionReducer;