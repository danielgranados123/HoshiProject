const useFetch = () => {
  const SERVER_URL = 'http://localhost:4000/api';

  const useLogin = async (email, password) => {
    try {
      const response = await fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {

        throw new Error(data.message || 'Error en la autenticación');
      }

      return data; 
    } catch (error) {
      console.error('Error en useLogin:', error);
      throw error;
    }
  };

  return { useLogin };
};

export default useFetch;