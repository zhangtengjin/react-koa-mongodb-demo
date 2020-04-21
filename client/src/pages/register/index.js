import React from "react";
import { withRouter } from 'react-router';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Api from  '../../api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Register extends React.Component {
    register = async (value) => {
        let res = await Api.user.register(value);
        if (res.code === 1) {
            message.success("注册成功")
        } else {
            message.error(res.message)
        }
    }
    onFinish = (values) => {
        this.register(values)
    }
    handleRegister= () => {
        console.log(this.props)
        this.props.history.push('/register')
    }
    render () {
        // const [form] = Form.useForm();
        return (
            <Form
                {...layout}
                name="register"
                onFinish={this.onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password prefix={<LockOutlined />} />
                </Form.Item>
                <Form.Item
                    {...tailLayout}
                >
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default withRouter(Register);