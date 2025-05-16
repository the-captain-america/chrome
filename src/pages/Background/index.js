console.log('Background script is running');

// Define a function to open a new tab
function openNewTab() {
  // // Specify the URL for the new tab
  // console.log('Open new tab');
  // var newTabUrl = 'chrome://extensions';
  // // Use chrome.tabs.create to open a new tab
  // chrome.tabs.create({ url: newTabUrl }, function (tab) {
  //   // Optional: Do something with the newly created tab if needed
  //   console.log({ tab });
  // });
}

chrome.tabs.onActivated.addListener(() => {
  console.log('chrome.tabs.onActivated');

  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //   var currentUrl = tabs[0].url;
  //   console.log('Current URL:', currentUrl);
  //   // write line of code that checks if currentUrl includes this: https://www.youtube.com/watch?v=204C9yNeOYI
  //   if (currentUrl.includes('https://www.youtube.com')) {
  //     console.log('Current URL is youtube:', currentUrl);
  //     console.log('This is the video we are looking for');
  //     openNewTab();
  //   }
  // });
});
