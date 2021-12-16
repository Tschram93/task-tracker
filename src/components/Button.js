import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    /* Change to onClick later */
    const onClicked = () => {
        console.log('Clicked');
    };  /* Change to onClick later */

	return <button style={{backgroundColor: color}} className="btn" onClick={onClicked}> {text} </button>;
};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClicked: PropTypes.func, /* Change to onClick later */
}


export default Button;
