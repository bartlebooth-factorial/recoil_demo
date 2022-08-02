import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

const textState = atom({
	key: 'textState',
	default: 'AtomLol',
});

function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event) => {
		setText(event.target.value)
	};

	return (
		<div>
			<input type="text" value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}

const charCountState = selector({
	key: 'charCountState',
	get: ({get}) => {
		const text = get(textState);
		return text.length;
	},
});

function CharacterCount() {
	const count = useRecoilValue(charCountState);
	return <>Character Count: {count}</>;
}

function Demo() {
	return (
		<RecoilRoot>
			<p>Hello there</p>
			<CharacterCounter />
		</RecoilRoot>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);
