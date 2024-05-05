import Link from 'next/link';
import { db } from '@/app/db';

export default async function Home() {
  const cars = await db.car.findMany();

  const renderedCars = cars.map((car) => {
    return (
      <Link
        key={car.id}
        href={`/cars/${car.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{car.marka} {car.model} {car.rok}</div>
        <div>Wyświetl</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Samochody</h1>
        <Link href="/" className="border p-2 rounded bg-red-200 justify-left">
          Wyloguj się
        </Link>
      </div>
      <div className="text-left">
        <Link href="/cars/new" className="border p-2 rounded">
          Dodaj
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-5">{renderedCars}</div>
    </div>
  );
}
