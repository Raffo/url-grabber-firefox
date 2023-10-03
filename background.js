browser.commands.onCommand.addListener((command) => {
  if (command === "open-extension-popup") {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const url = activeTab.url;
      navigator.clipboard.writeText(url)
        .then(() => { })
        .catch((error) => {
          console.error("Error copying URL to clipboard:", error);
        });
    });
  }
});
