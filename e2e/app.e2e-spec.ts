import { CatchyousoonPage } from './app.po';

describe('catchyousoon App', () => {
  let page: CatchyousoonPage;

  beforeEach(() => {
    page = new CatchyousoonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
