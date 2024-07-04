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
