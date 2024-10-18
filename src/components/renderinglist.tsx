// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },
//   ];
  
//   export default function ShoppingList() {
//     const listItems = products.map(product =>
//       <li
//         key={product.id}
//         style={{
//           color: product.isFruit ? 'magenta' : 'darkgreen'
//         }}
//       >
//         {product.title}
//       </li>
//     );
  
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
// import React from 'react'

// const products = [
//     { title: 'AAA', isFruit: false, id: 1 },
//     { title: 'BBB', isFruit: true, id: 2 },
//     { title: 'CCC', isFruit: true, id: 3 },
//     { title: 'DDD', isFruit: false, id: 4 },
//     { title: 'EEE', isFruit: true, id: 5 },
//     { title: 'FFF', isFruit: true, id: 6 },
//     { title: 'GGG', isFruit: false, id: 7 },
//     { title: 'HHH', isFruit: false, id: 8 },
//     { title: 'KKK', isFruit: true, id: 9 },
//   ]

// function renderinglist() {
//   return (
//     <div className='p-5'>
//     {/* <div>{products}</div> */}
//     {/* <pre>{JSON.stringify(products)}</pre> */}
//     <ul className='list-disc'>
//         {products.map((val)=>{
//             return (
//             <li
//             key={val.id}
//             style={{color: val.isFruit ? "green" : "red"}}>
//                 {val.title}
//             </li>
//             )
//         })}
//     </ul>
//     </div>
//   )
// }

// export default renderinglist

// ===========================================================

const std_detail = [
    {
        name: "Abu Bakr",
        age: 18,
        school: "Govt",
        educ: "Inter",
    },
    {
        name: "Ali Raza",
        age: 15,
        school: "Govt",
        educ: "Matric",
    },
    {
        name: "Adeel Amjad",
        age: 19,
        school: "Govt",
        educ: "Graduation...",
    },
    {
        name: "Abdul Raheem",
        age: 21,
        school: "Govt",
        educ: "Graduation",
    },
    {
        name: "Ahamd Ali",
        age: 16,
        school: "Govt",
        educ: "Matric",
    },
]

export default function ShoppingList() {
    const std_name = std_detail.map(std_detail =>
      <li
      key={std_detail.name}
      >
        {std_detail.name}
      </li>
    )

    const std_age = std_detail.map(std_detail =>
        <li
        key={std_detail.age}
        >
        {std_detail.age}
        </li>
    )

    const std_sch = std_detail.map(std_detail =>
        <li
        key={std_detail.school}
        >
        {std_detail.school}
        </li>
    )

    const std_edu = std_detail.map(std_detail =>
        <li
        key={std_detail.educ}
        >
        {std_detail.educ}
        </li>
    );
  
    return (
        <div className="flex">
            <div>{std_name}</div>
            <div className="pl-4">{std_age}</div>
            <div className="pl-4">{std_sch}</div>
            <div className="pl-4">{std_edu}</div>
            {/* <ul>{std_name}{std_age}{std_sch}{std_edu}</ul>  */}
            {/* <ul>{std_name}</ul>
            <ul className="pl-4">{std_age}</ul>
            <ul className="pl-4">{std_sch}</ul>
            <ul className="pl-4">{std_edu}</ul> */}
        </div>
    );
  }