import React from "react";
import Header from "../../Components/Header";

export default function ({ data }) {
  return (
    <div>
      <Header title="About" />
      <p>
        Customer support:
        <ul>
          {data &&
            data.map((user) => (
              <li key={user.id}>
                <img src={user.avatar} />
                <br />
                Email: {user.email}
              </li>
            ))}
        </ul>
      </p>
      <style jsx>{`
        li {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const result = await fetch("https://reqres.in/api/users");
  const data = await result.json();

  return {
    props: {
      data: data.data,
    },
  };
}
