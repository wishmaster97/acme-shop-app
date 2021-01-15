import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Announcement from '../components/Announcement'


const Header = ({count,cartProduct}) => {
    return ( <nav>
        <div className='banner'>
           <Link to='/announcement'> <button className='announcement_btn'>Announcement</button></Link>
            <div className='alert'>How we're responding to COVID-19</div>
        </div>
        <div className='navbar'>
            <div className='Logo_wrapper'>
            <NavLink to='/'><img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg'/ >
            </NavLink>
            </div>
           <div className='menu_wrapper'>
           <NavLink className='menu' to='/'>Home</NavLink>
           <NavLink className='menu'  to='/about'>About</NavLink>
           <NavLink className='menu'  to='/shop'>Shop</NavLink>
           <NavLink className='menu'  to='/donate'>Donate</NavLink>
           <NavLink className='menu'  to='/contact'>Contact</NavLink>
           <div className='cartWrapper'>
            <img className='cart_icon' src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg'/>
            <div className='count'>{count}</div>
           </div>
           </div>
        </div>
           
    </nav>   );
}
 const mapStateToProps=(store)=>({
     count:store?.cartProduct?.length,
     cartProduct:store?.cartProduct
 })
export default connect(mapStateToProps)(Header);