(function() {
	"use strict";

  console.log("background.js")

	browser.widget.onClicked.addListener(async (widgetName) => {
    let { counter } = await browser.storage.session.get({ counter: 0 });
    counter++;

    await browser.storage.session.set({ counter });
    await browser.widget.update({ title: `${counter}` });
  });
})();
