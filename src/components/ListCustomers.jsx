import React, { useContext, useEffect } from 'react'
import UserKit from '../data/UserKit'
import { CustomerContext } from '../context/CustomerContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Styles
import Button from '../styles/Button'

export default function ListCustomers() {
  const userKit = new UserKit()
  const { customerList, setCustomerList } = useContext(CustomerContext)

  const fetchCustomerList = () => {
    userKit.fetchCustomers()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results)
        fetchCustomerList()
      })
  }

  useEffect(() => {
    fetchCustomerList() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Table>
      <Thead>
        <tr>
          <th>Customer name</th>
          <th>Organisation Number</th>
          <th>Reference</th>
          <th>Read more</th>
        </tr>
      </Thead>
      <tbody>
        {customerList && customerList.map(customerItem => {
          return (
            <tr key={customerItem.id}>
              <td>{customerItem.name}</td>
              <td>{customerItem.organisationNr}</td>
              <td>{customerItem.reference}</td>
              <td>
                <Link to={`/customers/${customerItem.id}`}>
                  <Button
                    fontSize="small"
                    background={props => props.theme.riptide}
                    width="100%"
                    textColor="white">
                    Click
                  </Button>
                </Link></td>
            </tr>
          )
        })
        }
      </tbody>
    </Table>
  )
}


const Table = styled.table`
padding: 2em 3em; 
background: white;
box-shadow: 1px 1px 3px gray;
border-radius: 5px;

@media (max-width: 400px){
  font-size: 12px;
}
`

const Thead = styled.thead`
text-align: left;
`
