import { connect } from 'react-redux';
import YourResult from './your_result';

const mapStateToProps = (state) => {
    
    return {
        result: state.question.result
    }
}

const YourResultContainer = connect(mapStateToProps)(YourResult);

export default YourResultContainer;