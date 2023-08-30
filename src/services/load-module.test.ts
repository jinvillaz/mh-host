import { loadMF1Home, loadMF2Home } from './load-module'

describe('Dynamic imports', () => {
  it('loads mf1/Home module', async () => {
    const module = await loadMF1Home();
    expect(module.default).toBeDefined();
  });

  it('loads mf2/Home module', async () => {
    const module = await loadMF2Home();
    expect(module.default).toBeDefined();
  });
});





