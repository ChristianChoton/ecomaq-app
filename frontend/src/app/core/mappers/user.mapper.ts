import { UserResponse } from "../reponse-models/user-response.model";
import { User } from "../models/user.model";

export function userToModel(u: UserResponse): User {
  return {
    id: u._id,
    firstName: u.firstName,
    lastName: u.lastName,
    birthDate: u.birthDate,
    email: u.email,
    gender: u.gender,
    mobile: u.mobile
  };
}

export function userToResponse(u: User): UserResponse {
  return {
    _id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    birthDate: u.birthDate,
    email: u.email,
    gender: u.gender,
    mobile: u.mobile,
    subscriptionLevel: 'free'
  };
}