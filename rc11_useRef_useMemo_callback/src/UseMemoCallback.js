import axios from "axios";
import React from "react";
import { useEffect, useState, useRef, useMemo,useCallback } from "react";
import Users from "./components/Users";

const UseMemoCallback = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  console.log("text", text, "search", search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const handleSearch = () => {
    // setSearch(inputRef.current.value)
    setSearch(text);
  };

  const filteredUsers = useMemo(() =>
    users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),[users,search] //! burasi onemli
  );

    
    const addUser = useCallback(() => {
    setUsers([...users,{id:users.length+1,name:`Clarusway-${users.length-9}`},])
},[users])
  return (
    <div>
      <input
        type="search"
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <input type="search" ref={inputRef}  /> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser}/>
      <p>hello</p>
    </div>
  );
};

export default UseMemoCallback;
