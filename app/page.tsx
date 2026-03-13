"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function SalaryCalculator() {
  const [baseSalary, setBaseSalary] = useState<number>(707);
  const [monthlyLimit, setMonthlyLimit] = useState<number>(160);
  const [workedHours, setWorkedHours] = useState<number>(0);
  const [totalSalary, setTotalSalary] = useState<number>(0);

  const insuranceEur = 30;
  const fitpassEur = 37;
  const totalBenefits = insuranceEur + fitpassEur;

  useEffect(() => {
    if (monthlyLimit > 0) {
      const hourlyRate = baseSalary / monthlyLimit;
      const basicCalc = hourlyRate * workedHours;
      const finalSum = basicCalc + totalBenefits;

      setTotalSalary(Number(finalSum.toFixed(2)));
    } else {
      setTotalSalary(0);
    }
  }, [baseSalary, monthlyLimit, workedHours, totalBenefits]);

  const handleMoneyRain = () => {
    const scalar = 3;
    const moneySymbol = confetti.shapeFromText({ text: "💲", scalar });
    const moneyFace = confetti.shapeFromText({ text: "🤑", scalar });
    const partyPopper = confetti.shapeFromText({ text: "🎉", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0.5,
      decay: 0.94,
      startVelocity: 20,
      shapes: [moneySymbol, moneyFace, partyPopper],
      scalar: 2.5
    };

    confetti({
      ...defaults,
      particleCount: 40
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 text-slate-200 font-sans">
      <div className="bg-[#1e293b] p-8 rounded-3xl shadow-2xl w-full max-w-md border border-slate-700/50">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Ujmur't 1.75
          </h1>
          <p className="text-indigo-400 mt-2 text-sm font-bold tracking-[0.2em] uppercase">
            FLS TOP
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1 tracking-widest">
              Monthly Fixed
            </label>
            <input
              type="number"
              value={baseSalary || ""}
              onChange={(e) => setBaseSalary(Number(e.target.value))}
              className="w-full p-4 bg-[#0f172a] border-2 border-slate-700 focus:border-indigo-500 rounded-2xl outline-none transition-all text-lg font-semibold text-white placeholder-slate-600 no-spinner"
              placeholder="707"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1 tracking-widest">
                Monthly Limit
              </label>
              <input
                type="number"
                value={monthlyLimit || ""}
                onChange={(e) => setMonthlyLimit(Number(e.target.value))}
                className="w-full p-4 bg-[#0f172a] border-2 border-slate-700 focus:border-indigo-500 rounded-2xl outline-none transition-all text-lg font-semibold text-white no-spinner"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1 tracking-widest">
                Working Hours
              </label>
              <input
                type="number"
                value={workedHours || ""}
                onChange={(e) => setWorkedHours(Number(e.target.value))}
                className="w-full p-4 bg-[#0f172a] border-2 border-slate-700 focus:border-indigo-500 rounded-2xl outline-none transition-all text-lg font-semibold text-white no-spinner"
                placeholder="0"
                autoFocus
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
              <p className="text-[9px] text-emerald-500 font-bold uppercase text-center mb-1">Insurance</p>
              <p className="font-bold text-emerald-400 text-center text-lg">€{insuranceEur}</p>
            </div>
            <div className="bg-violet-500/10 p-3 rounded-2xl border border-violet-500/20">
              <p className="text-[9px] text-violet-500 font-bold uppercase text-center mb-1">Fitpass / Sports</p>
              <p className="font-bold text-violet-400 text-center text-lg">€{fitpassEur}</p>
            </div>
          </div>

          <div className="pt-4">
            <div
              onClick={handleMoneyRain}
              className="bg-indigo-600 p-6 rounded-2xl shadow-xl shadow-indigo-900/20 text-center border-b-4 border-indigo-800 transform active:scale-95 transition-transform cursor-pointer">
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1">
                Total Salary
              </p>
              <p className="text-4xl font-black text-white">
                {totalSalary.toLocaleString()} €
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-[10px] text-slate-500 font-medium tracking-[0.1em]">
            Formula: (Base / Limit) × Hours + Benefits
          </p>
        </div>
      </div>
    </div>
  );
}