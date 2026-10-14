import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([
    { username: "John", age: 30 },
    { username: "Jane", age: 25 },
    { username: "Bob", age: 40 }
  ]);
  // CREATE
  const addUsers = () => {
    const newUsers = [...users];
    newUsers.push({
      username: "Subu",
      age: 22
    });
    setUsers(newUsers);
  };

  // UPDATE
  const updateUsers = () => {
    const newUsers = [...users];
    newUsers.splice(1, 1, {
      username: "Subu",
      age: 22
    });
    setUsers(newUsers);
  };

  // DELETE
  const deleteUsers = () => {
    const newUsers = [...users];
  newUsers.splice(0, 1);
    setUsers(newUsers);
  };
  return (
    <>
      <div>
        <button onClick={addUsers}>Create</button>
        <button onClick={updateUsers}>Update</button>
        <button onClick={deleteUsers}>Delete</button>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <p>
         Username: {user.username} | Age: {user.age}
            </p>
          </div>
     ))}
      </div>
    </>
  );
};

export default App;