import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#1C1E32", color: "#F77D0A", padding: "10px 25px" , borderRadius: "10px", marginTop:"5px", marginBottom:"5px", cursor:"pointer", hover:""
  };
 return (
 <header style={headerStyle}>
 <h1 style={{ fontSize: "25px", fontFamily: "Poppins" , lineHeight: "1.27em", margin: "0px auto", textAlign: "center"}}>Simple Todo App</h1>
 </header>
 );
};

export default Header;