
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMET_TYPE = supportSymbol ? Symbol.for('react.element') : 0xeac7;
// the magic number 0xeac7 kind of resambles REAC

