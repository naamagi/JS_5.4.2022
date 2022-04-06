function returnDate() {
  const today = new Date();
  const day = today.toLocaleString("en-us", { weekday: "long" });
  const date = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  return `Today is ${day} the ${date} of ${month}, ${year}`;
}

console.log(returnDate());
