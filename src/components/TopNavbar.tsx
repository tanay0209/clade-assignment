import jobs from "../assets/icons/jobs.svg"
import message from "../assets/icons/messages-nav.svg"
import payments from "../assets/icons/payments.svg"
import bell from "../assets/icons/bell.svg"
import atlassianrounded from "../assets/icons/atlassian-logo.png"
import chevrondown from "../assets/icons/chevron-down.svg"
import { TopNavItems } from "./index"

function TopNavbar() {
    return (
        <div className='flex justify-between items-center px-8 py-4 border-b'>

            {/* START NAV/ LOGO */}
            <div
                className='text-primary text-xl font-bold bg-secondaryGray py-[9px] px-[24px]'
            >
                Logo
            </div>

            {/* CENTER NAV */}
            <div
                className='border flex justify-center items-center gap-8 p-2 rounded-full text-primaryGray'
            >
                <TopNavItems
                    icon={jobs}
                    title="Jobs"
                    classname="bg-primary text-white rounded-full"
                />
                <TopNavItems
                    icon={message}
                    title="Messages"
                />
                <TopNavItems
                    icon={payments}
                    title="Payments"
                />
            </div>


            {/* END NAV */}
            <div
                className="flex gap-4 items-center"
            >
                <div
                    className="relative flex"
                >
                    <img src={bell}
                        className="size-8"
                        alt="Notifications" />
                    <div className="size-[6px] rounded-full top-0 right-0 bg-primary absolute -translate-x-1/2"></div>
                </div>
                <div
                    className="flex gap-[6px] items-center"
                >
                    <img
                        className="size-10"
                        src={atlassianrounded} alt="Atlassian" />
                    <img
                        className="size-3"
                        src={chevrondown} alt="Menu" />
                </div>

            </div>
        </div>
    )
}

export default TopNavbar