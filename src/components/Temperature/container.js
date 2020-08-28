import { connect } from "react-redux";
import Temperature from "./Temperature";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  currentTemp: state.currentDegrees,
});

export default connect(mapStateToProps)(Temperature);
