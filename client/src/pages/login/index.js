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

class Login extends React.Component {
    login = async (values) => {
        let res = await Api.user.login(values);
        if (res.code === 1) {
            message.success('登陆成功！')
        } else {
            message.error(res.message);
        }
    }
    onFinish = (values) => {
        this.login(values)
    }
    handleRegister= () => {
        this.props.history.push('/register')
    }
    render () {
        return (
            <Form
                {...layout}
                name="normal_login"
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
                        登录
                    </Button>
                    <Button onClick={this.handleRegister}>
                        没有账号，去注册
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default withRouter(Login);