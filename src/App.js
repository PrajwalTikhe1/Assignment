import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

function App() {
  const [data, getData] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        getData(response)
      })
  }

  return (
    <Container className='mt-4'>
      <h1 className='text-center'>USER TABLE</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default App
