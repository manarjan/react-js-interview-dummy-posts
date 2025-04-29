import { useFetchPosts } from "../../services/hooks/useFetchPosts";
import { AlertCircle, Loader2 } from "lucide-react";

export const Posts = () => {
  const { data: response, isLoading, isError, error } = useFetchPosts();

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center gap-3 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium">Error loading posts</h3>
            <p className="text-sm mt-1">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !response) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading posts...</span>
        </div>
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="flex gap-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-6 w-16 bg-gray-200 rounded-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {response.data.posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.body}</p>
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.reactions.likes} likes</span>
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};