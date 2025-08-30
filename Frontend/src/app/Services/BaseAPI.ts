const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

export const insertProperty = async <TResponse>( data: any): Promise<TResponse> => {
 
    const response = await fetch(`${apiUrl}/Home/insertProperty`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json() as TResponse;  
};

export const fetchProperties = async <TResponse>( data: any): Promise<TResponse> => {
 
    const response = await fetch(`${apiUrl}/Home/fetchProperties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json() as TResponse;  
};

export const saveFavourites = async <TResponse>( data: any): Promise<TResponse> => {
 
    const response = await fetch(`${apiUrl}/Home/saveFavourites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json() as TResponse;  
};

export const fetchIsPropertyFavourited = async <TResponse>( data: any): Promise<TResponse> => {
 
    const response = await fetch(`${apiUrl}/Home/fetchIsPropertyFavourited`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json() as TResponse;  
};

export const FetchDashboardData = async <TResponse>( data: any): Promise<TResponse> => {
 
    const response = await fetch(`${apiUrl}/Home/fetchDashboardData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json() as TResponse;  
};