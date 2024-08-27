import PropTypes from 'prop-types';
function User({name:isim,surname,age,isLoggedIn,address}){
	return(
		<>
		<h1>User Information</h1>
		<br/>
		{address.title} /{address.zipCode}
		<br/>
		<p>{isLoggedIn ? `${isim} ${surname} (${age})` : `Please log In!`}</p>
		</>
	);
}
User.propTypes = {
  name:PropTypes.string.isRequired,
  surname:PropTypes.string.isRequired,
  age:PropTypes.oneOfType([
	PropTypes.number,
	PropTypes.string
  ]),
  isLoggedIn:PropTypes.bool,
  address:PropTypes.shape({
	title:PropTypes.string,
	zipCode:PropTypes.number
})
}
User.defaultProps = {
	name:'NAME',
	surname:'SURNAME'
}
export default User;