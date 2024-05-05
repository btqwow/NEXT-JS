import { db } from '@/app/db';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function CarCreatePage() {
  async function createCar(formData: FormData) {

    'use server';

    const marka = formData.get('marka') as string;
    const model = formData.get('model') as string;
    const rok = formData.get('rok') as string;


    const car = await db.car.create({
      data: {
        marka,
        model,
        rok,
      },
    });
    console.log(car);


    redirect('/lista');
  }

  return (
    <form action={createCar}>
      <h3 className="font-bold m-3">Tworzenie samochodu</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-36" htmlFor="marka">
            Marka samochodu
          </label>
          <input
            name="marka"
            id="marka"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-36" htmlFor="model">
            Kod snippeta
          </label>
          <textarea
            name="model"
            id="model"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-36" htmlFor="rok">
            Kod snippeta
          </label>
          <textarea
            name="rok"
            id="rok"
            className="border rounded p-2 w-full"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Zapisz
        </button>
        <div className="flex flex-col gap-4 text-center">
            <Link href="/lista" className="rounded p-2 bg-red-200">
                 Cofnij
            </Link>
        </div>
      </div>
    </form>
  );
}
