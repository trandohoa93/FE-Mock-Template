import Logo from '../assets/image/logo.png'
import ArrowRight from '../assets/image/Arrow Right.svg'
const Footer = () => {
  return (
    <div className='pt-[80px] px-[160px] flex flex-col'>
      <div className='flex justify-between gap-[32px] pb-[48px] border-b'>
        <div className='flex flex-col items-start w-[352px]'>
          <img src={Logo} className='h-24 w-45 relative left-[-63px] top-[-32px]'/>
          <p className='text-[24px] leading-8 w-[256px]'>The New Creative Economy.</p>
      </div>
      <div className='flex flex-col gap-10 w-[160px]'>
        <p className='text-[16px] font-medium leading-6'>Stacks</p>
        <div className='flex flex-col gap-6 text-[14px] font-bold leading-4 text-[#777E90]'>
          <p>Discover</p>
          <p>Connect wallet</p>
          <p>Create item</p>
        </div>
      </div>
      <div className='flex flex-col gap-10 w-[160px]'>
        <p className='text-[16px] font-medium leading-6'>Info</p>
        <div className='flex flex-col gap-6 text-[14px] font-bold leading-4 text-[#777E90]'>
          <p>Download</p>
          <p>Demos</p>
          <p>Support</p>
        </div>
      </div>
      <div className='flex flex-col gap-10 w-[352px]'>
        <p className='text-[16px] font-medium leading-6'>Join Newsletter</p>
        <div className='flex flex-col gap-6 text-[14px] leading-6 text-[#E6E8EC]'>
          <p>
            Subscribe our newsletter to get more free design course and resource
          </p>
          <div className='flex justify-between items-center gap-[18px] border-2 rounded-full py-1.5 pr-1.5 pl-3.5 w-[352px]'>
                <input placeholder='Enter your email' className='bg-transparent text-[14px] leading-6 focus:outline-none w-full'/>
                <button className='p-1 rounded-full bg-[#3772FF]'>
                  <img src={ArrowRight} className='w-6 h-6'/>
                </button>
          </div>
        </div>
      </div>
      </div>
      <div className='flex justify-between py-8'>
        <p className='text-[12px] leading-5 text-[#777E90]'>Copyright © 2021 UI8 LLC. All rights reserved</p>
        <div className='flex justify-center items-center gap-4'>
          <p className='text-[12px] leading-5 text-[#E6E8EC]'>
            We use cookies for better service.
          </p>
          <p className='text-[12px] font-semibold leading-5 text-[#3772FF]'>
            Accept
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
