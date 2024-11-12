import { UserQueryDTO } from "../allUsers/allUsers.dto"

export interface TaskCreateDTO {
  name: string
  description: string
  dueDate: Date
  doDate: Date
  emergency: boolean
  locational: boolean
  storyPoints: number
  priority: number
  ordering: number
  completed: boolean
  projectId: string
}

export interface TaskQueryDTO {
  taskId: string
  userId: UserQueryDTO["userId"]
}
