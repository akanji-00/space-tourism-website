const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    tabs[tabFocus].setAttribute("tabIndex", -1);
  }

  // if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  // if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabIndex", 0);
  tabs[tabFocus].focus();
}
