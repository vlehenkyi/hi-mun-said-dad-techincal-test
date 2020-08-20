import { connect } from "react-redux";
import Weather from "./Weather";
import { getCurrentWeather } from "../../store/action";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  currentTemp: state.currentDegrees
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentWeather: (pos) => {
      dispatch(getCurrentWeather(pos));
    },
    showAlert: () => {
      alert("You did not allow us to use your location");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
