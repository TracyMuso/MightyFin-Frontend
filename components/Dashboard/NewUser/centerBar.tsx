import Image from "next/image";

const CenterBar = () => {
  return (
    <div className="flex flex-col gap-[10px] p-[10px]">
      <div className="grid grid-cols-2 gap-[10px] ">
        <div className="flex gap-6 rounded-md items-center h-[160px] w-full py-7 px-8 bg-white">
          <Image
            src={"/Icons/yellow-money-bag.png"}
            width={70}
            height={70}
            alt="money-bag icon"
          />
          <div className="flex flex-col text-left justify-between">
            <p className="text-purple-500">Current loan</p>
            <h4 className="text-3xl font-bold text-purple-500">K 0</h4>
            <p className="text-gray-100">Currency: ZMW</p>
          </div>
        </div>
        <div className="flex gap-6 rounded-md items-center py-7 px-8 bg-white">
          <Image
            src={"/Icons/hand-money.png"}
            width={70}
            height={70}
            alt="money-bag icon"
          />
          <div className="flex flex-col text-left justify-between">
            <p className="text-purple-500">Deduct</p>
            <h4 className="text-3xl font-bold text-purple-500">K 0</h4>
            <p className="text-gray-100">Repay by: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterBar;
