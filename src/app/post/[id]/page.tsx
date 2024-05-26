import { usePostStore } from "@/store/postStore";
import Link from "next/link";

const Post = ({ params }: { params: { id: string } }) => {
  const post = usePostStore
    .getState()
    .posts.find((post) => post.id === params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 text-lg space-y-8 bg-slate-800">
      {!post ? (
        <h1>Not found</h1>
      ) : (
        <>
          <h1 className="text-lg">{post.id}</h1>
          <p className="text-lg">{post.title}</p>
        </>
      )}

      <Link href={"/"}>Back</Link>
    </main>
  );
};

export default Post;
