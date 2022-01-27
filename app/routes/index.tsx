import { LoaderFunction, useLoaderData } from "remix";
import { tables } from "@architect/functions";

export const loader: LoaderFunction = async () => {
  const db = await tables();
  const posts = await db.posts.scan({});
  return { posts: posts.Items };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      {data?.posts
        ? data.posts.map((post: any) => <p key={post.postID}>{post.postID}</p>)
        : null}
    </div>
  );
}
