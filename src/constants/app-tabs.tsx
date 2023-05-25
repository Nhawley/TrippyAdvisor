const UI_TABS = Object.freeze({
  HOME: 'HOME',
  REQUEST: 'REQUEST',
});

export const APP_TABS = Object.freeze({
  [UI_TABS.HOME]: {
    tabNum: 0,
    value: UI_TABS.HOME,
    formatted: 'Home',
    stackId: 'homeStack',
    routeName: 'Home',
    compId: 'homeScreen',
    topBarId: 'homeTopBar',
  },
  [UI_TABS.REQUEST]: {
    tabNum: 1,
    value: UI_TABS.REQUEST,
    formatted: 'Request',
    stackId: 'requestStack',
    routeName: 'Request',
    compId: 'requestScreen',
    topBarId: 'requestTopBar',
  },
});
