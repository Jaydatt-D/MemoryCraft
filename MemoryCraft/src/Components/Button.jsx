import React from 'react'

function Button(props) {
  return (
    <button
      className={`text-white text-lg py-2 rounded-lg ${props.bg} hover:${props.bghov} duration-300 ease-linear font-semibold`}
      style={{
        paddingLeft: props.x,
        paddingRight: props.x,
        height: props.y
      }}
      onClick={props.func}
    >
      {props.name}
    </button>
  )
}

export default Button
