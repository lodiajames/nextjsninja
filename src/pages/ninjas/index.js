
import Link from "next/link"
// import style from './Ninjas.modules.css'
export const getStaticProps =async  ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
   const data = await response.json()
  return{
    props: {
         ninjas: data
    }
  }
}
export default function Ninjas({ninjas}) {
  return (
    <div>
        <h1> All Ninjas</h1>
        {ninjas.map(ninja=>(
             <Link  href={'ninjas/' + ninja.id} key={ninja.id}>
                <li className="single">
                  <h3 className="title">{ninja.name}</h3>
                  </li>
             </Link>
        ))}
       
    </div>
  )
}
