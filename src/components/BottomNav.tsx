
export default function BottomNav() {
    return (
        <div
            className='w-full flex gap-[72px] text-xl text-[#888888] border-b p-4 pl-[100px] font-medium'
        >
            <div
                className='relative text-primary font-semibold flex flex-col items-center'
            >
                <p
                    className="font-bold"
                >
                    Job preview
                </p>
                <div
                    className="bg-primary absolute w-[65px] h-[2px] top-10"
                ></div>
            </div>
            <p>Applicants</p>
            <p>Match</p>
            <p>Messages</p>
        </div>
    )
}
