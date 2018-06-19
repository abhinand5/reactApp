import React from 'react';

const Cards = ({name,email,id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}?size=250x250`} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>	
		</div>
	);
}

export default Cards;