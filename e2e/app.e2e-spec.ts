import { BookOfListsPage } from './app.po';

describe('book-of-lists App', () => {
  let page: BookOfListsPage;

  beforeEach(() => {
    page = new BookOfListsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
