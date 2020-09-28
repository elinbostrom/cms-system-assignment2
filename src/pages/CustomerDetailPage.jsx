import React, { useEffect, useState, useContext } from 'react'
import UserKit from '../data/UserKit'
import { CustomerContext } from '../context/CustomerContext';

// Components
import FormEditCustomer from '../components/FormEditCustomer';
import CustomerDetailInformation from '../components/CustomerDetailInformation';

// Styles
import PlaceMainContent from '../styles/PlaceMainContent';
import Headline from '../styles/Headline';


export default function CustomerDetailPage(props) {
  const { customerDetails, setCustomerDetails } = useContext(CustomerContext)
  const userKit = new UserKit()
  const customerId = props.match.params.id;
  const [editMode, setEditMode] = useState(false)

  const handleCustomerDetails = () => {
    userKit.customerDetail(customerId)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
      })
  }

  useEffect(() => {
    userKit.customerDetail(customerId)
    handleCustomerDetails() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PlaceMainContent
      background={props => props.theme.whisper}
      flexDirection="column"
    >
      <Headline
        textColor={props => props.theme.nero}
        margin="1em"
      >{customerDetails.name}</Headline>
      {!editMode ?
        (
          <CustomerDetailInformation
            setEditMode={setEditMode}
            customerId={customerId} />
        )
        :
        (
          <FormEditCustomer
            setEditMode={setEditMode}
            handleCustomerDetails={handleCustomerDetails}
            customerId={customerId} />
        )
      }
    </PlaceMainContent>
  )
}
