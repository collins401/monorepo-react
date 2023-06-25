import { Layout } from 'antd'
import { Suspense } from 'react'
import { Loading } from 'ui'

const DefaultLayout: React.FC = () => {
  return (
    <Layout className="!min-h-[100vh]">
      <Layout.Header className="!px-5 !h-55px">
        <div className="text-white">header</div>
      </Layout.Header>
      <Layout>
        <Layout.Sider className="text-white">sider</Layout.Sider>
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
