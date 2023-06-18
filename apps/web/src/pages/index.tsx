export default function Index() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('hello', count)
  }, [count])
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>count--{count}</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </div>
  )
}
