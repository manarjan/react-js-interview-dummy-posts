import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../data/posts"

export const useFetchPosts = () => {
    return useQuery({ queryKey: ['posts'], queryFn: getPosts })
}