import React from 'react'

function PlusCard({ items }) {
  return (
    <>
    {items.map((item) => (
        <div className='plus-card'>
            <span>{item.icon}</span>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
        </div>
    ))}
    </>
  )
}

export default PlusCard;