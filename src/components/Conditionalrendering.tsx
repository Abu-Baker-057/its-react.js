import React from 'react'

function rendering() {
    function Admin() {
        return <>WELCOME BACK</>
    }
    function Login () {
        return <>PLEASE LOGIN</>
    }

    // let content;
    let isLoggedIn = true

    // if(isLoggedIn) {
    //     // content = <h1>Welcome Back</h1>
    //     content = <Admin />
    // } else {
    //     // content = <h1>Please Login</h1>
    //     content = <Login />
    // }
      return (
        <>
            {/* <div>{content}</div> */}
            <div>{isLoggedIn? <Admin/> : <Login/>}</div>
        </>
  )
}

export default rendering