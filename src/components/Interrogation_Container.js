import { connect } from 'react-redux';
import { nextQuestion, setAnswer } from '../BLL/reducers/reducer';
import Interrogation from './Interrogation';

const mapStateToProps = (state) => {
    return {
        questions: state.question.questions,
        question: state.question.text,
        count: state.question.count,
        answers: state.question.answers,
        totalCount: state.question.totalCount,
        correct_answers: state.question.correct_answers,
        result: state.question.result,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextQuestion: (question, answers, correct_answers) => {
            dispatch(nextQuestion(question, answers, correct_answers))
        },

        setAnswer: (answer) => {
            dispatch(setAnswer(answer))
        },
    }
}

const InterrogationContainer = connect(mapStateToProps, mapDispatchToProps)(Interrogation);

export default InterrogationContainer;