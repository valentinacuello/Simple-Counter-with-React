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
let sexto = 0;
let quinto = 0;
let cuarto = 0;
let tercero = 0;
let segundo = 0;
let primero = 0;

setInterval(() => {
	sexto = Math.floor(contador / 100000) % 10;
	quinto = Math.floor(contador / 10000) % 10;
	cuarto = Math.floor(contador / 1000) % 10;
	tercero = Math.floor(contador / 100) % 10;
	segundo = Math.floor(contador / 10) % 10;
	primero = Math.floor(contador / 1) % 10;

	ReactDOM.render(
		<Home
			primerContador={primero}
			segundoContador={segundo}
			tercerContador={tercero}
			cuartoContador={cuarto}
			quintoContador={quinto}
			sextoContador={sexto}
		/>,
		document.querySelector("#app")
	);
	contador++;
}, 1000);
