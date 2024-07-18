import { useState } from "react";
import KeyPairs from "./StakeKeyPairs";

const Stake = () => {
  const [stakeValue, setStakeValue] = useState(10);
  return (
    <div className="flex flex-col px-3 pb-4">
      <div className="py-4 text-right">
        <p className="font-semibold">Stake($)</p>
        <input
          type="number"
          className="border py-1 px-2 text-right w-2/3 text-xs focus:border-green-700"
          value={stakeValue}
          onChange={(e) => setStakeValue(e.target.value as unknown as number)}
        />
      </div>
      <div className="flex flex-col gap-y-3 pb-4">
        <KeyPairs name="Odds" value={23.04} />
        <KeyPairs name="Total Stake" value={stakeValue} />
        <KeyPairs name="Potential Win" value={23.04 * stakeValue} />
      </div>
      <button
        className="bg-green-900 disabled:bg-gray-900/30 py-1.5 text-white"
        disabled={stakeValue.toString() === "0" || stakeValue.toString() === ""}
      >
        Place Bet
      </button>
    </div>
  );
};

export default Stake;
