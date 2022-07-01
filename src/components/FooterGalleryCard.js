import React from 'react'

function FooterGalleryCard({items}) {
  return (
    <>
    {items.map((item) => (
        <div className='footer-gallery-card' id={item.id}>
            <img src={'./img/'+item.img}/>
        </div>
    ))}
    </>
  )
}

export default FooterGalleryCard