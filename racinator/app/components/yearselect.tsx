"use client";

type Props = {
  selectedYear: string;
  onChange: (year: string) => void;
};

export default function SeasonSelector({selectedYear,onChange }: Props) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-sm text-neutral-400">Season</label>
      <select
        value={selectedYear}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-white"
      >
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
}