// Switch de testes
describe('Home Screen', () => {
  // Executa antes de dos testes para garantir que o app ta carregado corretente;
  beforeAll(async () => {
    await device.launchApp();
  });

  // Executa antes de cada teste e faz um reload;
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register a new listener', async () => {
    const inputNewSkill = await element(by.id('input-new'));
    const buttonAdd = await element(by.id('button-add'));
    const flatListSkills = await element(by.id('flat-list-skills'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');
    await buttonAdd.tap();
    await flatListSkills.tap();

    expect(element(by.id('flat-list-skills'))).toBeVisible();
  })

});
