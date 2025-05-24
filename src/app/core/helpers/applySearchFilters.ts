import {User} from "../models/userModels/userModels";

export function applySearchFilters(users: User[], searchName: string, searchEmail: string): User[] {
  return users.filter(user =>
    user.name.toLowerCase().includes(searchName.toLowerCase()) &&
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  )
}

