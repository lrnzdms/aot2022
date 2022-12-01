import { GetLinesAsNumbers } from "../utils"

export const run = async () => {
  const lines = await GetLinesAsNumbers("./src/01/input");

  const sums:number[] = [];
  lines.reduce((all, cur) => {
    if (Number.isNaN(cur)) {
      sums.push(all);
      return 0;
    }  else {
      return all + cur;
    }
  }, 0 as number);

  console.log({lines})
  console.log({sums})

  const sorted = sums.sort().reverse();
  console.log({max: sorted[0], min: sorted[sorted.length -1]});

  const three = sorted[0] + sorted[1] + sorted[2];
  console.log({three});
}