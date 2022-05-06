import React, { useState, useEffect } from "react";

const Counter = () => {
	console.log("Counter component started");

	const [count, setCount] = useState(0);

	const counter = () => {
		setCount(count => {
			return count + 1
		});
	};

	/*
	useEffect(() => {
		// do sth
		return function () {
			// this is executed when the component unmounts / is taken from the dom
		}
	}, [count])
	*/

	// this would be a useEffect call to fetch some data as soon as the component
	// is mounted into the dom
	useEffect(() => {
		// fetch some data
	}, [])


	useEffect(() => {
		console.log('component mounted');
		const intervalId = setInterval(counter, 1000);
		return () => {
			// this function will be called when the component is unmounted
			console.log('counter unmounted')
			clearInterval(intervalId);
		}
	}, [])



	console.log('Counter comoponent finished');

	console.log("Counter component render()");
	return <h1> {count}</h1>;
}

export default Counter;