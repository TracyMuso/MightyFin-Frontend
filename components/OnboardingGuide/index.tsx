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
  popoverClass: "onboarding-user-guide",
  steps: [
    {
      element: "#apply-for-loan",
      popover: {
        title: "1. START HERE",
        description: "Select this button to  apply for a loan",
      },
    },
    {
      element: "#track-loan",
      popover: {
        title: "2. CHECK PROGRESS",
        description:
          "Check how much time you have to wait before your loan is approved here",
      },
    },
    {
      element: "#Notifications",
      popover: {
        title: "3. CONFIRMATION MESSAGE",
        description:
          "You will receive a confirmation message immediately your loan is approved.",
      },
    },
    {
      element: "#current-loan",
      popover: {
        title: "4. LOAN AMOUNT",
        description:
          "The amount you requested, and is now approved, will be shown here.",
      },
    },
    {
      element: "#loan-deduction",
      popover: {
        title: "5. PAYMENT DATE AND AMOUNT",
        description:
          "The amount you have to pay the following month and the date will show here. Make sure to COME HERE FREQUENTLY.",
      },
    },
    {
      element: "#repay-loan",
      popover: {
        title: "6. PAY HERE",
        description:
          "When you are ready to repay, come here. You can also pay ALL AT ONCE.",
      },
    },
    {
      element: "#payment-progress",
      popover: {
        title: "7. REPAYMENT PROGRESS",
        description: "Check how much you have left to pay here.",
      },
    },
    {
      element: "#withdraw-amount",
      popover: {
        title: "8. WITHDRAW AMOUNT",
        description:
          "Deposit the amount requested directly to your bank or mobile money",
      },
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
