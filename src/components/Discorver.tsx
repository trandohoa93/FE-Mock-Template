import Dropdown from '../assets/image/Line.svg'
import Cancel from '../assets/image/Line.png'
import Image from '../assets/image/michael-dziedzic--LFxVNhopfs-unsplash 1.png'
import avatar1 from '../assets/image/avatar1.png'
import avatar2 from '../assets/image/avatar2.png'
import avatar3 from '../assets/image/avatar3.png'
import Highest from '../assets/image/highest.svg'

const Discorver = () => {
  const items = ['Art', 'Game', 'Photography', 'Music', 'Video']
  const array = ['0', '1', '2', '3', '4', '5', '6', '7']
  return (
    <div className='py-[128px]'>
        <p className='font-bold leading-12 text-[32px]'>Discover</p>
        <div className='mt-20'>
          <div className='flex flex-col gap-8'>
            <div className='flex justify-between pb-8 border-b'>
              <div className='flex justify-between w-[180px] items-center py-1.5 pl-3.5 pr-1.5 rounded-full border-2'>
                <p className='text-[14px] font-medium leading-6'>Recently added</p>
                <div className='flex items-center justify-center rounded-full border-2 p-0.5'>
                <img src={Dropdown}/>
                </div>
              </div>
              <ul className='flex justify-between gap-3 my-2.5'>
                <li className='flex items-center py-1 px-2.5 text-[14px] font-bold leading-4 bg-[#353945] rounded-full border-2 '>
                  <p> All items</p>
                </li>
                {items.map((item) => <li key={item} className='flex items-center py-1.5 px-3 text-[#777E90] text-[14px] leading-4'><p>{item}</p></li>)}
              </ul>
              <button className='flex items-center justify-center gap-3 py-3.5 px-[22px] rounded-full border-2 leading-4 font-bold bg-[#3772FF]'>
                <p>Filter</p>
                <img src={Cancel}></img>
              </button>
            </div>
            <div className='grid grid-cols-4 gap-8 pt-[185px]'>
              {array.map((item) => <div key={item} className="flex flex-col justify-center item">
                <div>
                  <img className='rounded-2xl'src={Image} />
                </div>
                <div className='py-5 flex flex flex-col justify-center gap-3'>
                  <div className='flex justify-between items-center'>
                    <p className='text-[16px] font-medium leading-6'>Amazing digital art</p>
                    <label className='border-solid border-2 border-[#45B26B] rounded pt-1.5 pb-1 px-1.5 text-[12px] font-bold leading-3 text-[#45B26B]'>2.45 ETH</label>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className='w-6 h-6 border-solid border-2 border-[#23262F] rounded-full' src={avatar1}/>
                      <img className='w-6 h-6 border-solid border-2 border-[#23262F] rounded-full ml-[-8px]' src={avatar2}/>
                      <img className='w-6 h-6 border-solid border-2 border-[#23262F] rounded-full ml-[-8px]' src={avatar3}/>
                    </div>
                    <p className='text-[14px] font-medium leading-6'>3 in stock</p>
                  </div>
                  <div className='h-px bg-[#353945]'></div>
                  <div className='flex justify-between'>
                    <div className='flex gap-1'>
                      <img src={Highest} className='w-5 h-5'/>
                      <p className='text-[12px] leading-5 text-[#777E90]'>Highest bid</p>
                      <p className='text-[12px] leading-5 font-semibold'>0.001 ETH</p>
                    </div>
                    <p className='text-[12px] leading-5 text-[#777E90]'>New bid 🔥</p>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </div>
    </div>
  )
}
export default Discorver
