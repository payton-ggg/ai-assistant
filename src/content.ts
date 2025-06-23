const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const speakers = document.querySelectorAll(".NWpY1d");
      speakers.forEach((el) => {
        const text = (el as HTMLElement).innerText;
        if (text) {
          window.postMessage(
            { type: "MEET_SUBTITLE", payload: { type: "speaker", text } },
            "*"
          );
        }
      });

      // Get caption text divs
      const captions = document.querySelectorAll(".ygicle.VbkSUe");
      captions.forEach((el) => {
        const text = (el as HTMLElement).innerText;
        if (text) {
          window.postMessage(
            { type: "MEET_SUBTITLE", payload: { type: "caption", text } },
            "*"
          );
        }
      });
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
