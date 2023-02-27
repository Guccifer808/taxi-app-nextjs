import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import './globals.css';

import favIcon from '@/app/assets/favicon.ico';
import Loader from '../ui/Loader';

interface ILayout {
  title: string;
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>{title} | Taxi App</title>
        <meta name='description' content='Taxi App' />
        <link rel='shortcut icon' href={favIcon.src} type='image/x-icon' />
      </Head>
      <Script
        strategy='beforeInteractive'
        src={`https://maps.googleapis.com/maps/api/js?kay=${process.env.MAP_KEY}&libraries=places`}
      />
      <div
        style={{ maxWidth: 480 }}
        className='relative mx-auto overflow-hidden'
      >
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
};

export default Layout;
