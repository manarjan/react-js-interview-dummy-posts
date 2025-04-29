import { useFetchPosts } from "../../services/hooks/useFetchPosts";

export const Posts = () => {
  const { data: response, isLoading, isError, error } = useFetchPosts();

  if (isError) {
    return <div>{error.message}</div>
  }

  if (isLoading || !response) {
    return 'Loading'
  }

  return response.data.posts.map((post) => (<div key={post.id}>
    <p>{post.title}</p>
  </div>));
};
