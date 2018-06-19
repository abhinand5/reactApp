import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll' , borderTop: '3px solid #0ccac4',height: '500px', paddingTop:'20px' }}>
			{props.children}
		</div>
	);
}
export default Scroll;