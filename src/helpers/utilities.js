import device from 'current-device';

export function isMobile() {
  return device.mobile() || device.tablet();
}
