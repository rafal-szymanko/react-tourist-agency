import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux.js';
import {getTripById} from '../../../redux/tripsRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  tripDetails: getTripById(state, window.location.pathname.slice(6)),
});




const mapDispatchToProps = (dispatch) => ({
  setOrderOption: options => dispatch(setOrderOption(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
