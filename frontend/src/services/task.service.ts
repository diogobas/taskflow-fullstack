import { Task, CreateTaskDTO, UpdateTaskDTO, TaskStatus } from '../types/task.types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class TaskService {
  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const token = localStorage.getItem('authToken');
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
  }

  async getTasks(userId: string): Promise<Task[]> {
    const response = await this.request<{ success: boolean; data: Task[] }>('/tasks');
    return response.data;
  }

  async createTask(taskData: CreateTaskDTO): Promise<Task> {
    const response = await this.request<{ success: boolean; data: Task }>('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
    return response.data;
  }

  async updateTask(taskId: string, updates: UpdateTaskDTO): Promise<Task> {
    const response = await this.request<{ success: boolean; data: Task }>(
      `/tasks/${taskId}`,
      {
        method: 'PUT',
        body: JSON.stringify(updates),
      }
    );
    return response.data;
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.request<void>(`/tasks/${taskId}`, {
      method: 'DELETE',
    });
  }
}

export const taskService = new TaskService();