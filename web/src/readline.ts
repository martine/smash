import { html } from './html';

function translateKey(ev: KeyboardEvent): string {
  switch (ev.key) {
    case 'Alt':
    case 'Control':
    case 'Shift':
    case 'Unidentified':
      return '';
  }
  // Avoid browser tab switch keys:
  if (ev.key >= '0' && ev.key <= '9') return '';

  let name = '';
  if (ev.altKey) name += 'M-';
  if (ev.ctrlKey) name += 'C-';
  if (name.length === 0) return '';
  name += ev.key;
  return name;
}

export class ReadLine {
  dom = html('div', { className: 'readline' });
  prompt = html('div', { className: 'prompt' });
  input = html('input', {
    className: 'input',
    spellcheck: false
  }) as HTMLInputElement;
  oncommit = (_: string) => {};

  constructor() {
    this.prompt.innerText = '> ';
    this.dom.appendChild(this.prompt);

    this.dom.appendChild(this.input);

    this.input.onkeydown = ev => {
      this.keydown(ev);
    };
    this.input.onkeypress = ev => {
      this.keypress(ev);
    };
  }

  keydown(ev: KeyboardEvent) {
    const key = translateKey(ev);
    if (!key) return;
    switch (key) {
      case 'C-a':
        this.input.selectionStart = this.input.selectionEnd = 0;
        break;
      case 'C-e':
        const len = this.input.value.length;
        this.input.selectionStart = this.input.selectionEnd = len;
        break;
      case 'C-k':
        this.input.value = this.input.value.substr(
          0,
          this.input.selectionStart!
        );
        break;
      case 'C-J': // browser: inspector
      case 'C-l': // browser: location
      case 'C-r': // browser: reload
        // Allow default handling.
        return;
      default:
        if (key.startsWith('C-Arrow')) return;
        console.log('TODO:', key, ev);
    }
    ev.preventDefault();
  }

  keypress(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'Enter':
        this.oncommit(this.input.value);
        break;
      default:
        return;
    }
    ev.preventDefault();
  }
}