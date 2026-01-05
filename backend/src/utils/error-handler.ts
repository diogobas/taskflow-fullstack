import { APIGatewayProxyResult } from 'aws-lambda';

export const handleError = (error: unknown): APIGatewayProxyResult => {
  console.error('Error:', error);

  const message = error instanceof Error ? error.message : 'Internal server error';

  return {
    statusCode: 500,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      success: false,
      error: message
    })
  };
};