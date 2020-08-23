# React TypeScript Examples

## Hooks 基础

### useState

大多数情况下使用类型推断：

[View in CodeSandbox](https://codesandbox.io/s/typescript-usestate-example-xyvnj?file=/src/counter.tsx)

```tsx
function Counter() {
    const [count, setCount] = useState(0); // count 将被推断为 number 类型
    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </>
    );
}
```

还有一些情况，比如初始 state 为空，需要先声明类型：

[View in CodeSandbox](https://codesandbox.io/s/typescript-usestate-example-xyvnj?file=/src/list.tsx)

```tsx
interface Item {
    id: number;
    // ...
}

let uniq = 0;

function List() {
    const [list, setList] = useState<Item[]>([]);

    return (
        <>
            <ul>
                {list.map(({ id }) => (
                    <li key={id}>{id}</li>
                ))}
            </ul>
            <button onClick={() => setList((prevList) => [...prevList, { id: uniq++ }])}>Add</button>
        </>
    );
}
```

### useContext

[View in CodeSandbox](https://codesandbox.io/s/typescript-usecontext-example-2q3q9)

```tsx
interface Theme {
    foreground: string;
    background: string;
    // ...
}

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext<Theme>(null);

function App() {
    return (
        <div className="App">
            <ThemeContext.Provider value={themes.dark}>
                <Button />
            </ThemeContext.Provider>
        </div>
    );
}

function Button() {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
    );
}
```

### useReducer

[View in CodeSandbox](https://codesandbox.io/s/typescript-usereducer-example-meue3)

```tsx
interface AppState {
    title: string;
}

type Action = { type: 'SET_TITLE'; payload: string } | { type: 'CLEAR_TITLE' };

const initialState: AppState = {
    title: 'CodeSandbox',
};

function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        case 'CLEAR_TITLE':
            return { ...state, title: '' };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <h1>Hello {state.title}</h1>
            <input
                value={state.title}
                onChange={(e) => {
                    dispatch({ type: 'SET_TITLE', payload: e.target.value });
                }}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'CLEAR_TITLE' });
                }}
            >
                clear
            </button>
        </div>
    );
}
```

#### useRef

[View in CodeSandbox](https://codesandbox.io/s/typescript-useref-example-gwhmj)

```tsx
function App() {
    const inputEl = useRef<HTMLInputElement>(null);

    function onButtonClick(): void {
        inputEl.current.focus();
    }

    return (
        <div className="App">
            <input ref={inputEl} type="text" className="input" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}
```

## 实践
