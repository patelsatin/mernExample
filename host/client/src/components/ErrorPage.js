import React  from "react";
import { NavLink } from "react-router-dom";
import "../layouts/css/error.css";
const ErrorPage =()=>{
    return(
        <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>We are sorry, Page not found!</h2>
			<p></p>
			<NavLink to="/">Back To Homepage</NavLink>
		</div>
	</div>
    );
}
export default ErrorPage;