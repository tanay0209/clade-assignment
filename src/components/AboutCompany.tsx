import atlassian from "../assets/icons/atlassian-logo-square.png"

function AboutCompany() {
    return (
        <div className="pl-[100px] font-medium">
            <div className="flex gap-3 py-8 items-center text-xl">
                <img src={atlassian} alt="Atlassian" />
                <p>Atlassian</p>
            </div>
            <div className="flex gap-12 text-sm">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-primaryGray">Company Size</h3>
                        <p className="text-base">1k - 2k Employees</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-primaryGray">Sector</h3>
                        <p className="text-base">Information Technology, Infrastructure</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-primaryGray">Founded In</h3>
                        <p className="text-base">2019</p>
                    </div>
                </div>




                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-primaryGray">Type</h3>
                        <p className="text-base">Private</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-primaryGray">Funding</h3>
                        <p className="text-base">Bootstrapped</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-primaryGray">Founded By</h3>
                        <p className="text-base">Scott Farquhar, Mike Cannon-Brookes</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutCompany