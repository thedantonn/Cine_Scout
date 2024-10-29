import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../Header'
import SecondContainer from '../SecondContainer'
import MainContainer from '../MainContainer'
import Shimmer from '../Shimmer'

const TrailerPage = () => {
  const MovieResult = useSelector((store) => store.Gpt?.MovieResult)    
  return ( MovieResult?.length > 0 ? (
    <div>
      <Header/>
     <MainContainer/>
      <SecondContainer/>
    </div>
  ) : (
<div>

<Shimmer/>
</div>
  )
)
}

export default TrailerPage