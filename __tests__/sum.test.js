import { sum } from "../sum";

test("Sum function should caculate the sum of two numbers", () => {
  const result = sum(1, 5);

  //Assertion
  expect(result).toBe(6);
});
