(function() {
	"use strict";

  
  // browser.widget.onRefreshNeeded.addListener(async (widgetName) => {
  //   let { counter } = await browser.storage.session.get({ counter: 0 });

  //   const offscreen = new OffscreenCanvas(100, 100);
  //   const ctx = offscreen.getContext("2d");
  //   ctx.font = "48px serif";
  //   ctx.fillText(`${counter}`, 10, 50);

  //   browser.widget.update(widgetName, { image: ctx.getImageData(0, 0, 100, 100) });
  // });

  // browser.widget.onClicked.addListener(async (widgetName) => {
  //   let { counter } = await browser.storage.session.get({ counter: 0 });
  //   counter++;
  //   await browser.storage.session.set({ counter });
  //   browser.widget.refreshNeeded(widgetName);
  // });	

})();