import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="flex justify-between mx-auto p-5 px-15 font-semibold text-white bg-sky-600">
        <Link href={'/'}>Logo</Link>
        <nav>
          <ul className='flex gap-5'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/sign-in'}>Sign In</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
