import { describe, expect, it, vi } from 'vitest';
import { generateReportData } from './data.js';

describe('generateReportData()', () => {
	it('should execute logFn if provided', () => {
		const logger = vi.fn();

		// logger.mockImplementationOnce(() => {});

		generateReportData(logger);

		expect(logger).toBeCalled();
	});
});
