import { Comment } from "../models/comment.model";
import { CommentResponse } from "../reponse-models/comment-response.model";

export function commentToModel(c: CommentResponse): Comment {
  return {
    id: c._id,
    detail: c.detail,
    user: c.user,
    date: c.createdAt,
    rating: c.rating
  };
}