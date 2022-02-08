import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/news'>
        <span>News</span>
      </Link>
    </div>
  );
};

export default HomePage;
