import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import img1 from './Content Area.png'
import black from './black.png'
import { useContext } from "react"
import { authContext } from "./store"
import { Button } from "react-bootstrap"
import { IoIosUnlock } from "react-icons/io";
import './Navigation.css'



export const Navigation = () =>{
    const {state} = useContext(authContext)
    const path = useLocation()
    const navigate = useNavigate()
    const Activepath = path.pathname
    const change = () =>{
        navigate("/")
        
    }
    return (
        <div>
        <section>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <img src= {img1} alt="nav"/>
                </div>
            </nav>
        </section>
        <div className='d-flex flex-row '>
        <section className="">
            <ul
                id="sidebar"
                style={{
                    width: '15rem',
                    height: '500px',
                    background: 'white',
                    fontSize: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                }}
            >
                <li style={{ listStyle: 'none', padding: '10px' }}>
                    <Link
                        to='/navigation/overview'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none', // Remove underline
                            color: Activepath === '/navigation/overview' ? 'purple' : 'black',
                             fontWeight : Activepath ==='/navigation/overview' ? 'bold' : 'normal'
                            
                        }}
                    >
                        <img src={black} alt="black" style={{ marginRight: '10px', }} />
                        Overview
                    </Link>
                </li>
                <li style={{ listStyle: 'none', padding: '10px' }}>
                    <Link
                        to='/navigation/people'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none', // Remove underline
                           color: Activepath === '/navigation/people' ? 'purple' : 'black',
                           fontWeight : Activepath ==='/navigation/people' ? 'bold' : 'normal'

                        }}
                    >
                        <img src={black} alt="black" style={{ marginRight: '10px' }} />
                        People Directory
                    </Link>
                </li>
             
                <Button variant="outline-dark " className="w-45 h-15 " style={{marginTop:'30px', alignSelf:'center'}} onClick={change} >Logout<IoIosUnlock  />
                </Button>
            
            </ul>
         
                   
               
        </section>
        <section>
            {state ? <Outlet/> :"You need to Login First.."}</section>
        </div>
       
       </div>
    )
}