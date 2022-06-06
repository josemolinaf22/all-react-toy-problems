import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const clickHandler = () => {
    alert(`Username: ${user} Password:  ${pass}`);
  };
  return (
    <div>
      Login
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <input type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={clickHandler}>Login</button>
    </div>
  );
}

export default Login;
