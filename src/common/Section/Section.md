### Section

```js

  const ref = useRef(100);
  const getClientHeight = () => {
    if (ref && ref.current) {
      return ref.current.clientHeight;
    }
    return 100;
```

### Removed Menu

```js
{
  !hideMenuProp && <SectionMenu title="History" height={getClientHeight()} />
}

const hideMenuProp = prop('hideMenu')(config)
```
