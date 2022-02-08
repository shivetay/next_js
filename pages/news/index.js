import Link from 'next/link';

// domain/news

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
      <Link href='/news/new-post'>
        <span>News Post</span>
      </Link>
    </div>
  );
};

export default NewsPage;
