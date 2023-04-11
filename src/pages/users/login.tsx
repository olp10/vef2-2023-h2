// TODO: Login síða

import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';


export default function Login() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let loginInfo = null;
    try {
      loginInfo = JSON.parse(Cookies.get('loginInfo') || '');
    } catch (error) {
      console.error('Error parsing login info:', error);
    }
    if (loginInfo) {
      setLoggedIn(true);
    }
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => res.json()).then(data => {
    console.log(data);

    if (data) {
      setLoggedIn(true);
      Cookies.set('loginInfo', JSON.stringify({ username, password }));
      // Reroute to the home page
      router.push('/');
    }
  });

  }
  return (
    <>
      <form method="post" action="http://localhost:3001/login" onSubmit={onSubmit}>
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>
    </>
  );

}
