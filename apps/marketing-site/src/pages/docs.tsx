import DocLayout from '../components/DocLayout';
import React from 'react';
import Image from 'next/image';

const Docs = () => {
  return (
    <DocLayout>
      <h1 className='text-6xl text-gray-700 dark:text-white text-center'>Help, tutorials & documentation</h1>
      <p className='mt-5 text-xl mx-60 text-center'>
        Find is designed to be simple and intuitive, but it’s also super sophisticated. This guide
        covers how to use Find, from first steps to more advanced productivity hacks.
      </p>
      <div className='flex flex-col'>
        <h3 className='text-3xl text-gray-700 dark:text-white mt-12'>Getting Started</h3>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <video className='bg-[#f3f4f5] dark:bg-gray-200-dark w-full rounded-xl mt-10' src='https://www.youtube.com/'/>
            <h2 className='text-xl text-gray-700 dark:text-white mt-7'>
              Proin sollicitudin eleifend urna, quis lacinia eros varius et.
            </h2>
            <p className='mt-4'>
              Nulla convallis congue turpis non elementum. In finibus, sapien lacinia dignissim
              gravida, quam nunc porta nulla, vel rhoncus neque odio id sapien. Fusce euismod enim ut
              neque porta tempor. Mauris sed metus in lorem posuere porttitor sit amet eu nibh.
            </p>
            <div className='mt-4 flex flex-row gap-2'>
              <Image src={'/assets/book.svg'} width={24} height={24} alt=''/>
              <div>10 min read</div>
            </div>
          </div>
          <div>
            <video className='bg-[#f3f4f5] dark:bg-gray-200-dark w-full rounded-xl mt-10' src='https://www.youtube.com/'/>
            <h2 className='text-xl text-gray-700 dark:text-white mt-7'>
              Proin sollicitudin eleifend urna, quis lacinia eros varius et.
            </h2>
            <p className='mt-4'>
              Nulla convallis congue turpis non elementum. In finibus, sapien lacinia dignissim
              gravida, quam nunc porta nulla, vel rhoncus neque odio id sapien. Fusce euismod enim ut
              neque porta tempor. Mauris sed metus in lorem posuere porttitor sit amet eu nibh.
            </p>
            <div className='mt-4 flex flex-row gap-2'>
              <Image src={'/assets/book.svg'} width={24} height={24} alt=''/>
              <div>10 min read</div>
            </div>
          </div>
        </div>
        <h3 className='text-gray-700 dark:text-white text-3xl mt-12'>Privacy and Security</h3>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <video className='bg-[#f3f4f5] dark:bg-gray-200-dark w-full rounded-xl mt-10' src='https://www.youtube.com/'/>
            <h2 className='text-xl text-gray-700 dark:text-white mt-7'>
              Proin sollicitudin eleifend urna, quis lacinia eros varius et.
            </h2>
            <p className='mt-4'>
              Nulla convallis congue turpis non elementum. In finibus, sapien lacinia dignissim
              gravida, quam nunc porta nulla, vel rhoncus neque odio id sapien. Fusce euismod enim ut
              neque porta tempor. Mauris sed metus in lorem posuere porttitor sit amet eu nibh.
            </p>
            <div className='mt-4 flex flex-row gap-2'>
              <Image src={'/assets/book.svg'} width={24} height={24} alt=''/>
              <div>10 min read</div>
            </div>
          </div>
          <div>
            <video className='bg-[#f3f4f5] dark:bg-gray-200-dark w-full rounded-xl mt-10' src='https://www.youtube.com/'/>
            <h2 className='text-xl text-gray-700 dark:text-white mt-7'>
              Proin sollicitudin eleifend urna, quis lacinia eros varius et.
            </h2>
            <p className='mt-4'>
              Nulla convallis congue turpis non elementum. In finibus, sapien lacinia dignissim
              gravida, quam nunc porta nulla, vel rhoncus neque odio id sapien. Fusce euismod enim ut
              neque porta tempor. Mauris sed metus in lorem posuere porttitor sit amet eu nibh.
            </p>
            <div className='mt-4 flex flex-row gap-2'>
              <Image src={'/assets/book.svg'} width={24} height={24} alt=''/>
              <div>10 min read</div>
            </div>
          </div>
        </div>
        <h3 className='text-gray-700 dark:text-white text-3xl mt-12'>Billing and Subscriptions</h3>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <video className='bg-[#f3f4f5] dark:bg-gray-200-dark w-full rounded-xl mt-10' src='https://www.youtube.com/'/>
            <h2 className='text-xl text-gray-700 dark:text-white mt-7'>
              Proin sollicitudin eleifend urna, quis lacinia eros varius et.
            </h2>
            <p className='mt-4'>
              Nulla convallis congue turpis non elementum. In finibus, sapien lacinia dignissim
              gravida, quam nunc porta nulla, vel rhoncus neque odio id sapien. Fusce euismod enim ut
              neque porta tempor. Mauris sed metus in lorem posuere porttitor sit amet eu nibh.
            </p>
            <div className='mt-4 flex flex-row gap-2'>
              <Image src={'/assets/book.svg'} width={24} height={24} alt=''/>
              <div>10 min read</div>
            </div>
          </div>
          <div>
            <video className='bg-[#f3f4f5] dark:bg-gray-200-dark w-full rounded-xl mt-10' src='https://www.youtube.com/'/>
            <h2 className='text-xl text-gray-700 dark:text-white mt-7'>
              Proin sollicitudin eleifend urna, quis lacinia eros varius et.
            </h2>
            <p className='mt-4'>
              Nulla convallis congue turpis non elementum. In finibus, sapien lacinia dignissim
              gravida, quam nunc porta nulla, vel rhoncus neque odio id sapien. Fusce euismod enim ut
              neque porta tempor. Mauris sed metus in lorem posuere porttitor sit amet eu nibh.
            </p>
            <div className='mt-4 flex flex-row gap-2'>
              <Image src={'/assets/book.svg'} width={24} height={24} alt=''/>
              <div>10 min read</div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
};

export default Docs;
