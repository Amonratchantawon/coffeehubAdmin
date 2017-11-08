import { CoffeehubAdminPage } from './app.po';

describe('coffeehub-admin App', () => {
  let page: CoffeehubAdminPage;

  beforeEach(() => {
    page = new CoffeehubAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
