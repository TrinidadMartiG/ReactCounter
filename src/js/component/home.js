import React from "react";
import PropTypes, { object } from "prop-types";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./secondscounter.js";

export function Home() {
	return (
		<div className="container rounded fondo d-flex justify-content-center py-3">
			<SecondsCounter seconds={<i className="far fa-clock"></i>} />
			<SecondsCounter seconds="0" identificador="sexto-digito" />
			<SecondsCounter seconds="0" identificador="quinto-digito" />
			<SecondsCounter seconds="0" identificador="cuarto-digito" />
			<SecondsCounter seconds="0" identificador="tercer-digito" />
			<SecondsCounter seconds="0" identificador="segundo-digito" />
			<SecondsCounter seconds="0" identificador="primer-digito" />
		</div>
	);
}

let numero1 = 1;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let numero5 = 0;
let numero6 = 0;

let temporizador = function() {
	ReactDOM.render(
		numero1.toString(),
		document.getElementById("primer-digito")
	);
	ReactDOM.render(
		numero2.toString(),
		document.getElementById("segundo-digito")
	);
	ReactDOM.render(
		numero3.toString(),
		document.getElementById("tercer-digito")
	);
	ReactDOM.render(
		numero4.toString(),
		document.getElementById("cuarto-digito")
	);
	ReactDOM.render(
		numero5.toString(),
		document.getElementById("quinto-digito")
	);
	ReactDOM.render(
		numero6.toString(),
		document.getElementById("sexto-digito")
	);
	numero1 = numero1 + 1;
	if (numero1 == 10) {
		numero2 = numero2 + 1;
		numero1 = 0;
	}
	if (numero2 == 10) {
		numero3 = numero3 + 1;
		numero2 = 0;
	}
	if (numero3 == 10) {
		numero4 = numero4 + 1;
		numero3 = 0;
	}
	if (numero4 == 10) {
		numero5 = numero5 + 1;
		numero4 = 0;
	}
	if (numero5 == 10) {
		numero6 = numero6 + 1;
		numero5 = 0;
	}
	if (numero6 == 10) {
		numero6 = 0;
	}
};

window.setInterval(temporizador, 1000); 

