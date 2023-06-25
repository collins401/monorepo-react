import { Layout, Menu, theme } from 'antd'
import { Suspense } from 'react'
import { Loading } from 'ui'

const DefaultLayout: React.FC = () => {
  const items = [
    { label: 'aa', key: '11' },
    {
      label: 'bb',
      key: '22',
      children: [
        { label: 'cc', key: '33' },
        { label: 'dd', key: '44', children: [{ label: 'ee', key: '55' }] }
      ]
    }
  ]
  const { token } = theme.useToken()
  // console.log(token)
  return (
    <Layout className="!min-h-[100vh]">
      <Layout.Header className="!px-5 !h-55px">
        <div className="text-white">header</div>
      </Layout.Header>
      <Layout>
        <Layout.Sider className="text-white" width={230}>
          <Menu mode="inline" theme="dark" items={items} />
        </Layout.Sider>
        <Layout.Content>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
