/*このプログラムはサイトの動作に影響を与える場合があります。同意できる場合は2行目と39行目にある記号を削除してください。*/
/*
// ==UserScript==
// @name         万博非表示(簡易版)
// @namespace    http://tampermonkey.net/
// @version      2025-08-12
// @description  skip keywords
// @author       SuperMotorBallPool forked by noimzip
// @match        https://ticket.expo2025.or.jp/*
// @icon         https://ticket.expo2025.or.jp/asset/img/logo_01.png
// @grant        none
// ==/UserScript==


(function hideWheelchairLinks() {
            'use strict';
  const keywords = [""];
　const excludeKeywords = [""];
  function hideMatchingElements() {
    const elements = document.querySelectorAll('a, button');

    elements.forEach(el => {const text = el.innerText || el.textContent;
      if (text && keywords.some(keyword => text.includes(keyword))　&& !excludeKeywords.some(excludeKeyword => text.includes(excludeKeyword))) {
        el.style.display = 'none';
        console.log('非表示にしました:', el);
      }
    });
  }

  // 初回実行
  hideMatchingElements();
  // DOM変化があったら再チェック
  const observer = new MutationObserver(hideMatchingElements);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
*/
