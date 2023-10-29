import HeroSection from './components/HeroSection'
import { useProductContext } from './context/ProductContext'

const About = () => {
  const {myName} = useProductContext()

  const data = {
    name: 'Jyoti Ecommerce',
  }
  return (
    <>
    {myName}
    <HeroSection page={data} />
    </>
    
  )
}

export default About