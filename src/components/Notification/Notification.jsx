import PropTypes from "prop-types";
import css from "../Notification/Notification.module.css"

const Notification = ({ message }) => {
	return (
		<h1 className={css.message}>{message}</h1>
	)
}

Notification.propTypes = {
	message: PropTypes.string.isRequired,
}

export default Notification;