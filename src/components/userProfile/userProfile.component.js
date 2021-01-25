import React, { useContext, useEffect, useState } from 'react'
import { Wrapper, FieldWrappers } from './userProfile.styles'
import Heading from '../heading/heading.component'
import TextField from '../textField'
import UserDetailsContext from '../../context/userDetails.context'
import Loader from '../loader'

const UserProfile = () => {
  const {
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails
  } = useContext(UserDetailsContext)

  // const [data, setData] = useState([])
  // useEffect( () => {
  //   // Goi API :: Fetch
  //   const fetchData = async () => {
  //     const dataFetched = await fetch("https://600ecd8b3bb1d100179e02b3.mockapi.io/user", {
  //       method: 'GET', // optional
  //     })
  //     // Chuyen ve JSON
  //     const finalData = await dataFetched.json()
  //     // Luu data
  //     setData(finalData)
  //   }
  //   // Goi ham
  //   fetchData()
  //   }, [])

  // console.log(data)
  
  const [data, setData] = useState([])
  
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    let mount = true
    // goi api
    // co fetch,axios,ajax,isomophic-unfetch, swr,...
    const fetchData = async () => {
      const dataFetched = await fetch("https://600ecd8b3bb1d100179e02b3.mockapi.io/user", {
        method: 'GET',// ko can cung dc
      })
      const finalData = await dataFetched.json()
      setData(finalData)
    }
    if (mount) {
      fetchData()
    }
    else { return () => mount = false }
  }, [])
  console.log(data)
  
  return (
    <>
    { (data && data.length > 0) ? (<Wrapper>
        <Heading>My details</Heading>

        <FieldWrappers>
          <TextField
            label='name'
            value={data[0].name}
            onChange={e => {
              setUserDetails({ name: e.target.value })
            }}
          />
          <TextField
            label='date of birth'
            value={data[0].dateOfBirth}
            onChange={e => {
              setUserDetails({ dateOfBirth: e.target.value })
            }}
          />
          <TextField
            label='email'
            value={data[0].email}
            onChange={e => {
              setUserDetails({ email: e.target.value })
            }}
          />

          <img src={data[0].avatar} width="371px" height="670px" />
          <TextField
            label='secret question'
            value={secretQuestion}
            onChange={e => {
              setUserDetails({ secretQuestion: e.target.value })
            }}
          />
          <TextField
            label='secret answer'
            value={secretAnswer}
            onChange={e => {
              setUserDetails({ secretAnswer: e.target.value })
            }}
          />
        </FieldWrappers>
      </Wrapper>) : (<Loader />)
    }
    </>
  )
}

export default UserProfile
