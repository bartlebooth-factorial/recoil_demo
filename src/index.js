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

function Demo() {
	return (
		<RecoilRoot>
			<p>Hello there</p>
		</RecoilRoot>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);
