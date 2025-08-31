import React, { useState } from 'react'
import './02_form.scss'
import { Button, Checkbox, Form, Input, message, notification } from 'antd';

export default function App() {
   const [username, setUsername] = useState('xiaoming') 
   const onFinish = (values) => {
    console.log(values);
    message.success('登录成功')
   }
   const handleValuesChange = (values) => {
    setUsername(values.username)
   }
   const handleClick = () => {
    // message.success('登录成功')
    notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement: 'bottomRight',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
   }
  return (
    <>
        <h2>02_form</h2>
        <Form
            className='login'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            initialValues={{username, password: '123456'}}
            onValuesChange={handleValuesChange}
        >
            <Form.Item label="用户名" name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input placeholder='请输入用户名' />
            </Form.Item>
            
            <Form.Item label="密码" name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input placeholder='请输入密码' />
            </Form.Item>
            <Button onClick={handleClick}>{username}</Button>
            <Form.Item
             wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox />
            </Form.Item>
            <Form.Item
             wrapperCol={{ offset: 8, span: 16 }}
            >
                <Button type='primary' htmlType='submit'>登录</Button>
            </Form.Item>
        </Form>
    </>
  )
}
