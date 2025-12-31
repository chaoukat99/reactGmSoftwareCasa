import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Profile.css'

function Profile({ user = { name: 'Jane Doe', email: 'jane.doe@example.com', joined: 'Joined Jan 2021' } }) {
	return (
		<div className="profile-page d-flex align-items-center justify-content-center">
			<div className="card profile-card shadow-sm">
				<div className="card-body text-center">
					<div className="avatar mb-3">{getInitials(user.name)}</div>
					<h4 className="card-title mb-1">{user.name}</h4>
					<p className="text-muted small mb-3">{user.email}</p>
					<p className="text-muted small mb-4">{user.joined}</p>
					<div className="d-flex gap-2 justify-content-center">
						<button className="btn btn-outline-primary btn-sm">Edit Profile</button>
						<button className="btn btn-primary btn-sm">Logout</button>
					</div>
				</div>
			</div>
		</div>
	)

	function getInitials(name) {
		return (name || '')
			.split(' ')
			.map((n) => n[0])
			.slice(0, 2)
			.join('')
			.toUpperCase()
	}
}

export default Profile