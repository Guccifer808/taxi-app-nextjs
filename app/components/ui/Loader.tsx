import Image from 'next/image';
import loaderImage from '@/app/assets/images/loaderImg.png';

const Loader = () => {
  return (
    <div className='w-full h-full'>
      <Image src={loaderImage.src} alt='loader' fill priority={true} />
    </div>
  );
};

export default Loader;
