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

let keyElement = document.getElementsByClassName('button');
let text = document.getElementsByClassName('textarea');

const Keyboard = {
    elements: {
        title: "",
        textarea: "",
        keyboard: null,
        buttons: null,
        keys: [],
        info: "",
        language: "",
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },
   
    init() {

        // Create keyboard elements
        this.elements.title = document.createElement("h1");
        this.elements.textarea = document.createElement("textarea");
        this.elements.keyboard = document.createElement("div");
        this.elements.buttons = document.createElement("div");
        this.elements.info = document.createElement("p");
        this.elements.language = document.createElement("p");

        // Setup keyboard elements
        this.elements.title.classList.add('title');
        this.elements.title.textContent = "RSS Виртуальная клавиатура";

        this.elements.textarea.classList.add('textarea');

        this.elements.info.classList.add('info');
        this.elements.info.textContent = "Клавиатура создана в операционной системе Windows";

        this.elements.language.classList.add('language');
        this.elements.language.textContent = "Для переключения языка комбинация: левые ctrl + alt";

        this.elements.keyboard.classList.add("keyboard");
        this.elements.buttons.classList.add("buttons");
        this.elements.buttons.appendChild(this.createKeys());

        this.elements.keys = this.elements.buttons.querySelectorAll(".button");

        // Add to DOM
        document.body.appendChild(this.elements.title);
        document.body.appendChild(this.elements.textarea);
        this.elements.keyboard.appendChild(this.elements.buttons);
        document.body.appendChild(this.elements.keyboard);
        document.body.appendChild(this.elements.info);
        document.body.appendChild(this.elements.language);
    },

    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "del",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "shift",
            "ctrl", "win", "alt", "space", "alt", "←", "↓", "→", "ctrl"
        ];


        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i>${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("button");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("button--wide");    
                    keyElement.innerHTML = createIconHTML("Backspace");
                    keyElement.style.width = "110px";

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.elements.textarea.textContent = this.properties.value;
                        this.triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("button--wide");
                    keyElement.innerHTML = createIconHTML("CapsLock");

                    keyElement.addEventListener("click", () => {
                        this.toggleCapsLock();
                        keyElement.classList.toggle("pressed", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("button--wide");
                    keyElement.innerHTML = createIconHTML("Enter");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this.triggerEvent("oninput");
                    });

                    break;

                case "shift":
                    keyElement.classList.add("button--wide");
                    keyElement.innerHTML = createIconHTML("Shift");
    
                    break;

                case "ctrl":
                    keyElement.classList.add("button--bit-wide");
                    keyElement.innerHTML = createIconHTML("Ctrl");
        
                    break;
                
                case "del":
                    keyElement.classList.add("button--bit-wide");
                    keyElement.innerHTML = createIconHTML("Del");
            
                    break;

                case "tab":
                    keyElement.classList.add("button--bit-wide");
                    keyElement.innerHTML = createIconHTML("Tab");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this.triggerEvent("oninput");
                    });
            
                    break;

                case "win":
                    keyElement.classList.add("button--bit-wide");
                    keyElement.innerHTML = createIconHTML("Win");
                
                    break;
    
                case "alt":
                    keyElement.classList.add("button--bit-wide");
                    keyElement.innerHTML = createIconHTML("Alt");
                
                    break;

                case "space":
                    keyElement.classList.add("button--extra-wide");
                    keyElement.innerHTML = createIconHTML("");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this.triggerEvent("oninput");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this.triggerEvent("oninput");
                        this.elements.textarea.textContent = this.properties.value;
                    });

                break;
            }

            fragment.appendChild(keyElement);
        });
       
        document.addEventListener('keydown' , function(index){
            for (let i = 0; i < keyElement.length; i++) {
                if(keyElement[i].innerHTML.toUpperCase() === index.key.toUpperCase()){
                    keyElement[i].classList.add('pressed')
                    console.log(index.key);
                    text.textContent += index.key;
                };
            }
        })
        
        document.addEventListener('keyup' , function(index){
            for(let j = 0; j < keyElement.length; j++){
                if(keyElement[j].innerHTML.toUpperCase() === index.key.toUpperCase()){
                    keyElement[j].classList.remove('pressed')
                }
            }
        })

        return fragment;
    },

    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    }, 
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});