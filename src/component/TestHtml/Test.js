import React, { useState } from 'react';
import './StyleTest.css'
import'../Navbar/navbar'
import NavBar from '../Navbar/navbar';


export default function App() {
	const preguntas = [
		{
			pregunta: '¿cual es el lenguaje estandar especifico para aplicar estilos a nuestras paginas web?',
			respuestas: [
				{ textRespuesta: 'Java', correcta: false },
				{ textRespuesta: 'Html', correcta: false },
				{ textRespuesta: 'css', correcta: true },
				{ textRespuesta: 'Python', correcta: false },
			],
		},
		{
			pregunta: '¿Cuál es la versión actualmente vigente del estándar HTML?',
			respuestas: [
				{ textRespuesta: 'Html2', correcta: false },
				{ textRespuesta: 'Html5', correcta: true },
				{ textRespuesta: 'Css3', correcta: false },
				{ textRespuesta: 'Html6', correcta: false },
			],
		},
		{
			pregunta: '¿El title se encuentra dentro del body en una página web?',
			respuestas: [
				{ textRespuesta: 'Dentro', correcta: true },
				{ textRespuesta: 'Dentro y fuera', correcta: false },
				{ textRespuesta: 'Fuera de el', correcta: false },
				{ textRespuesta: 'Ninguna de las antreriores', correcta: false },
			],
		},
		{
			pregunta: '¿Qué etiqueta utilizamos para insertar una línea horizontal?',
			respuestas: [
				{ textRespuesta: 'br', correcta: false },
				{ textRespuesta: 'ht', correcta: false },
				{ textRespuesta: 'td', correcta: false },
				{ textRespuesta: 'ln ', correcta: true },
			],
		},
	];

	const [pregunta_actual, establecerPregntaActual] = useState(0);
	const [mostrar_puntaje, MostrarPuntaje] = useState(false);
	const [puntaje, setScore] = useState(0);

	const respuestaClick = (correcta) => {

		if (correcta) {
			setScore(puntaje + 1);
		}
		const siguiente_pregunta = pregunta_actual + 1;
		if (siguiente_pregunta < preguntas.length) {
			establecerPregntaActual(siguiente_pregunta);
		} else {
			MostrarPuntaje(true);
		}
	};
	return (
		<div>
			<div>
			<NavBar/>
			</div>
				<div className='app' >
					{mostrar_puntaje ? (
						<div className='score-section'>
							Tu puntaje es {puntaje} de {preguntas.length}
						</div>
					) : (
						<>
							<div className='question-section'>
								<div className='question-count'>
									<span>pregunta {pregunta_actual + 1}</span>/{preguntas.length}
								</div>
								<div className='question-text'>{preguntas[pregunta_actual].pregunta}</div>
							</div>

							<div className='answer-section'>
								{preguntas[pregunta_actual].respuestas.map((opcionRespuesta) => (
									<button className="btn" onClick={() => respuestaClick(opcionRespuesta.correcta)}>{opcionRespuesta.textRespuesta}</button>
								))}
							</div>
						</>
					)}
				</div>
		</div>
	);
}
