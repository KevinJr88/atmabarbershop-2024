import Form from '@/app/ui/reservations/edit-form';
import Breadcrumbs from '@/app/ui/reservations/breadcrumbs';
import { fetchReservationById, fetchCustomers, fetchAllReservationIds } from '@/app/lib/data';

export async function generateStaticParams() {
    const reservationIds = await fetchAllReservationIds();
    return reservationIds.map((id: string) => ({ params: { id } }));
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [reservation, customers] = await Promise.all([
        fetchReservationById(id),
        fetchCustomers(),
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Reservations', href: '/dashboard/reservations' },
                    {
                        label: 'Edit Reservation',
                        href: `/dashboard/reservations/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form reservation={reservation} customers={customers} />
        </main>
    );
}