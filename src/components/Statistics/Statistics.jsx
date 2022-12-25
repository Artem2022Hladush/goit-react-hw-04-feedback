import PropTypes from "prop-types";
import css from "../Statistics/Statistics.module.css";


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return (
<>
	<div className={css.statistics__list}>
		<p className={css.statistics__item}>Good: {good}</p>
		<p className={css.statistics__item}>Neutral: {neutral}</p>
		<p className={css.statistics__item}>Bad: {bad}</p>
	</div>
	<div className={css.count__list}>
		<p className={css.count__item}>Total: {total}</p>
		<p className={css.count__item}>Positive Feedback: {total === 0 ?  "100" : Math.round(positivePercentage)}%</p>
	</div>
</>
)
};

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired
};

export default Statistics;