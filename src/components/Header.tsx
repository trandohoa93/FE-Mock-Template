import Logo from '../assets/image/logo.svg'
import Search from '../assets/image/search.svg'
import Bell from '../assets/image/bell.svg'
import Status from '../assets/image/status.svg'
const Header = () => {
  return (
    <div className='py-6 h-[81px] flex justify-between border-b px-40'>
        <div className='flex gap-8 item h-10'>
            <div className='border-r-2'>
                <img src={Logo} className='h-24 w-45 relative left-[-63px] top-[-32px]'/>
            </div>
            <ul className='flex items-center gap-8 text-[14px]'>
                <li>
                    <a>Discover</a>
                </li>
                <li>
                    <a>How it work</a>
                </li>
            </ul>
        </div>
        <div className='flex gap-6 items-center'>
            <div className='flex justify-between items-center border-2 rounded-lg py-2 pr-3 pl-4 w-64'>
                <input placeholder='Search' className='bg-transparent w-full text-[12px] focus:outline-none'/>
                <img src={Search} className='w-5 h-5'/>
            </div>
            <div className='relative flex justify-between items-center p-2'>
                <img src={Bell}/>
                <img src={Status} className='absolute top-0 right-0'/>
            </div>
            <div>
                <div className='flex gap-3 text-[14px]'>
                        <button className='flex items-center py-3 px-4 bg-[#3772FF] rounded-full leading-4 font-bold'>
                            <p>Upload</p>
                        </button>
                        <button className='flex items-center py-3 px-4 rounded-full border-2 leading-4 font-bold h-[40px]'>
                            <p>Connect Wallet</p>
                        </button>
                </div>
            </div>
        </div>

    </div>
  )
}
export default Header
