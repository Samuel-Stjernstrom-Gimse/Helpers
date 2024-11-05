class State {
    constructor(initialState) {
        this._state = initialState;
        this.subscribers = [];
    }

    get value() {
        return this._state;
    }

    set value(newValue) {
        if (newValue !== this._state) {
            this._state = newValue;
            this.notify();
        }
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    notify() {
        this.subscribers.forEach((subscriber) => subscriber());
    }
}

class Component {
    constructor(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with ID "${containerId}" not found.`);
        }
        this.container = container;
    }

    update(html) {
        this.container.innerHTML = html;
    }

    render() {
        throw new Error('Render method must be implemented in subclass');
    }
}

class CounterComponent extends Component {
    constructor(state, containerId) {
        super(containerId);
        this.state = state;
        this.state.subscribe(() => this.render());
        this.render();
    }

    render() {
        this.update(`
            <div>
                <p>Counter: ${this.state.value}</p>
                <button id="increment">Increment</button>
                <button id="decrement">Decrement</button>
            </div>
        `);

        document.getElementById('increment')?.addEventListener('click', () => {
            this.state.value += 1;
        });

        document.getElementById('decrement')?.addEventListener('click', () => {
            this.state.value -= 1;
        });
    }
}

class HelloWorldComponent extends Component {
    state = new State('hello');

    constructor(containerId) {
        super(containerId);
        this.state.subscribe(() => this.render());
        this.render();
    }

    render() {
        this.update(`
            <div>
                <h1>${this.state.value}</h1>
            </div>
        `);
    }
}

class ImageComponent extends Component {
    state = new State([2, 2, 2]);

    constructor(containerId) {
        super(containerId);
        this.state.subscribe(() => this.render());
        this.render();
    }

    render() {
        this.update(`
            <div>
                ${this.state.value.map((e) => `<div> number ${e}</div>`).join('')}
                <button id="btn1"> add number </button> 
            </div>
        `);

        document.getElementById('btn1').addEventListener('click', () => {
            this.state.value = [...this.state.value, 1];
        });
    }
}

// Initialize the state
const counterState = new State(100);
const textState = new State('Hello Samuel!');

// Initialize the components
new CounterComponent(counterState, 'app');
new HelloWorldComponent('app2');
new ImageComponent('app3');

