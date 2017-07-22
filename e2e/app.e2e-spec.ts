import { AuthDemoPage } from './app.po';

describe('auth-demo App', () => {
  let page: AuthDemoPage;

  beforeEach(() => {
    page = new AuthDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
