import { db } from '@/app/db';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';

export default function RegisterCreatePage() {
  
  async function createUser(formData: FormData) {

    'use server';

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;


    const user = await db.user.create({
      data: {
        username,
        password,
      },
    });
    console.log(user);

    redirect('/');
  }

  return (
    <form action={createUser}>
      <h3 className="font-bold m-3">Tworzenie nowego użytkownika</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-36" htmlFor="username">
            Nazwa użytkownika
          </label>
          <input
            name="username"
            id="username"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-36" htmlFor="code">
            Hasło
          </label>
          <textarea
            name="password"
            id="password"
            className="border rounded p-2 w-full"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Zarejestruj
        </button>
        <Link href="/" className="text-center rounded p-2 bg-red-200">
          Cofnij
        </Link>
      </div>
    </form>
  );
}