import { Netflix_Bg, Netflix_Logo } from '../../utilis/constants'
import Background from '../Background'
import Login from '../Login'

const LandingPage = () => {
   
  return (
    <div className='relative h-screen w-full'>
        <Background/>
        <div className='flex justify-center pt-36'>
         <Login/>
        </div>
        
    </div>
  )
}

export default LandingPage