'use client';
import { useRouter } from 'next/navigation';

export default function ClickMe() {
  const router = useRouter();

  const goToPage = (id) => {
    const subpath = `/subpage/${id}`;
    console.log(`going to page ${subpath}...`);

    router.push(subpath);
  };

  return (
    <p
      style={{ textDecoration: 'underline', cursor: 'pointer' }}
      onClick={() => goToPage(193)}
    >
      Click Me
    </p>
  );
}
