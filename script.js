async function fetchData() {
  console.log("this is me");
  const response = await fetch("http://localhost:3000/data", {
    method: "PUT",
  });

  const data = await response.json();
  console.log(data);
}
