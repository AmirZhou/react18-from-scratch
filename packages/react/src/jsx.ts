// return ReactElement

const ReactElement = function (type, key, ref, props) {
	const element = {
		$$typeof: xxx,
		key,
		ref,
		props,
		__mark: 'amir'
	};
	return element;
};
