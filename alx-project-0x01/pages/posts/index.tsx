import Button from "@/components/common/Button";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <Button
            title="Add Post"
            styles="bg-blue-700 px-4 py-2 rounded-full text-white"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts && posts.map(({ title, body, userId, id }: PostProps, key: number) => {
            return (
              <PostCard
                title={title}
                body={body}
                userId={userId}
                id={id}
                key={key}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
      props: {
        posts: [...posts],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Posts;
