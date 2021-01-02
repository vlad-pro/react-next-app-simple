import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  const router = useRouter();
  const id = 2;

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}

      <p>Using router</p>
      <button onClick={(e) => router.push("/notes/[id]", `/notes/${id}`)}>
        To Note 2
      </button>
    </div>
  );
};

export default Page;
