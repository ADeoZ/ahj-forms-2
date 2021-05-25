import Popover from '../Popover';

test('init', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="pop_button" data-popover-title="Test title" data-popover-content="Text Result">Click me!</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector('.pop_button'));
  popButton.initPopover();
  const title = popButton.popContainer.querySelector('.pop_title');
  const text = popButton.popContainer.querySelector('.pop_text');
  expect(title.innerText).toBe('Test title');
  expect(text.innerText).toBe('Text Result');
});

test('show popup', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="pop_button" data-popover-title="Test title" data-popover-content="Text Result">Click me!</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector('.pop_button'));
  popButton.initPopover();
  const button = document.querySelector('button.pop_button');
  button.click();

  const title = document.querySelector('.pop_title');
  const text = document.querySelector('.pop_text');
  expect(title.innerText).toBe('Test title');
  expect(text.innerText).toBe('Text Result');
});

test('close popup', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="pop_button" data-popover-title="Test title" data-popover-content="Text Result">Click me!</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector('.pop_button'));
  popButton.initPopover();
  const button = document.querySelector('button.pop_button');
  button.click();
  expect(document.contains(popButton.popContainer)).toBeTruthy();
  button.click();
  expect(document.contains(popButton.popContainer)).toBeFalsy();
});
