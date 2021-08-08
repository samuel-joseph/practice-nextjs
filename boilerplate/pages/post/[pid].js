// import { useRouter } from "next/router";

// const Post = () => {
//   const router = useRouter();
//   const { pid } = router.query;

//   return <p>Post: {pid}</p>;
// };

// export default Post;

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/home")}>
        Home
      </button>
      <button type="button" onClick={() => router.push("/about")}>
        About
      </button>
    </div>
  );
}
