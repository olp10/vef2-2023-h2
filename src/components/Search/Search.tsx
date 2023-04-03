import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Leita í gagnagrunni dynamically?
    setQuery(e.target.value);
    console.log(query);
  }


  return (
    <>
      <input type="search" value={query} onChange={searchHandler} />
    </>
  )
}
