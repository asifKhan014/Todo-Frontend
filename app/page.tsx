"use client"
// import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

export default function Page() {
 
  return (
    <div className="flex h-screen w-full justify-center items-center">
      {/* {tasks.map((todo, id) => {
        return <li  key={id}>{JSON.stringify(todo['text'])}</li>
      })} */}
      <AddTask/>
    </div>
  );
}

