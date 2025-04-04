function superbowlWin(records) {
  
  const winRecord = records.find(record => record.result === "W");

  return winRecord ? winRecord.year : undefined;
}

const record = [
  { year: "2025", result: "W" },
  { year: "2024", result: "N/A" },
  { year: "2023", result: "L" },
 
];

console.log(superbowlWin(record)); 