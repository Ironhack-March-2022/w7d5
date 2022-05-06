## Lifecycle and useEffect hook

With the useEffect hook you can execute certain actions during different phases of the lifecycle of a React Component 

It's called useEffect because of the term side effect. Data fetching, setting up a subscription, starting a timer, and manually changing the DOM in React components are all examples of common actions (aka side effects :wink:) that you may want to set up in your components. 

The different phases are:

- Mounting Phase
- Update Phase
- Unmounting phase

#### Generally there are two reasons for a Component to rerender: 
- the props change
- the state changes


### Rules of hooks

####  Only call hooks at the top level
Don’t call hooks inside loops, conditions, or nested functions. Instead, always use hooks at the top level of your React function before any early returns. By following this rule, you ensure that hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of hooks between multiple useState and useEffect calls.

#### Only Call hooks from React functions
Don’t call hooks from regular JavaScript functions. Instead, you can:
- Call hooks from React function components.
- Call hooks from custom hooks (we won’t be covering it in this lesson).