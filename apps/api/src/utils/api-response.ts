export function ok<T>(message: string, data: T) {
  return {
    success: true,
    message,
    data
  };
}