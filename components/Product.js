import Link from 'next/link';
import parse from 'html-react-parser';

export default function product({ product }) {
  return (
    <div>
      <Link href={`/${product.slug}`}>
        <a className="text-4xl font-bold">
          {product.title.rendered}
        </a>
      </Link>
      <div className="mt-2 relative">
        <Link href={`/${product.slug}`}>
          <a className="mt-3 text-blue-800 bottom-0">Continue reading</a>
        </Link>
      </div>
    </div>
  );
}
