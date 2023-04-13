import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ data }) => {
  const myLoader = ({ src }) => {
    return `${data.thumbnail}`;
  };
  console.log(data, 'AA');
  return (
    <div className='group relative rounded-lg flex flex-col'>
      <div className='min-h-72 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72'>
        <Image
          loader={myLoader}
          src={data.thumbnail}
          alt='product-image'
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          width={100}
          height={100}
        />
      </div>
      <div className='bg-[#444444] grow rounded-b-md lg:h-56 min-h-56 p-4  flex flex-col justify-between'>
        <div>
          <Link href={`/product/${data.id}`}>
            <h2
              className='text-3xl text-slate-100 mt-5'
              style={{ maxHeight: '36px', overflow: 'hidden' }}
            >
              {data.title.slice(0, 24)}
            </h2>
            <p className='mt-1 text-white'>
              <span>{data.description.slice(0, 50)}</span> {' ... '}
              <span className='text-light-maroon'>read&nbsp;more</span>
            </p>
            <p className='text-2xl font-medium text-light-maroon'>
              ${data.price}
            </p>
          </Link>
        </div>
        <button className='bg-light-maroon w-full py-3 rounded-lg'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
