import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='flex relative w-full bg-cover bg-center bg-hero-pattern h-screen'>
        <div className='absolute inset-0 flex flex-col items-center '>
          <h1 className='text-slate-900 p-28 text-4xl font-bold h-44'>Umair Ahmed Imran Butt</h1>
          <button className='text-white mt-96 border w-44 h-14 px-6'>Discover</button>
        </div>
      </div>
    </div>
  );
}
