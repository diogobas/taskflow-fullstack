import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { TaskService } from '../services/task.service';
import { CreateTaskDTO, UpdateTaskDTO } from '../types/task.types';
import { handleError } from '../utils/error-handler';

const taskService = new TaskService();

export const createTask: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // TODO: Implement authentication
    const userId = 'demo-user';
    
    const taskData: CreateTaskDTO = JSON.parse(event.body || '{}');
    
    const task = await taskService.createTask({
      ...taskData,
      userId
    });

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        data: task
      })
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getTasks: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // TODO: Implement authentication
    const userId = 'demo-user';
    
    const tasks = await taskService.getUserTasks(userId);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        data: tasks
      })
    };
  } catch (error) {
    return handleError(error);
  }
};

export const updateTask: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // TODO: Implement authentication
    const userId = 'demo-user';
    const taskId = event.pathParameters?.id;
    
    if (!taskId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Task ID is required' })
      };
    }

    const updates: UpdateTaskDTO = JSON.parse(event.body || '{}');
    
    const task = await taskService.updateTask(taskId, userId, updates);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        data: task
      })
    };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTask: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // TODO: Implement authentication
    const userId = 'demo-user';
    const taskId = event.pathParameters?.id;
    
    if (!taskId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Task ID is required' })
      };
    }

    await taskService.deleteTask(taskId, userId);

    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: ''
    };
  } catch (error) {
    return handleError(error);
  }
};