import { connect } from "react-redux";
import Slider from "./Slider";
import { changeCurrentTemp } from "../../store/action";
const mapStateToProps = (state) => ({
  currentTemp: state.currentDegrees,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (temp) => dispatch(changeCurrentTemp(temp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
