import Image from 'next/image';
import { Inter } from 'next/font/google';
import ProductCard from '@/components/ProductCard';

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return {
    props: { products: data.products },
  };
};

export default function Home({ products }) {
  console.log(products);
  return (
    <div className='container mx-auto px-20'>
      <div className='bg-dark-maroon h-12 rounded-lg flex justify-between items-center px-6 mt-10'>
        <div>NC</div>
        <button className='bg-[#BB808E] px-6 py-1 rounded-lg'>Cart</button>
      </div>

      <h2 className='text-3xl text-center mt-40'>
        AVAILABLE <span className='text-dark-maroon'>ITEMS</span>
      </h2>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
        {products.map((product, index) => {
          return <ProductCard data={product} key={index} />;
        })}
      </div>
    </div>
  );
}
