/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page({ notes }) {
  // const notes = new Array(15)
  //   .fill(1)
  //   .map((e, i) => ({ id: i, title: `This is my note ${i}` }));
  // That's on the server side rigth now.

  const router = useRouter();
  const id = 2;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div sx={{ width: "33%", p: 2 }}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <p>Using router</p>
      <button
        sx={{ color: "main" }}
        onClick={(e) => router.push("/notes/[id]", `/notes/${id}`)}
      >
        To Note 2
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`);
  // either full path, from env (prod, dev, stage)
  // or from props in getServerSideProps(props)
  const { data } = await res.json();
  // so no data:data in the above
  return {
    props: { notes: data },
  };
}
