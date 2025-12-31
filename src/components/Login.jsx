import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		// handle login (e.g., call API or lift state)
		console.log('Login submit', { email, password })
	}

	return (
		<div className="login-page d-flex align-items-center justify-content-center">
			<div className="card login-card shadow-sm">
				<div className="card-body">
					<h3 className="card-title text-center mb-4">Sign in</h3>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label">Email address</label>
							<input
								type="email"
								className="form-control"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="d-flex justify-content-between align-items-center mb-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="remember" />
								<label className="form-check-label" htmlFor="remember">
									Remember me
								</label>
							</div>
							<a href="#" className="small">
								Forgot?
							</a>
						</div>
						<button type="submit" className="btn btn-primary w-100">
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login