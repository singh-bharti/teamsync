export const PERMISSION_ERROR_MESSAGES = {
  WORKSPACE_NOT_FOUND: 'Workspace not found',
  TASK_NOT_FOUND: 'Task not found',
  USER_NOT_WORKSPACE_MEMBER: 'User is not a member of this workspace',
  CLIENT_READ_ONLY: 'Client users have read-only access',
  INTERN_LIMITED_ACCESS: 'Interns can only update assigned tasks',
  TASK_ALREADY_DONE: 'Completed tasks cannot be modified',
} as const;
