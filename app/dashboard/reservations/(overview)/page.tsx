import Pagination from '@/app/ui/reservations/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/reservations/table';
import { CreateReservation } from '@/app/ui/reservations/buttons';
import { kanit } from '@/app/ui/fonts';
import { CreateReservationSkeleton, ReservationsTableSkeleton, SearchReservationSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchReservationsPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchReservationsPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${kanit.className} text-2xl`}>Reservations</h1>
      </div>
       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<SearchReservationSkeleton />}>
          <Search placeholder="Search reservations..." />
        </Suspense>
        <Suspense fallback={<CreateReservationSkeleton />}>
           <CreateReservation />
        </Suspense>
      </div>
      
      <Suspense
        key={query + currentPage}
        fallback={<ReservationsTableSkeleton />}
      >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
