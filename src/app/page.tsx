// pages/login.tsx
"use client";
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios'; 
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); 

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login.ts', { username, password });

      console.log('Odpowiedź po zalogowaniu:', response.data);

      window.location.href = '/cars';
    } catch (error: any) {
      console.error('Błąd logowania:', error.response?.data?.message || 'Wystąpił błąd podczas logowania.');
      setError(error.response?.data?.message || 'Wystąpił błąd podczas logowania.');
    }
  };

  return (
    <div>
      <h1>Logowanie</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Nazwa użytkownika:
          <input
          className="border rounded"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hasło:
          <input 
          className="border rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="mt-2 rounded p-2 bg-blue-200">Zaloguj</button>
      </form>

      <div className="mt-2">
        <Link href={"/register"}>
          <button className="button rounded p-2 bg-green-200">Zarejestruj się</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
