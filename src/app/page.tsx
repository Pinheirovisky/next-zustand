import { submitForm } from "@/actions/postActions";
import { usePostStore } from "@/store/postStore";

export default function Home() {
  const posts = usePostStore.getState().posts;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 text-lg space-y-8 bg-slate-800">
      <h1>Home</h1>
      <form action={submitForm} className="flex space-x-4">
        <input
          className="border rounded bg-slate-100 text-slate-900 p-2"
          type="text"
          name="title"
          id="title"
        />
        <button type="submit" className="border p-2 rounded">
          Add Post
        </button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
