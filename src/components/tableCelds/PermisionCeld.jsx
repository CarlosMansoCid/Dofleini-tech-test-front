import React from 'react'

const PermisionCeld = ({permision}) => {
  return (
    <th style={{padding:'0 1rem'}}>{permision.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</th>
  )
}

export default PermisionCeld