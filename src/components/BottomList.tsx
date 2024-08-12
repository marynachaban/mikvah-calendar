import React, { useMemo } from 'react'

export const BottomList = ({ localConfig, currentMonth }: { localConfig: any, currentMonth: number }) => {
    const bottomListContent = useMemo(() => {
        return [localConfig.bottomSponsorsBoxesContent[currentMonth - 1], localConfig.bottomSponsorsBoxesContent[currentMonth], localConfig.bottomSponsorsBoxesContent[currentMonth + 1]]
    }, [currentMonth, localConfig])
    return (
        <div className="flex bottom-boxes [&>*:nth-child(n+2)]:ml-4 justify-between ">
            {bottomListContent.map(({ name, value }, index) => {
                return (
                    <div key={index + "bottomList"} className="border-2 rounded-[20px] flex flex-col items-center border-[grey] text-[white] py-4 w-1/3">
                        <div className="font-bold text-[24px] text-theme-color pb-2">{name}</div>
                        <p>{value}</p>
                    </div>
                )
            })}
        </div>
    )
}
