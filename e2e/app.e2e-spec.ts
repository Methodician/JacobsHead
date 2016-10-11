import { JacobsheadPage } from './app.po';

describe('jacobshead App', function() {
  let page: JacobsheadPage;

  beforeEach(() => {
    page = new JacobsheadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
