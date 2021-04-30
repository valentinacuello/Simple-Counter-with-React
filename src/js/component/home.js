import React, { useEffect, useState } from "react";
import Counter from "./Counter";

export function Home() {
	let contador = 0;
	// let tercero = 0;
	// let segundo = 0;
	// let primero = 0;

	const [primero, setPrimero] = useState(0);

	useEffect(() => {
		setInterval(() => {
			// tercero = Math.floor(contador / 100) % 10;
			// segundo = Math.floor(contador / 10) % 10;
			setPrimero(primero + 1);

			console.log(primero);
		}, 1000);
	});
	return (
		<div>
			<Counter
				primerContador={primero}
				// segundoContador={segundo}
				// tercerContador={tercero}
			/>
		</div>
	);
}
