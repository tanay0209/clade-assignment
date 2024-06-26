import location from '../assets/icons/location.svg'
import money from "../assets/icons/money.svg"


function JobHeader() {
    return (
        <div
            className='w-full pl-[100px] flex flex-col py-8 border-b gap-6'
        >
            <div
                className='flex items-center gap-3'
            >
                <h1
                    className='font-semibold text-[35px]'
                >Senior Product Designer</h1>
                <p
                    className='bg-[#D1D1D1] size-1 rounded-full'
                ></p>
                <p
                    className='font-medium text-sm text-[#888888]'
                >posted 2 days ago</p>
                <div className='flex items-center gap-1 border-[#ABEFC6] border rounded-full px-[6px] py-[2px] bg-[#ECFDF3]'>
                    <div
                        className='size-2 bg-[#17B26A] rounded-full'
                    ></div>
                    <p
                        className='font-medium text-xs text-[#067647]'
                    >Open</p>
                </div>
            </div>



            <div className='flex items-center gap-4 font-medium text-xl text-[#5D5D5D]'>
                <div className='flex gap-2'>
                    <img
                        className='size-6'
                        src={location} alt="Location" />
                    <p>Delaware, USA</p>
                </div>
                <p
                    className='bg-[#D1D1D1] size-1 rounded-full'
                ></p>
                <div className='flex gap-2'>
                    <img
                        className='size-6'
                        src={money} alt="Compensation" />
                    <p>$300k-$400k</p>
                </div>
            </div>
        </div>
    )
}

export default JobHeader