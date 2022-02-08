import clsx from 'clsx'
import React from 'react'
import { useDispatch } from 'react-redux'
import cart from './cart.module.scss'
import { turnOn } from "../../../../redux";


function Cart() {

  const dispatch = useDispatch()

  return (
    <div 
      className={clsx(cart.cartWrapper)}
      onClick={() => dispatch(turnOn(true))}
    >
      <img className={clsx(cart.cartIcon)} src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"/>
      <span className={clsx(cart.cartNumberItem)}>0</span>
      <span className={clsx(cart.cartTitle, 'displayNone')}>Giỏ Hàng</span>
    </div>
  )
}

export default Cart
