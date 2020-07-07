import  API from '../../API/questions.json';
import { questionsArray } from '../../selectors/questions';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      "question_1": {
        "question": "Як називається найбільш популярна снайперська гвинтівка у грі CS:GO?",
        "answers": ["Fnatic", "Na`Vi", "Team Secret", "OG"],
        "correct_answers": ["OG"]
      }, 
    
      "question_2": {
        "question": "Хто виграв головний турнір року по Dota 2 - The International 2019?",
        "answers": ["Fnatic", "Na`Vi", "Team Secret", "OG"],
        "correct_answers": ["OG"]
      },
    
      "question_3": {
        "question": "Скільки карт використовується на офіційних турнірах СS:GO?",
        "answers": ["12", "24", "6", "7"],
        "correct_answers": ["7"]
      },
      
      "question_4": {
        "question": "Найпопулярніша укарїнська кіберспортивна команда",
        "answers": ["VP", "Na`Vi", "Astralis", "HR"],
        "correct_answers": ["Na`Vi"]
      },
    
      "question_5": {
        "question": "Яка гра є головним конкурентом дисципліни DOTA2",
        "answers": ["LOL", "WOW", "Startcraft", "Battlerite"],
        "correct_answers": ["LOL"]
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  
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
