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

	const choices = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'voilet'];
	const colorList = choices.map((c) => {
		return (
			<button key={c} value = {c} onClick={e => handleClick(e.target.value)}>
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
		<p>
		Current color choice: <b>{color}</b>
		</p>
	);
}

function Demo() {
	return (
		<RecoilRoot>
			<p>Choose a color</p>
			<ColorMenu />
			<ColorMessage />
		</RecoilRoot>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);

