import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/es/locale/zh_CN'

interface IProps {
  children: React.ReactNode
}
const AntConfigProvider: React.FC<IProps> = props => {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        locale={zhCN}
        theme={{
          components: {
            Menu: {
              itemSelectedBg: 'red'
            }
          }
        }}
      >
        {props.children}
      </ConfigProvider>
    </StyleProvider>
  )
}

export default AntConfigProvider
