import { useEffect, useState } from "react";

function Http() {
  const [users, setUsers] = useState<any[]>([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Http;