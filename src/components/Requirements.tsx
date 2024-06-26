import figma from "../assets/icons/figma.png"
import illustrator from "../assets/icons/illustrator.png"
import adobexd from "../assets/icons/adobexd.png"

function Requirements() {
    return (
        <div
            className='pl-[100px] flex py-8 gap-16 font-medium border-b'
        >
            <div>
                <h3 className="text-sm text-primaryGray">Skills Required</h3>
                <div className="border border-[#D0D5DD] rounded-md flex items-center justify-start p-1 mt-3 gap-1 w-max">
                    <img src={figma} alt="Figma" />
                    <p className="text-xs">Figma</p>
                </div>

                <div className="border border-[#D0D5DD] rounded-md flex items-center justify-start p-1 mt-3 gap-1 w-max">
                    <img src={illustrator} alt="Adobe Illustrator" />
                    <p className="text-xs">Adobe Illustrator</p>
                </div>

                <div className="border border-[#D0D5DD] rounded-md flex items-center justify-start p-1 mt-3 gap-1 w-max">
                    <img src={adobexd} alt="Adobe XD" />
                    <p className="text-xs">Adobe XD</p>
                </div>
            </div>

            <div>
                <h3 className="text-sm text-primaryGray">Preferred Language</h3>
                <p className="mt-3 font-semibold text-base">English</p>
            </div>

            <div>
                <h3 className="text-sm text-primaryGray">Type</h3>
                <p className="mt-3 font-semibold text-base">Full Time</p>
            </div>

            <div>
                <h3 className="text-sm text-primaryGray">Years of Experience</h3>
                <p className="mt-3 font-semibold text-base">3+ Years of Experience</p>
            </div>

        </div>
    )
}

export default Requirements