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