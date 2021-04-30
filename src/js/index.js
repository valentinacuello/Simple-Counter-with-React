//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let contador = 0;
let tercero = 0;
let segundo = 0;
let primero = 0;

setInterval(() => {
	tercero = Math.floor(contador / 100) % 10;
	segundo = Math.floor(contador / 10) % 10;
	primero = Math.floor(contador / 1) % 10;

	ReactDOM.render(
		<Home
			primerContador={primero}
			segundoContador={segundo}
			tercerContador={tercero}
		/>,
		document.querySelector("#app")
	);
	contador++;
}, 1000);
