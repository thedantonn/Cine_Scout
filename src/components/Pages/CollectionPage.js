import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList'
import { Header } from '../Header'
import Background from '../Background'

const CollectionPage = () => {
    const collection = useSelector((store) => store.user.collection)

    
    return (
        <div>
            <Header/>
            <Background/>
        <div className='w-full absolute xl:px-6 lg:px-6 md:px-4 px-0 flex flex-row overflow-x-scroll lg:mt-36 pt-10 bg-black'>
        <MovieList title = {"Collection"} movies = {collection.movies}/>
             
        </div>
    </div>
      )
}

export default CollectionPage