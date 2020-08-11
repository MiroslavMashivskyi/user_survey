import { connect } from 'react-redux';
import Your_Result from './Your_Result';

const mapStateToProps = (state) => {
    
    return {
        result: state.question.result
    }
}

const Your_Result_Container = connect(mapStateToProps)(Your_Result);

export default Your_Result_Container;