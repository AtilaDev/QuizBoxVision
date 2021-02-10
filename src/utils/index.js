import { unescape } from 'lodash';

export const convertChars = (string) => {
  let result = string.replace(
    /&#(?:x([\da-f]+)|(\d+));/gi,
    function (_, hex, dec) {
      return String.fromCharCode(dec || +('0x' + hex));
    }
  );

  return unescape(result);
};
