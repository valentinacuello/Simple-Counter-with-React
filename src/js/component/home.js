import React, { useEffect, useState } from "react";
import Counter from "./Counter";

export function Home() {
	const [contador, setContador] = useState(0);
	const [primero, setPrimero] = useState(0);
	const [segundo, setSegundo] = useState(0);
	const [tercero, setTercero] = useState(0);
	const [cuarto, setCuarto] = useState(0);
	const [quinto, setQuinto] = useState(0);
	const [sexto, setSexto] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setContador(contador + 1);
			setPrimero(Math.floor(contador / 1) % 10);
			setSegundo(Math.floor(contador / 10) % 10);
			setTercero(Math.floor(contador / 100) % 10);
			setCuarto(Math.floor(contador / 1000) % 10);
			setQuinto(Math.floor(contador / 10000) % 10);
			setSexto(Math.floor(contador / 100000) % 10);

			console.log(primero);
		}, 1000);
		return () => clearInterval(timer);
	});

	return (
		<div>
			<Counter
				primerContador={primero}
				segundoContador={segundo}
				tercerContador={tercero}
				cuartoContador={cuarto}
				quintoContador={quinto}
				sextoContador={sexto}
			/>
		</div>
	);
}
