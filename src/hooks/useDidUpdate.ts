import { useEffect, useRef } from 'react';

const useDidUpdate = (effect: () => Function | void, dependencies: any[]) => {
	const hasMounted = useRef(false);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}
		const unsubscribe = effect();

		return () => {
			if (!unsubscribe) return;
			unsubscribe();
		};
	}, [effect, dependencies]);
};

export { useDidUpdate };
