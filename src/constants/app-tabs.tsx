const UI_TABS = Object.freeze({
  HOME: 'HOME',
  REQUEST: 'REQUEST',
});

export const APP_TABS = Object.freeze({
  [UI_TABS.HOME]: {
    tabNum: 0,
    value: UI_TABS.HOME,
  },
  [UI_TABS.REQUEST]: {
    tabNum: 1,
    value: UI_TABS.REQUEST,
  },
});
