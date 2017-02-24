import { HelpPage } from './app.po';

describe('help App', () => {
  let page: HelpPage;

  beforeEach(() => {
    page = new HelpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
