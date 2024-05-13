import React, { useCallback, useEffect, useState } from 'react';

import { breakpoints } from '../constants';

type IBpNames = keyof typeof breakpoints;

const breakpointsNames = Object.keys(breakpoints) as IBpNames[];

const getNextBreakpointName = (name: IBpNames) => {
	const current = breakpointsNames.indexOf(name);
	return breakpointsNames[current - 1];
};

/**
 * This hook allow use media queries in React components.
 * @example
 * const mUp = useBreakpoint('m', 'up');
 * // mUp == true if viewport >= 768px
 * @param name breakpoint name
 * @param direction breakpoint direction: up, only, down
 * @returns boolean flag
 */

export function useBreakpoint(name: IBpNames, direction: 'up' | 'down' | 'only') {
	const [calculateMedia, setCalculate] = useState(false);

	useEffect(() => {
		setCalculate(true);
	}, []);

	const calcMedia = useCallback(() => {
		let match = false;
		if (calculateMedia) {
			if (typeof window === 'undefined') return false;
			if (direction === 'up') {
				match = window.matchMedia(`(min-width: ${breakpoints[name]}px)`).matches;
			}

			if (direction === 'down') {
				match = window.matchMedia(`(max-width: ${breakpoints[name] - 1}px)`).matches;
			}

			if (direction === 'only') {
				const nextBp = getNextBreakpointName(name);
				match = window.matchMedia(
					`(min-width: ${breakpoints[name]}px) ${nextBp ? `and (max-width: ${breakpoints[nextBp] - 1}px)` : ''}`
				).matches;
			}
		}
		return match;
	}, [direction, name, calculateMedia]);

	const [isMatch, setIsMatch] = React.useState(calcMedia());

	useEffect(() => {
		setIsMatch(calcMedia());
		const handleResize = () => setIsMatch(calcMedia());
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, [calcMedia]);

	return isMatch;
}
