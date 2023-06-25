import { DatePicker } from 'antd'
import { Header } from 'ui'
import { KEY } from 'utils'

export default function Index() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('hello', count, KEY)
  }, [count])
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>count--{count}</h1>
      <Link to="/test">to demo</Link>
      <h1 className="text-blue-400">hello</h1>
      <h1 className="text-red-400">hello</h1>
      <h1 className="hover:(text-primary) transition-all">hello hover</h1>
      <h1 className="lg:(text-sm text-red-400)">hello</h1>
      <Header text="this is header" />
      <DatePicker />
    </div>
  )
}
