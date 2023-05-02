const keyLayout = [
    { text: { eng: '`', rus: 'ё' }, wide: 'short', shift: { eng: '~', rus: 'Ё' }, keyCode: 192 },
    { text: { eng: '1', rus: '1' }, wide: 'short', shift: { eng: '!', rus: '!' }, keyCode: 49 },
    { text: { eng: '2', rus: '2' }, wide: 'short', shift: { eng: '@', rus: '"' }, keyCode: 50 },
    { text: { eng: '3', rus: '3' }, wide: 'short', shift: { eng: '#', rus: '№' }, keyCode: 51 },
    { text: { eng: '4', rus: '4' }, wide: 'short', shift: { eng: '$', rus: ';' }, keyCode: 52 },
    { text: { eng: '5', rus: '5' }, wide: 'short', shift: { eng: '%', rus: '%' }, keyCode: 53 },
    { text: { eng: '6', rus: '6' }, wide: 'short', shift: { eng: '^', rus: ':' }, keyCode: 54 },
    { text: { eng: '7', rus: '7' }, wide: 'short', shift: { eng: '&', rus: '?' }, keyCode: 55 },
    { text: { eng: '8', rus: '8' }, wide: 'short', shift: { eng: '*', rus: '*' }, keyCode: 56 },
    { text: { eng: '9', rus: '9' }, wide: 'short', shift: { eng: '(', rus: '(' }, keyCode: 57 },
    { text: { eng: '0', rus: '0' }, wide: 'short', shift: { eng: ')', rus: ')' }, keyCode: 48 },
    { text: { eng: '-', rus: '-' }, wide: 'short', shift: { eng: '_', rus: '_' }, keyCode: 189 },
    { text: { eng: '=', rus: '=' }, wide: 'short', shift: { eng: '+', rus: '+' }, keyCode: 187 },
    { text: { eng: 'Backspace', rus: 'Backspace' }, wide: 'backspace', shift: { eng: 'Backspace', rus: 'Backspace' }, keyCode: 8 },
    { text: { eng: 'Tab', rus: 'Tab' }, wide: 'bit-wide', shift: { eng: 'Tab', rus: 'Tab' }, keyCode: 9 },
    { text: { eng: 'q', rus: 'й' }, wide: 'short', shift: { eng: 'Q', rus: 'Й' }, keyCode: 81 },
    { text: { eng: 'w', rus: 'ц' }, wide: 'short', shift: { eng: 'W', rus: 'Ц' }, keyCode: 87 },
    { text: { eng: 'e', rus: 'у' }, wide: 'short', shift: { eng: 'E', rus: 'У' }, keyCode: 69 },
    { text: { eng: 'r', rus: 'к' }, wide: 'short', shift: { eng: 'R', rus: 'К' }, keyCode: 82 },
    { text: { eng: 't', rus: 'е' }, wide: 'short', shift: { eng: 'T', rus: 'Е' }, keyCode: 84 },
    { text: { eng: 'y', rus: 'н' }, wide: 'short', shift: { eng: 'Y', rus: 'Н' }, keyCode: 89 },
    { text: { eng: 'u', rus: 'г' }, wide: 'short', shift: { eng: 'U', rus: 'Г' }, keyCode: 85 },
    { text: { eng: 'i', rus: 'ш' }, wide: 'short', shift: { eng: 'I', rus: 'Ш' }, keyCode: 73 },
    { text: { eng: 'o', rus: 'щ' }, wide: 'short', shift: { eng: 'O', rus: 'Щ' }, keyCode: 79 },
    { text: { eng: 'p', rus: 'з' }, wide: 'short', shift: { eng: 'P', rus: 'З' }, keyCode: 80 },
    { text: { eng: '[', rus: 'х' }, wide: 'short', shift: { eng: '{', rus: 'Х' }, keyCode: 219 },
    { text: { eng: ']', rus: 'ъ' }, wide: 'short', shift: { eng: '}', rus: 'Ъ' }, keyCode: 221 },
    { text: { eng: '\\', rus: '\\' }, wide: 'short', shift: { eng: '|', rus: '/' }, keyCode: 220 },
    { text: { eng: 'Del', rus: 'Del' }, wide: 'bit-wide', shift: { eng: 'Del', rus: 'Del' }, keyCode: 46 },
    { text: { eng: 'Caps Lock', rus: 'Caps Lock' }, wide: 'wide', shift: { eng: 'Caps Lock', rus: 'Caps Lock' }, keyCode: 20 },
    { text: { eng: 'a', rus: 'ф' }, wide: 'short', shift: { eng: 'A', rus: 'Ф' }, keyCode: 65 },
    { text: { eng: 's', rus: 'ы' }, wide: 'short', shift: { eng: 'S', rus: 'Ы' }, keyCode: 83 },
    { text: { eng: 'd', rus: 'в' }, wide: 'short', shift: { eng: 'D', rus: 'В' }, keyCode: 68 },
    { text: { eng: 'f', rus: 'а' }, wide: 'short', shift: { eng: 'F', rus: 'А' }, keyCode: 70 },
    { text: { eng: 'g', rus: 'п' }, wide: 'short', shift: { eng: 'G', rus: 'П' }, keyCode: 71 },
    { text: { eng: 'h', rus: 'р' }, wide: 'short', shift: { eng: 'H', rus: 'Р' }, keyCode: 72 },
    { text: { eng: 'j', rus: 'о' }, wide: 'short', shift: { eng: 'J', rus: 'О' }, keyCode: 74 },
    { text: { eng: 'k', rus: 'л' }, wide: 'short', shift: { eng: 'K', rus: 'Л' }, keyCode: 75 },
    { text: { eng: 'l', rus: 'д' }, wide: 'short', shift: { eng: 'L', rus: 'Д' }, keyCode: 76 },
    { text: { eng: ';', rus: 'ж' }, wide: 'short', shift: { eng: ':', rus: 'Ж' }, keyCode: 186 },
    { text: { eng: '"', rus: 'э' }, wide: 'short', shift: { eng: '"', rus: 'Э' }, keyCode: 222 },
    { text: { eng: 'Enter', rus: 'Enter' }, wide: 'wide', shift: { eng: 'Enter', rus: 'Enter' }, keyCode: 13 },
    { text: { eng: 'Shift', rus: 'Shift' }, wide: 'wide', shift: { eng: 'Shift', rus: 'Shift' }, keyCode: 16 },
    { text: { eng: 'z', rus: 'я' }, wide: 'short', shift: { eng: 'Z', rus: 'Я' }, keyCode: 90 },
    { text: { eng: 'x', rus: 'ч' }, wide: 'short', shift: { eng: 'X', rus: 'Ч' }, keyCode: 88 },
    { text: { eng: 'c', rus: 'с' }, wide: 'short', shift: { eng: 'C', rus: 'С' }, keyCode: 67 },
    { text: { eng: 'v', rus: 'м' }, wide: 'short', shift: { eng: 'V', rus: 'М' }, keyCode: 86 },
    { text: { eng: 'b', rus: 'и' }, wide: 'short', shift: { eng: 'B', rus: 'И' }, keyCode: 66 },
    { text: { eng: 'n', rus: 'т' }, wide: 'short', shift: { eng: 'N', rus: 'Т' }, keyCode: 78 },
    { text: { eng: 'm', rus: 'ь' }, wide: 'short', shift: { eng: 'M', rus: 'Ь' }, keyCode: 77 },
    { text: { eng: ',', rus: 'б' }, wide: 'short', shift: { eng: '<', rus: 'Б' }, keyCode: 188 },
    { text: { eng: '.', rus: 'ю' }, wide: 'short', shift: { eng: '>', rus: 'Ю' }, keyCode: 190 },
    { text: { eng: '/', rus: '.' }, wide: 'short', shift: { eng: '?', rus: ',' }, keyCode: 191 },
    { text: { eng: '↑', rus: '↑' }, wide: 'short', shift: { eng: '↑', rus: '↑' }, keyCode: 38 },
    { text: { eng: 'Shift', rus: 'Shift' }, wide: 'wide', shift: { eng: 'Shift', rus: 'Shift' }, keyCode: 1600 },
    { text: { eng: 'Ctrl', rus: 'Ctrl' }, wide: 'bit-wide', shift: { eng: 'Ctrl', rus: 'Ctrl' }, keyCode: 17 },
    { text: { eng: 'Win', rus: 'Win' }, wide: 'bit-wide', shift: { eng: 'Win', rus: 'Win' }, keyCode: 91 },
    { text: { eng: 'Alt', rus: 'Alt' }, wide: 'bit-wide', shift: { eng: 'Alt', rus: 'Alt' }, keyCode: 18 },
    { text: { eng: 'Space', rus: 'Space' }, wide: 'extra-wide', shift: { eng: 'Space', rus: 'Space' }, keyCode: 32 },
    { text: { eng: 'Alt', rus: 'Alt' }, wide: 'bit-wide', shift: { eng: 'Alt', rus: 'Alt' }, keyCode: 1800 },
    { text: { eng: '←', rus: '←' }, wide: 'short', shift: { eng: '←', rus: '←' }, keyCode: 37 },
    { text: { eng: '↓', rus: '↓' }, wide: 'short', shift: { eng: '↓', rus: '↓' }, keyCode: 40 },
    { text: { eng: '→', rus: '→' }, wide: 'short', shift: { eng: '→', rus: '→' }, keyCode: 39 },
    { text: { eng: 'Ctrl', rus: 'Ctrl' }, wide: 'bit-wide', shift: { eng: 'Ctrl', rus: 'Ctrl' }, keyCode: 1700 }
  ]
  
  class Button {
    constructor (text, wide, shift, code) {
      this.node = null
      this.wide = wide
      this.text = text
      this.code = code
      this.shift = shift
    }
  
    init (lang) {
      this.node = document.createElement('button')
      this.node.classList.add('button')
      this.node.innerText = this.text[lang]
      switch (this.wide) {
        case 'short': {
          this.node.classList.add('button')
          break
        }
        case 'backspace': {
            this.node.classList.add('backspace')
            break
        }
        case 'bit-wide': {
            this.node.classList.add('button--bit-wide')
            break
          }
        case 'wide': {
          this.node.classList.add('button--wide')
          break
        }
        case 'extra-wide': {
          this.node.classList.add('button--extra-wide')
          break
        }
        default: break
      }
      return this.lang
    }
  }
  
  class Keyboard {
    constructor () {
      this.keys = []
      this.value = ''
      this.capsLock = false
      this.shift = false
      this.alt = false
      this.lang = 'rus'
    }
  
    init () {
      this.title = document.createElement("h1");
      this.title.classList.add('title');
      this.title.textContent = "RSS Виртуальная клавиатура";
      document.body.appendChild(this.title);

      this.textarea = document.createElement('textarea')
      this.textarea.classList.add('textarea')
  
      const keyboard = document.createElement('div')
      keyboard.classList.add('keyboard')
  
      const buttons = document.createElement('div')
      buttons.classList.add('buttons')
  
      buttons.append(this.createKeys(this.lang))
      keyboard.append(buttons)
      document.body.append(this.textarea, keyboard)

      this.info = document.createElement("p");
      this.info.classList.add('info');
      this.info.textContent = "Клавиатура создана в операционной системе Windows";
      document.body.appendChild(this.info);

      this.language = document.createElement("p");
      this.language.classList.add('language');
      this.language.textContent = "Для переключения языка комбинация: Shift + Alt";
      document.body.appendChild(this.language);
  
      const text = document.querySelector('.textarea')
      text.innerText = this.value
      document.querySelectorAll('.button').forEach(element => {
        switch (element.innerText) {
          case 'Space':
            element.addEventListener('click', () => {
              text.setRangeText(' ', text.selectionStart, text.selectionEnd)
              text.selectionStart++
              this.value = text.value
            })
            break
          case 'Backspace':
            element.addEventListener('click', () => {
              text.setRangeText('', text.selectionStart - 1, text.selectionEnd)
              this.value = text.value
            })
            break
          case 'Enter':
            element.addEventListener('click', () => {
              text.setRangeText('\n', text.selectionStart, text.selectionEnd)
              text.selectionStart++
              this.value = text.value
            })
            break
          case 'Tab':
            element.addEventListener('click', () => {
              text.setRangeText('     ', text.selectionStart, text.selectionEnd)
              text.selectionStart += 5
              this.value = text.value
            })
            break
          case 'Ctrl':
            break
          case 'Shift':
            element.addEventListener('mousedown', () => {
              this.shift = true
              this.toggleShift()
            })
            element.addEventListener('mouseup', () => {
              this.shift = false
              this.toggleShift()
            })
            break
          case 'Win':
          case 'Alt':
            break
          case 'Del':
            element.addEventListener('click', () => {
              text.setRangeText('', text.selectionStart, text.selectionEnd + 1)
              this.value = text.value
            })
            break
          case 'Caps Lock':
            element.addEventListener('click', () => {
              this.toggleCapsLock()
              if (this.capsLock) {
                element.classList.add('pressed')
              } else {
                element.classList.remove('pressed')
              }
            })
            break
          default:
            element.addEventListener('click', () => {
              this.value += this.capsLock ? element.innerText.toUpperCase() : element.innerText
              text.value = this.value
            })
            break
        }
      })
      document.addEventListener('keydown', (event) => {
        // console.log(event.keyCode)
        // console.log(event.location)
        let button
        if (event.code === 'AltRight') {
          button = this.keys.find(i => i.code === 1800)
        } else {
          if (event.code === 'ControlRight') {
            button = this.keys.find(i => i.code === 1700)
          } else {
            if (event.code === 'ShiftRight') {
              button = this.keys.find(i => i.code === 1600)
            } else {
              button = this.keys.find(i => i.code === event.keyCode)
            }
          }
        }
        if (button) {
          event.preventDefault()
          if (event.keyCode === 16) {
            this.shift = true
            this.toggleShift()
            button.node.classList.add('pressed')
          } else {
            if (event.keyCode === 18) {
              this.alt = true
            }
            button.node.click()
            button.node.classList.add('pressed')
          }
        }
  
        if (this.shift && this.alt) {
          this.changeLang()
        }
      })
      document.addEventListener('keyup', (event) => {
        // const button = this.keys.find(i => i.code === event.keyCode)
        let button
        if (event.code === 'AltRight') {
          button = this.keys.find(i => i.code === 1800)
        } else {
          if (event.code === 'ControlRight') {
            button = this.keys.find(i => i.code === 1700)
          } else {
            if (event.code === 'ShiftRight') {
              button = this.keys.find(i => i.code === 1600)
            } else {
              button = this.keys.find(i => i.code === event.keyCode)
            }
          }
        }
        if (button) {
          event.preventDefault()
          button.node.classList.remove('pressed')
        }
        if (event.keyCode === 18) {
          this.alt = false
        }
        if (event.keyCode === 16) {
          this.shift = false
          this.toggleShift()
        }
      })
    }
  
    createKeys () {
        const fragment = document.createDocumentFragment()
        let line = document.createElement('div')
        line.classList.add('line')
    
        for (let i = 0; i < keyLayout.length; i++) {
          const { text, wide, shift, keyCode } = keyLayout[i]
          const currentButton = new Button(text, wide, shift, keyCode)
          currentButton.init(this.lang)
          line.append(currentButton.node)
          fragment.append(line)
          this.keys.push(currentButton)
          if (i === 13 || i === 28 || i === 41 || i === 54) {
            line = document.createElement('div')
          }
        }
      return fragment
    }
  
    toggleCapsLock () {
      this.capsLock = !this.capsLock
      document.querySelectorAll('.button').forEach(element => {
        switch (element.innerText) {
          case 'Tab':
          case 'Ctrl':
          case 'Shift':
          case 'Win':
          case 'Alt':
          case 'Del':
          case 'Enter':
          case 'Space':
          case 'Backspace':
          case 'Caps Lock':
            break
  
          default:
            element.textContent = this.capsLock ? element.textContent.toUpperCase() : element.textContent.toLowerCase()
            break
        }
      })
    }
  
    toggleShift () {
      let i = 0
      document.querySelectorAll('.button').forEach(element => {
        switch (element.innerText) {
          case 'Tab':
          case 'Ctrl':
          case 'Shift':
          case 'Win':
          case 'Alt':
          case 'Del':
          case 'Enter':
          case 'Space':
          case 'Backspace':
          case 'Caps Lock':
            i++
            break
  
          default:
            if (this.capsLock && this.shift) {
              element.textContent = this.keys[i].shift[this.lang].toLowerCase()
              i++
            } else {
              if (this.capsLock && !this.shift) {
                element.textContent = this.keys[i].text[this.lang].toUpperCase()
                i++
              } else {
                if (!this.capsLock && this.shift) {
                  element.textContent = this.keys[i].shift[this.lang]
                  i++
                } else {
                  if (!this.capsLock && !this.shift) {
                    element.textContent = this.keys[i].text[this.lang]
                    i++
                  }
                }
              }
            }
            break
        }
      })
    }
  
    changeLang () {
      if (this.lang === 'eng') {
        this.lang = 'rus'
      } else {
        this.lang = 'eng'
      }
      let i = 0
      document.querySelectorAll('.button').forEach(element => {
        switch (element.innerText) {
          case 'Tab':
          case 'Ctrl':
          case 'Shift':
          case 'Win':
          case 'Alt':
          case 'Del':
          case 'Enter':
          case 'Space':
          case 'Backspace':
          case 'Caps Lock':
            i++
            break
  
          default:
            element.textContent = this.capsLock ? this.keys[i].text[this.lang].toUpperCase() : this.keys[i].text[this.lang]
            i++
            break
        }
      })
    }
  }
  
  window.onload = () => {
    const keyboard = new Keyboard()
    keyboard.init()
  }