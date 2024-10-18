import React from 'react'

function displaydata() {
    const user = {
        name: "Ali Raza Khan",
        imageUrl: "https://media.istockphoto.com/id/1831908061/photo/a-balcony-door-featuring-stained-glass-allows-white-light-to-shine-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=nMbvwPn4GTNOObJyzksXrDXjJ98FAjZWY6BXoe8et1Q=",
        imageSize: 100
    } 
  return (
    <div>
        <h1 className='font-bold text-lg'>
           {user.name}
        </h1>
        <img className="rounded-lg"
        width={400}
        src={user.imageUrl}
        style={{
            width: user.imageSize,
            height: user.imageSize
        }}
        />
    </div>
  )
}

export default displaydata