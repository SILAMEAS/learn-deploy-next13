import Image from "next/image";
import React from "react";
const url = "http://jsonplaceholder.typicoe.com/posts";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
async function getDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  return res.json();
}
export default async function page() {
  const [posts, users, dog] = await Promise.all([
    getData(),
    getUser(),
    getDog(),
  ]);
  return (
    <div>
      <Image src={dog.message} alt="DOG" height={300} width={300} />
      <p>all posts</p>
      {posts.map((item: any, index: number) => {
        return <p key={index}>{item.title}</p>;
      })}
      <p>user name</p>
      {users.map((user: any, index: number) => {
        return <p key={index}>{user.name}</p>;
      })}
    </div>
  );
}
