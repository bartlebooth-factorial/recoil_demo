import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	RecoilRoot,
	atom,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import './index.css'

const colorState = atom({
	key: 'colorState',
	default: '[none]',
});

function ColorMenu() {
	const [color, setColor] = useRecoilState(colorState);

	const choices = ['red', 'green', 'blue', 'purple'];
	const colorList = choices.map((c) => {
		return (
			<button key={c} value = {c} style={{color: c}}
			onClick={e => handleClick(e.target.value)}
			>
			{c}
			</button>
		);
	});

	const handleClick = (btnvalue) => {
		setColor(btnvalue);
	};

	return (
		<ul>{colorList}</ul>
	);
}

function ColorMessage() {
	const color = useRecoilValue(colorState);
	return (
		<p style={{color: color}}>
		Current color choice: <b>{color}</b>
		</p>
	);
}

function Demo() {
	return (
		<RecoilRoot>
			<h1>Choose a color:</h1>
			<ColorMenu />
			<ColorMessage />
		</RecoilRoot>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);

