import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digit } from "./digit.jsx";

//create your first component
const Home = () => {
	//asincrono
	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(true)

	useEffect(()=>{
		if (active) {
			setTimeout(()=>{
				setTimer(value => value + 1)
			}, 1000)
		}
	},[timer, active]) //array de dependencia

		// aqui el boton maneja los valores si esta star hace stop y viceversa
	 const startStop = () => setActive(value => !value)

	 const resetTimer = () => setTimer(value => value=0)

	return (
		<div className="text-center">
			<section className="counter">
				<Digit number={<span className="fa fa-clock"></span>}/>
				<Digit number={Math.floor(timer/100000)%10}/>
				<Digit number={Math.floor(timer/10000)%10}/>
				<Digit number={Math.floor(timer/1000)%10}/>
				<Digit number={Math.floor(timer/100)%10}/>
				<Digit number={Math.floor(timer/10)%10}/>
				<Digit number={Math.floor(timer%10)}/>
			</section>

			<section className="container text-center">
			<h2>counter control</h2>
				<div>
					<button 
					disabled={active}
					onClick={startStop} className="mx-1 btn btn-success">Start</button>
					<button 
					disabled={!active}
					 onClick={startStop} className="mx-1 btn btn-secondary">Stop</button>
					<button onClick={resetTimer}className="mx-1 btn btn-danger">Reset</button>
				</div>

			</section>
			
		</div>
	);
};

export default Home;
