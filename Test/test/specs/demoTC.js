import demoMethods from '../Pages/demoMethods.js';

describe('click on burger menu', () => {
    it('should click on the burger menu', async () => {
        await demoMethods.burgermenuClick(); 
    });
});
