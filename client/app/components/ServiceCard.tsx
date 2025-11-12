import { serviceCard } from "../types";

export default function ServiceCard(service: serviceCard) {
    return (
        <div
            className="flex flex-row justify-start gap-6 lg:h-52 items-center">
            <div className="bg-[#90696e]/60 w-2 h-16 lg:h-32 self-center rounded-2xl" />
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between">
                    <h2 className="text-2xl py-4 font-semibold w-3/4">{service.title}</h2>
                    <span className="text-xl self-center">{service.icon}</span>
                </div>
                <p className="text-base mb-4">{service.description}</p>

                {
                    service.tag == "events" ?
                        <table className="bg-[#e0bea7] rounded-lg w-full">
                            <tbody>
                                <tr className="text-xs border-b border-[#9f7d8f]">
                                    <td className="text-[#7b5a5e] p-2">Concert</td>
                                    <td className="text-[#7b5a5e]"> 2025.11.13 - 18:00-19:00 </td>
                                </tr>
                                <tr className="text-xs">
                                    <td className="text-[#7b5a5e] p-2">Wine Tasting</td>
                                    <td className="text-[#7b5a5e]"> 2025.12.05 - 17:00-19:00 </td>
                                </tr>
                            </tbody>
                        </table> :

                        <div className="flex flex-row justify-between">
                            {

                                service.tag == "menu" ?
                                    <span className="text-sm text-gray-500 bg-green-400 p-2 rounded-xl">Explore Menu</span>
                                    : service.tag == "reservation" ?
                                        <span className="text-sm text-gray-500 bg-blue-400 p-2 rounded-xl">Book Now</span>
                                        : null
                            }
                        </div>
                }
            </div>
        </div>
    );
}