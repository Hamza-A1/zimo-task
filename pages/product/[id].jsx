import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState('');
  console.log(router.query, 'qq');

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'dd');
        setData(data);
      });
  }, [router.query]);
  const myLoader = ({ src }) => {
    return `${data.thumbnail}`;
  };
  return (
    <>
      <div
        className='w-full h-[500px] relative'
        style={{
          backgroundImage: `url("${data.thumbnail}")`,
          backgroundSize: 'contain',
        }}
      ></div>
      <div
        className='w-full h-[500px] absolute flex items-center justify-center'
        style={{
          top: '0',
          left: '0',
          background:
            'linear-gradient(0deg,rgba(0,0,0,.8),rgba(218,0,55,.569))',
          backdropFilter: 'blur(8px)',
        }}
      >
        <h2 className='text-3xl text-slate-100'>{data.title}</h2>
      </div>
      <div className='w-full absolute' style={{ top: '0px' }}>
        <div className='bg-[#D9325B] h-12 rounded-lg flex justify-between items-center mt-10 px-6 mx-auto  container'>
          <div>NC</div>
          <button className='bg-[#BB808E] px-6 py-1 rounded-lg'>Cart</button>
        </div>
      </div>

      <div className='container mx-auto px-20 my-32 flex '>
        <Image
          loader={myLoader}
          src={data.thumbnail}
          alt='product-image'
          className='h-72 w-60'
          width={100}
          height={100}
        />
        <div className='flex flex-col grow ml-10'>
          <h2 className='text-4xl text-slate-100'>{data.title}</h2>
          <p className='mt-5 text-white'>{data.description}</p>
          <div className='mt-5 flex'>
            <div className='bg-rose-300 text-rose-700 rounded-lg px-1'>
              Pill
            </div>
            <div className='bg-rose-300 text-rose-700 ml-2 rounded-lg px-1'>
              Pill
            </div>
          </div>
          <h2 className='text-3xl mt-5'>
            $<span className='text-light-maroon'>{data.price}</span>
          </h2>
          <div className='h-12 flex justify-between items-center mt-5'>
            <button className='bg-light-maroon px-6 py-2 rounded-lg'>
              Add to cart
            </button>
            <div className='text-emerald-600'>IN STOCK: ${data.stock}</div>
          </div>
          <p className='mt-4'>
            Average rating:{' '}
            <span className='text-emerald-600'>{data.rating}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
