/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

// mocks images in jest playground
jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
     return '@mock-image';
  },
}));