import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/svg-1.svg'),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn more',
    imgStart: true,
    img: require('../../images/svg-2.svg'),
    alt: 'Some pic',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Creating an account is extremely easy',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: require('../../images/svg-3.svg'),
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
};