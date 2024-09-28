import { Netflix_Bg, Netflix_Logo } from '../utilis/constants'
import Login from './Login'

const LandingPage = () => {
   
  return (
    <div className='relative h-screen w-full'>
        <div 
        className='absolute inset-0  bg-cover bg-no-repeat  bg-black bg-opacity-80'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${Netflix_Bg})`,
        }}/>
        <div className='absolute top-1 lg:left-48 md:left-10'>
        <img 
          className="w-48" 
          src={Netflix_Logo} 
          alt="Netflix-logo" 
        />
        </div>
        <div className='flex justify-center pt-36'>
         <Login/>
        </div>
        
    </div>
  )
}

export default LandingPage