document.addEventListener =
  ("DOMContentLoaded",
  () => {
    const btn = document.createElement("button");

    let count = 0;

    btn.addEventListener =
      ("click",
      function increment() {
        btn.textContent = count++;
      });

    document.body.append(btn);
  });
