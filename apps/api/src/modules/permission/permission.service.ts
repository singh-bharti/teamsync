import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService {
  async assertCanViewWorkspace(
    userId: string,
    workspaceId: string,
  ): Promise<void> {}

  async assertCanUpdateWorkspace(
    userId: string,
    workspaceId: string,
  ): Promise<void> {}

  async assertCanInviteMember(
    userId: string,
    workspaceId: string,
  ): Promise<void> {}

  async assertCanCreateTask(
    userId: string,
    workspaceId: string,
  ): Promise<void> {}

  async assertCanUpdateTaskTitle(
    userId: string,
    taskId: string,
  ): Promise<void> {}

  async assertCanUpdateTaskDescription(
    userId: string,
    taskId: string,
  ): Promise<void> {}

  async assertCanAssignTask(userId: string, taskId: string): Promise<void> {}

  async assertCanChangeTaskStatus(
    userId: string,
    taskId: string,
  ): Promise<void> {}

  async assertCanCommentOnTask(userId: string, taskId: string): Promise<void> {}
}
