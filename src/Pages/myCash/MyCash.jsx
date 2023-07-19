import React, { useEffect, useState } from "react";
import { FaSimCard } from "react-icons/fa";
import CashHistory from "./CashHistory";
import moment from "moment/moment";

const MyCash = () => {
  const [totalCash, setTotalCash] = useState(0);
  // todays date
  const date = moment().subtract(10, "days").calendar();
  // add to cash your money
  const handleAddCash = (e) => {
    e.preventDefault();
    const form = e.target;
    const money = parseFloat(form.money.value);
    const cashHistory = form.cashHistory.value;
    const addCash = { cash: money, message: cashHistory, date: date };
    // console.log(addCash)
    form.reset();
    // fetching date and stored
    fetch("http://localhost:9988/mycash", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCash),
    });

    
};
// show your cards information
useEffect(() => {
    fetch("http://localhost:9988/mycash")
      .then((res) => res.json())
      .then((data) => setTotalCash(data));
  }, []);
console.log(totalCash);
  return (
    <div className="p-4 bg-slate-200 ">
      <h2 className="text-2xl font-medium italic text-center mb-2">
        My Total Cash
      </h2>
      <div className="grid grid-cols-3 gap-2 items-start justify-between">
        <div className="p-4 bg-[#4C7CC6] rounded-md">
          <div className="flex justify-between text-white mb-2">
            <span className="text-3xl">
              <FaSimCard />
            </span>
            <p className="text-2xl font-semibold">BDT : 8000</p>
          </div>
          <small>Card Number</small>
          <p>880 189 932 859</p>
          <div className="flex justify-between text-gray-300 mt-2">
            <p>Ashaduzzaman Sojib</p>
            <p>Update : 15/07/23</p>
          </div>
        </div>
        {/* add money form */}
        <form
          onSubmit={handleAddCash}
          className="grid grid-cols-1 items-center justify-center gap-2"
        >
          <input
            name="money"
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Amount"
          />
          <textarea
            name="cashHistory"
            className="textarea textarea-bordered"
            placeholder="Type Message"
          ></textarea>
          <button className="btn btn-outline">Add TK</button>
        </form>
        <div>
          <CashHistory />
          <CashHistory />
        </div>
      </div>
    </div>
  );
};

export default MyCash;
