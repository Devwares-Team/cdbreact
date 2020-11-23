import React from 'react'

import { CDBAlert, CDBBtn, CDBInput} from 'cdbreact'


const App = () => {
  return (
    <div>
      <CDBAlert color="primary"> show this </CDBAlert>
      <CDBBtn>click me</CDBBtn>
      <CDBInput label="Username" />
    </div>
  )
}

export default App
