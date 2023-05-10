import { useRouter } from 'next/router'
import {NextPage} from 'react'

const CarPage: NextPage = () => {
  
  const {asPath, pathname} = useRouter()
  
    console.log(asPath, pathname);

    return <div>Car page</div>
  
}

export default CarPage