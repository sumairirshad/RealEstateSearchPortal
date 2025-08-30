const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

export const userRegistration = async <TResponse>(data: any): Promise<TResponse> => {
  const response = await fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result as TResponse;
};


export const userLogin = async <TResponse>(data: any): Promise<TResponse> => {
  const response = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.messages?.[0] || result.errorMessages?.[0] || "Login failed");
  }

  return result as TResponse;
};
