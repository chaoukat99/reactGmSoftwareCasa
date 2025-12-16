import React, { useEffect, useRef, useState } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

export default function SpeechToText() {
	const [supported] = useState(!!SpeechRecognition);
	const [listening, setListening] = useState(false);
	const [transcript, setTranscript] = useState('');
	const recogRef = useRef(null);
	const finalRef = useRef(''); // accumulate finalized transcript

	useEffect(() => {
		if (!supported) return;

		const recog = new SpeechRecognition();
		recog.continuous = true;
		recog.interimResults = true;
		recog.lang = 'en-US';

		recog.onresult = (e) => {
			let interim = '';
			for (let i = e.resultIndex; i < e.results.length; ++i) {
				const res = e.results[i];
				if (res.isFinal) finalRef.current += res[0].transcript;
				else interim += res[0].transcript;
			}
			setTranscript((finalRef.current + interim).trim());
		};

		recog.onerror = () => {
			// stop on error and update state
			try { recog.stop(); } catch (e) {}
			setListening(false);
		};

		recogRef.current = recog;
		return () => {
			try { recog.stop(); } catch (e) {}
			recogRef.current = null;
		};
	}, [supported]);

	const toggleMic = () => {
		if (!supported) return;
		if (listening) {
			try { recogRef.current && recogRef.current.stop(); } catch (e) {}
			setListening(false);
		} else {
			finalRef.current = ''; // reset or keep depending on desired behavior
			setTranscript('');
			try {
				recogRef.current && recogRef.current.start();
				setListening(true);
			} catch (e) {
				// start may throw if called twice
				console.error(e);
			}
		}
	};

	if (!supported) {
		return (
			<div>
				<p>Speech Recognition not supported in this browser.</p>
			</div>
		);
	}

	return (
		<div>
			<button onClick={toggleMic}>
				{listening ? 'Stop Mic' : 'Enable Mic'}
			</button>
			<p style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{transcript || '—'}</p>
		</div>
	);
}