import { useState } from "react"

const App = () => {

  const [saveData, setSaveData] = useState({ name: "", email: "", age: "" });

  const [ShowData, setShowData] = useState(() => {
    const saved = localStorage.getItem("mydatas");
    return saved? JSON.parse(saved) : [];
  });

  const valueTake = (event) => {
    const { name, value } = event.target
    const copy = {...saveData, [name]: value }
    setSaveData(copy)
  }

  const addData = (e) => {
    e.preventDefault()

    if (!saveData.name.trim() ||!saveData.email.trim() ||!saveData.age.trim()) {
      alert("Please Fill the Datas")
      return
    }

    const takeObj = {...saveData }
    const addArr = [...ShowData, takeObj]

    console.log("addArr = ", addArr);
    console.log("takeObj = ", takeObj);

    setShowData(addArr)
    localStorage.setItem("mydatas", JSON.stringify(addArr))

    alert("Successfully Added")
    setSaveData({ name: "", email: "", age: "" })
  }

  return (
    <>
      <form onSubmit={addData}>
        <input type="text" name="name" value={saveData.name} placeholder="Enter the Name" onChange={valueTake} />
        <input type="email" name="email" value={saveData.email} placeholder="Enter the Email" onChange={valueTake} />
        <input type="number" name="age" value={saveData.age} placeholder="Enter the Age" onChange={valueTake} />
        <button type="submit">Register</button>
      </form>

      <h3>All Data </h3>
      {ShowData.length === 0? <p>No data yet</p> : null}

      <table border="1" cellPadding="8" style={{ marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {ShowData.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '10px' }}>
        <p>Open console: Press F12 -&gt; Console tab -&gt; You will see addArr</p>
      </div>
    </>
  )
}

export default App