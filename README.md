# React TypeScript Examples (用例多数来自 React 官网)

## Hooks 基础

### useState

大多数情况下使用类型推断：

[View in CodeSandbox](https://codesandbox.io/s/typescript-usestate-example-xyvnj?file=/src/counter.tsx)

```tsx
import * as React from 'react';

const { useState } = React;

export function Counter() {
    const [count, setCount] = useState(0);

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
import * as React from 'react';

const { useState } = React;

interface Item {
    id: number;
    // ...
}

let uniq = 0;

export function List() {
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
// App.tsx
import * as React from 'react';
import { Toolbar } from './toolbar';

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

export const ThemeContext = React.createContext<Theme>(null);

export function App() {
    return (
        <div className="App">
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}

// toolbar.tsx
import * as React from 'react';
import { ThemedButton } from './themedButton';

export function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

// themedButton.tsx
import * as React from 'react';
import { ThemeContext } from './App';

const { useContext } = React;

export function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
    );
}
```

### useReducer

[View in CodeSandbox](https://codesandbox.io/s/typescript-usereducer-example-meue3)

```tsx
// reducer.ts
export interface HelloState {
    title: string;
}

export type Action = { type: 'SET_TITLE'; payload: string } | { type: 'CLEAR_TITLE' };

export const initialState: HelloState = {
    title: 'CodeSandbox',
};

export function reducer(state: HelloState, action: Action): HelloState {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        case 'CLEAR_TITLE':
            return { ...state, title: '' };
        default:
            return state;
    }
}

// Hello.tsx
import * as React from 'react';
import { reducer, initialState } from './reducer';

const { useReducer } = React;

export function Hello() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
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
        </>
    );
}
```

#### useRef

[View in CodeSandbox](https://codesandbox.io/s/typescript-useref-example-gwhmj)

```tsx
import * as React from 'react';

const { useRef } = React;

export function TextInput() {
    const inputEl = useRef<HTMLInputElement>(null);

    function onButtonClick(): void {
        inputEl.current.focus();
    }

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
```

## 实践

### 使用 Hook 进行数据获取

[View in CodeSandbox](https://codesandbox.io/s/typescript-useeffect-data-fetch-ns5of)

```tsx
import * as React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

interface Data {
    hits: Item[];
}

interface Item {
    objectID: string;
    title: string;
    url: string;
}

export function SearchResults() {
    const [data, setData] = useState<Data>({ hits: [] });
    const [query, setQuery] = useState('react');

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
            if (!ignore) setData(result.data);
        }

        fetchData();
        return () => {
            ignore = true;
        };
    }, [query]);

    return (
        <>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {data.hits.map((item) => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
```
