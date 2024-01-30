"use client";
import { useSelector } from "react-redux";

export default function Home() {
  const authData = useSelector((state) => state.Auth);
  console.log("home", authData);
  return <main className="">Home</main>;
}
