import MessageList from '@/components/MessageList/MessageList'
import { mount } from '@vue/test-utils'
import { Message } from '@/services/socket'

describe('MessageList', () => {
  test('props', () => {
    const wrapper = mount(MessageList, {
      propsData: {
        messageList: [
          { sequence: 1, content: 'a' },
          { sequence: 2, content: 'b' },
        ],
      },
      scopedSlots: {
        default({ message }: { message: Message }) {
          return <span>{message.content}</span>
        },
      },
    })

    expect(wrapper.findAll('li').length).toBe(2)
    expect(wrapper.text()).toBe('ab')
  })
})
