import { Post } from "../../models/Post"
import { URL } from "../../constants/URL"
import { RequestService } from "../../lib/axios";

export const getPosts = () => {
    return RequestService.get<{ posts: Post[] }>(URL.POSTS);
}