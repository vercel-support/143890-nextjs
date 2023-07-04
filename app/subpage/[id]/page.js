'use client';

import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const router = useRouter();

  const goBack = (id) => {
    router.push('/');
  };

  return (
    <section>
      <p>ID: {params.id}</p>
      <p
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => goBack()}
      >
        Go Back
      </p>
    </section>
  );
}
