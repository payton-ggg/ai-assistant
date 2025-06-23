const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    // Use mutation parameter to avoid TS6133 error
    if (mutation.type === "childList") {
      const captions = document.querySelectorAll("[data-self-name]");
      captions.forEach((el) => {
        const text = (el as HTMLElement).innerText;
        if (text) {
          window.postMessage({ type: "MEET_SUBTITLE", payload: text }, "*");
        }
      });
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
