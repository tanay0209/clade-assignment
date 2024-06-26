import React from 'react'
import trashcan from "../assets/icons/trash-can.svg"
import pencil from "../assets/icons/pencil.svg"
import applicants from "../assets/icons/applicants.svg"
import matches from "../assets/icons/matches.svg"
import messages from "../assets/icons/messages.svg"
import views from "../assets/icons/views.svg"


type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <div
            className='flex h-3/4'
        >
            <div className='w-4/5 h-full'>
                {children}
            </div>
            <div className='w-1/5 flex-1 h-screen p-8 shadow-[rgba(0,0,0,0.25)_0px_4px_4px_0px]'>
                {/* BUTTONS */}
                <div
                    className='flex gap-4 font-medium text-base'
                >
                    <div
                        className='flex gap-2 items-center border-primary border rounded-lg px-6 py-3 w-1/2 justify-center'
                    >
                        <img
                            src={trashcan}
                            alt="Delete Job" />
                        <p
                            className='text-primary'
                        >Delete job</p>
                    </div>
                    <div
                        className='flex gap-2 items-center bg-primary text-white py-3 px-6 rounded-lg w-1/2 justify-center'
                    >
                        <img
                            className='size-4'
                            src={pencil}
                            alt="Edit Job" />
                        <p
                            className=''
                        >Edit job</p>
                    </div>
                </div>

                <div
                    className='mt-8 p-3'
                >
                    <div
                        className='flex p-[10px] flex-col'
                    >
                        <div className='flex items-center justify-between'>
                            <div
                                className='flex gap-[10px] items-center'
                            >
                                <img
                                    className='size-5'
                                    src={applicants} alt="Applicants" />
                                <p
                                    className='font-medium text-base'
                                >Applicants</p>
                            </div>
                            <p
                                className='font-semibold text-xl'
                            >400</p>
                        </div>
                        <div
                            className='w-full bg-secondaryGray mt-6 h-[1px]'
                        ></div>
                    </div>

                    <div
                        className='flex p-[10px] flex-col'
                    >
                        <div className='flex items-center justify-between'>
                            <div
                                className='flex gap-[10px] items-center'
                            >
                                <img
                                    className='size-5'
                                    src={matches} alt="Matches" />
                                <p
                                    className='font-medium text-base'
                                >Matches</p>
                            </div>
                            <p
                                className='font-semibold text-xl'
                            >100</p>
                        </div>
                        <div
                            className='w-full bg-secondaryGray mt-6 h-[1px]'
                        ></div>
                    </div>


                    <div
                        className='flex p-[10px] flex-col'
                    >
                        <div className='flex items-center justify-between'>
                            <div
                                className='flex gap-[10px] items-center'
                            >
                                <img
                                    className='size-5'
                                    src={messages} alt="Messages" />
                                <p
                                    className='font-medium text-base'
                                >Messages</p>
                            </div>
                            <p
                                className='font-semibold text-xl'

                            >147</p>
                        </div>
                        <div
                            className='w-full bg-secondaryGray mt-6 h-[1px]'
                        ></div>
                    </div>


                    <div
                        className='flex p-[10px] flex-col'
                    >
                        <div className='flex items-center justify-between'>
                            <div
                                className='flex gap-[10px] items-center'
                            >
                                <img
                                    className='size-5'
                                    src={views} alt="Views" />
                                <p
                                    className='font-medium text-base'
                                >Views</p>
                            </div>
                            <p
                                className='font-semibold text-xl'
                            >800</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Layout