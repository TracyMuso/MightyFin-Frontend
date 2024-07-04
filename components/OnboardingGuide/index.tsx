import React from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

/**
 * guide element ids
 * 1. #apply-for-loan
 * 2. #track-loan
 * 3. #Notifications
 * 4. #current-loan
 * 5. #loan-deduction
 * 6. #repay-loan
 * 7. #payment-progress
 * 8. #withdraw-amount
 */

/* const driverObj = driver({
  popoverClass: "guide-theme",
});
*/

const driverObj = driver({
  showButtons: ["next", "close"],
  nextBtnText: "Next",
  doneBtnText: "Done",
  steps: [
    {
      element: "#apply-for-loan",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#track-loan",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#Notifications",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#current-loan",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#loan-deduction",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#repay-loan",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#payment-progress",
      popover: { title: "Title", description: "Description" },
    },
    {
      element: "#withdraw-amount",
      popover: { title: "Title", description: "Description" },
    },
  ],
});

// const Guide = ({ title, text, onclick }) => {
//   return (
//     <div className="max-w-[390px] flex justify-center">
//       <div className="flex flex-col w-auto h-auto gap-4 border items-center rounded-md py-5 px-6">
//         <h4 className="text-purple-400 font-bold">{title}</h4>
//         <p className="w-full text-center text-m leading-6">{text}</p>
//         <div className="flex justify-between w-full">
//           <button className="px-5 py-3 w-[140px] text-center border border-yellow-400 hover:bg-yellow-300 rounded-md text-black">
//             Skip tour
//           </button>
//           <button
//             onClick={onclick}
//             className="px-5 py-3 w-[140px] text-center bg-yellow-400 hover:bg-yellow-300 rounded-md text-black"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Guide;

function startTour() {
  driverObj.drive();
}

export default function GuideButton() {
  return (
    <div>
      <button className="border" onClick={startTour}>
        Start guide
      </button>
    </div>
  );
}
