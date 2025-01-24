// return ReactElement
import { REACT_ELEMET_TYPE } from 'shared/ReactSymbols';
import { ReactElement } from 'shared/ReactTypes';

export const ReactElement = function (type, key, ref, props) {
	const element = {
		$$typeof: REACT_ELEMET_TYPE,
		key,
		ref,
		props,
		__mark: 'amir'
	};
	return element;
};
