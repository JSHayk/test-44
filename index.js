const url = "http://loclhost:4000/api/services";
// fetch(url, {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function call() {
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error");
  } finally {
    console.log("OK");
  }
}

call();
