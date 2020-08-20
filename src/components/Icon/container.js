import { connect } from "react-redux";
import Icon from "./Icon";

const mapStateToProps = (state) => ({
  src: state.iconSrc,
});

export default connect(mapStateToProps)(Icon);
