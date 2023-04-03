// TODO: Login síða

import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(username, password);

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
