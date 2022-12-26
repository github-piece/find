import DocLayout from '../../components/DocLayout';
import Image from 'next/image';
import React from 'react';


const GettingStarted = () => {
  return (
    <DocLayout>
      <div>
        Docs {'>'} Guide to Find {'>'} Getting Started
      </div>
      <h1 className='text-3xl text-gray-700 dark:text-white mt-12'>
        Getting Started
      </h1>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <video src='https://www.youtube.com/' className='bg-gray-200-dark w-full rounded-xl mt-10'/>
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
          <video src='https://www.youtube.com/' className='bg-gray-200-dark w-full rounded-xl mt-10'/>
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
          <video src='https://www.youtube.com/' className='bg-gray-200-dark w-full rounded-xl mt-10'/>
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
          <video src='https://www.youtube.com/' className='bg-gray-200-dark w-full rounded-xl mt-10'/>
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
    </DocLayout>
  );
};

export default GettingStarted;
