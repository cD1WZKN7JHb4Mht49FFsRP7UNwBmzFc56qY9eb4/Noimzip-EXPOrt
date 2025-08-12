/*このプログラムはサイトの動作に影響を与える場合があります。同意できる場合は、2行目と46行目にある記号を削除してください。*/
/*
// ==UserScript==
// @name         万博非表示(2段階)
// @namespace    http://tampermonkey.net/
// @version      2025-08-12
// @description  skip keywords 2 Factor
// @author       SuperMotorBallPool forked by noimzip
// @match        https://ticket.expo2025.or.jp/*
// @icon         https://ticket.expo2025.or.jp/asset/img/logo_01.png
// @grant        none
// ==/UserScript==


(function hideWheelchairLinks() {
            'use strict';
  const keywords = [""];
  const keywords2 = [""];
  const excludeKeywords1 = [""];
  const excludeKeywords2 = [""];
  const excludeKeywords3 = [""];
  const excludeKeywords4 = [""];
  const excludeKeywords5 = [""];
  const excludeKeywords6 = [""];
  function hideMatchingElements() {
    const elements = document.querySelectorAll('a, button');

    elements.forEach(el => {const text = el.innerText || el.textContent;
      if (text && keywords.some(keyword => text.includes(keyword)) && !excludeKeywords1.some(excludeKeyword => text.includes(excludeKeywords1)) && !excludeKeywords2.some(excludeKeyword => text.includes(excludeKeywords2)) && !excludeKeywords3.some(excludeKeyword => text.includes(excludeKeywords3)) && !excludeKeywords4.some(excludeKeyword => text.includes(excludeKeywords4)) && !excludeKeywords5.some(excludeKeyword => text.includes(excludeKeywords5)) && !excludeKeywords6.some(excludeKeyword => text.includes(excludeKeywords6))) {
        el.style.display = 'none';
      } else if (keywords2.some(keyword => text.includes(keyword))) {
        el.style.display = 'none';
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
