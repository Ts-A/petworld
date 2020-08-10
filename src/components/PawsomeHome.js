import React from 'react'
import {Link} from 'react-router-dom'

const Home = ()=>{
    return(
        <div className='Home ui container'>
            <table className="ui green inverted table">
            <thead>
                <tr>
                <th id='poison' className='poisons' >SNo.</th>    
                <th>Todos</th>
                <th>Status</th>
                <th>About</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td><Link to='/'>Home Page</Link></td>
                <td>Nope</td>
                <td>Construct a landing Page.Do at last</td>
                </tr>
                <tr>
                <td>2</td>
                <td><Link to='/userDashboard'>User Page</Link></td>
                <td>Nope</td>
                <td>Primary.User Profile</td>
                </tr>
                <tr>
                <td>3</td>
                <td><Link to='/petTradeHome'>PetTrade</Link></td>
                <td>Nope</td>
                <td>Primary.E-commerce website that allows users to trade,donate and sell pets</td>
                </tr>
                <tr>
                <td>4</td>
                <td><Link to='/'></Link>PetVacation and PetCare and PetWalk</td>
                <td>Nope</td>
                <td>Primary.Take care of pets for a specified time by companies or by other people</td>
                </tr>
                <tr>
                <td>5</td>
                <td><Link to='/'></Link>Pet++</td>
                <td>Nope</td>
                <td>Secondary.Pet Magazine</td>
                </tr>
                <tr>
                <td>6</td>
                <td><Link to='/'></Link>Pet Blog</td>
                <td>Nope</td>
                <td>Secondary.Blogging</td>
                </tr>
                <tr>
                <td>7</td>
                <td><Link to='/'></Link>Pet Mate</td>
                <td>Nope</td>
                <td>Mating Site Arrangement for pets</td>
                </tr>
            </tbody>
            <tfoot>
                <tr><th>7 Tasks</th>
                <th>7 to complete</th>
                <th colSpan='2'></th>
            </tr></tfoot>
            </table>
       </div>
    )
}

export default Home