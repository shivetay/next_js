import { useRouter } from 'next/router';
import Link from 'next/link';

// domain/news/news-page

const NewsPages = () => {
  const router = useRouter();

  console.log(router.query.newsId);
  return (
    <div>
      <h1>News Page</h1>
      <Link href='/'>
        <span>home</span>
      </Link>
    </div>
  );
};

export default NewsPages;
