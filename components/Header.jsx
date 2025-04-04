import { SignedIn, SignInButton } from '@clerk/nextjs';
import { SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="flex justify-between mx-auto p-5 px-15 font-semibold text-white bg-sky-600">
        <Link href={'/'}>Clerk Auth</Link>
        <nav>
          <ul className="flex gap-5">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
