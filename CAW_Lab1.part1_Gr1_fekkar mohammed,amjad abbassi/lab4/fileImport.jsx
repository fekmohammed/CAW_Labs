const mean = require('./notation');
const { captureConsole } = require('jest-capture-console');

describe('script', () => {
    it('should log the correct average score', () => {
        const restoreConsole = captureConsole();

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        require('./your-script-file');

        expect(consoleSpy).toHaveBeenCalledWith(`Average score: ${mean([85, 90, 78, 92, 88])}`);

        consoleSpy.mockRestore();
        restoreConsole();
    });
});
