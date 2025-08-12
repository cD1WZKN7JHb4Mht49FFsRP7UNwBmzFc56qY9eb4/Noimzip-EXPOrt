/*このプログラムはサイトの動作に影響を与える場合があります。同意できる場合は2行目と45行目にある記号を削除してください。*/
/*
// ==UserScript==
// @name         万博予約もっと見る
// @namespace    http://tampermonkey.net/
// @version      2025-05-22
// @description  mottomiru
// @author       SuperMotorBallPool
// @match        https://ticket.expo2025.or.jp/*
// @icon         https://ticket.expo2025.or.jp/asset/img/logo_01.png
// @grant        none
// ==/UserScript==

(function autoClickMoreButtons() {
        'use strict';

  const keywords = ["もっと見る", "続きを読む", "続き", "Show More", "Load More"];

  function clickMoreButtons() {
    const buttons = Array.from(document.querySelectorAll('button, a'))
      .filter(el => keywords.some(keyword => el.innerText.includes(keyword)));

    buttons.forEach(btn => {
      try {
        btn.click();
        console.log("クリック:", btn);
      } catch (e) {
        console.warn("クリック失敗:", btn, e);
      }
    });
  }
// 初回実行
  clickMoreButtons();

  // ページのDOMに変化があったら再度実行
  const observer = new MutationObserver(() => {
    clickMoreButtons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
*/
