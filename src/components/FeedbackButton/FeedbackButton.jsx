import PropTypes from "prop-types";
import {  BsFillHandThumbsUpFill,BsFillHandThumbsDownFill,BsFillHexagonFill} from "react-icons/bs";
import css from "../FeedbackButton/FeedbackButton.module.css"



const FeedbackButton = ({options, onAddFeedback}) => {
return (
	<div className={css.buttons__list}>
	<button type="button" className={css.button} onClick={() => onAddFeedback(options[0])}><BsFillHandThumbsUpFill/>Good</button>
	<button type="button" className={css.button}  onClick={() => onAddFeedback(options[1])}><BsFillHexagonFill/>Neutral</button>
	<button type="button" className={css.button}  onClick={() => onAddFeedback(options[2])}><BsFillHandThumbsDownFill/>Bad</button>
</div>
)
};

FeedbackButton.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
   onAddFeedback: PropTypes.func.isRequired,
}

export default FeedbackButton;