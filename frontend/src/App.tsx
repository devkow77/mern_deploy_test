import React from 'react';

function App() {
	const [users, setUsers] = React.useState([]);

	const fetchUsers = async () => {
		try {
			const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users`);
			const { data } = await res.json();

			if (!res.ok) {
				console.log('Cannot FETCH /GET users');
				return;
			}

			setUsers(data);
		} catch (err) {
			console.log(err);
		}
	};

	React.useEffect(() => {
		fetchUsers();
	}, [users]);

	return (
		<main>
			<ul>
				{users.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
			<p>hello</p>
		</main>
	);
}

export default App;
