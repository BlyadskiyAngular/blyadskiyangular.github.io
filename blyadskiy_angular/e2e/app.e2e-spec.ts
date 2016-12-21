import { BlyadskiyAngularPage } from './app.po';

describe('blyadskiy-angular App', function() {
  let page: BlyadskiyAngularPage;

  beforeEach(() => {
    page = new BlyadskiyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
