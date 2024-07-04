const Guide = () => {
  return (
    <div className="max-w-[390px]">
      <div className="flex w-auto h-auto flex-col gap-4 border items-center rounded-md py-5 px-6">
        <h4 className="text-purple-400 font-bold">1. Start here</h4>
        <p className="w-full text-center text-m leading-6">
          Select this button to apply for a loan
        </p>
        <div className="flex justify-between w-full">
          <button className="px-5 py-3 w-[140px] text-center border border-yellow-400 hover:bg-yellow-300 rounded-md text-black">
            Skip tour
          </button>
          <button className="px-5 py-3 w-[140px] text-center bg-yellow-400 hover:bg-yellow-300 rounded-md text-black">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
