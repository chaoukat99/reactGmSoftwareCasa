import React, { useEffect, useState, useRef } from 'react';

export default function TextToSpeech() {

	const [text, setText] = useState('');
	const [voices, setVoices] = useState([]);
	const [selectedVoice, setSelectedVoice] = useState('');
	const [speaking, setSpeaking] = useState(false);
	const utterRef = useRef(null);

	useEffect(() => {
		if (!('speechSynthesis' in window)) return;

		const load = () => {
			const v = window.speechSynthesis.getVoices();
			setVoices(v);
			if (v.length && !selectedVoice) setSelectedVoice(v[0].name);
		};

		load();
		window.speechSynthesis.onvoiceschanged = load;

		return () => {
			if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null;
		};
	}, [selectedVoice]);

	const speak = () => {
		if (!('speechSynthesis' in window) || !text.trim()) return;
		window.speechSynthesis.cancel();
		const u = new SpeechSynthesisUtterance(text);
		const v = voices.find((vv) => vv.name === selectedVoice);
		if (v) u.voice = v;
		u.onstart = () => setSpeaking(true);
		u.onend = () => {
			setSpeaking(false);
			utterRef.current = null;
		};
		utterRef.current = u;
		window.speechSynthesis.speak(u);
	};

	const stop = () => {
		if (!('speechSynthesis' in window)) return;
		window.speechSynthesis.cancel();
		setSpeaking(false);
		utterRef.current = null;
	};

	if (!('speechSynthesis' in window)) {
		return (
			<div>
				<p>Speech Synthesis not supported in this browser.</p>
			</div>
		);
	}

	return (
		<div>
			<textarea
				placeholder="Type text to speak..."
				value={text}
				onChange={(e) => setText(e.target.value)}
				rows={4}
				style={{ width: '100%' }}
			/>
			<div style={{ marginTop: 8 }}>
				<select
					value={selectedVoice}
					onChange={(e) => setSelectedVoice(e.target.value)}
				>
					{voices.map((v) => (
						<option key={v.name + v.lang} value={v.name}>
							{v.name} ({v.lang})
						</option>
					))}
				</select>
				<button onClick={speak} disabled={speaking || !text.trim()} style={{ marginLeft: 8 }}>
					Speak
				</button>
				<button onClick={stop} disabled={!speaking} style={{ marginLeft: 8 }}>
					Stop
				</button>
			</div>
		</div>
	);
}