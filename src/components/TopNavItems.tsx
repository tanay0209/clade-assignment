

type TopNavItemProps = {
    icon: string,
    title: string,
    classname?: string
}

function TopNavItems({ icon, title, classname = "" }: TopNavItemProps) {
    return (
        <div
            className={`flex gap-2 p-3 items-center ${classname}`}
        >
            <div className={title === "Messages" ? "relative size-6" : "size-6"}>
                <img
                    className="size-6"
                    src={icon}
                    alt={title} />
                {title === 'Messages' ? <div className="size-[6px] rounded-full top-0 right-0 translate-x-0.5 -translate-y-0.5 bg-primary absolute"></div> : <></>}
            </div>

            <p
                className="font-medium text-xl"
            >

                {title}</p>

        </div>
    )
}

export default TopNavItems