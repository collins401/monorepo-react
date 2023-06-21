import { Header, Loading } from 'ui'

export default function Index() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('hello', count)
  }, [count])
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>count--{count}</h1>
      <Link to="/demo">to demo</Link>
      <h1 className="text-red-400">hello</h1>
      <h1 className="text-red-400">hello</h1>
      <h1 className="hover:(text-primary text-40px) transition-all">hello hover</h1>
      <h1 className="lg:(text-sm text-red-400)">hello</h1>
      <Header text="this is header" />
      <Loading />
    </div>
  )
}
