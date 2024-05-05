import { notFound } from 'next/navigation';
import { db } from '@/app/db';
import Link from 'next/link';

interface CarShowPageProps {
  params: {
    id: string;
  };
}

export default async function CarShowPage(props: CarShowPageProps) {
  await new Promise((r) => setTimeout(r, 50));

  const car = await db.car.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!car) return notFound();

  return <div> 
    <div>
        Marka {car.marka} 
    </div> 
    <div>
        Model {car.model}
    </div> 
    <div>
        rok {car.model}
    </div> 
    <div className="mt-5">
        <Link href="/lista" className="rounded p-2 bg-red-200">
          Cofnij
        </Link>
    </div>
    </div>

}
