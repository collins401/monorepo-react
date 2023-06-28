import { Avatar, Layout, Menu, theme } from 'antd'
import { Suspense } from 'react'
import { Loading } from 'ui'
import { UserOutlined } from '@ant-design/icons'

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
      <Layout.Header className="!px-5 !h-55px !leading-55px">
        <div className="text-white flex-between">
          <div className="">
            <div className="bg-gray-100/60 rounded-md w-190px h-30px leading-30px" />
          </div>
          <div className="space-x-2 ">
            <Avatar className="!bg-gray-500" size={30} icon={<UserOutlined />} />
            <span className="capitalize text-sm">系统管理员</span>
          </div>
        </div>
      </Layout.Header>
      <Layout>
        <Layout.Sider className="text-white !bg-white" width={230}>
          <Menu mode="inline" theme="light" items={items} />
        </Layout.Sider>
        <Layout.Content className="px-4">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
