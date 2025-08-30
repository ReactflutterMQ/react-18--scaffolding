import React, { useState } from "react";
import './01_antd.scss'
import { Button, Space, Switch, Rate } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons'

export default function App() {

    const [ checked, setChecked ] = useState(false)
    const [ score, setScore ] = useState(3)

    return (
        <div>
            <h2>hello antd</h2>
            <PlayCircleOutlined />
            <Space>
                <Button type="primary">Primary Button</Button>
                <Button type="primary" danger>Primary Button</Button>
                <Button type="primary" danger>Primary Danger Button</Button>
                <Button danger icon={<PlayCircleOutlined />}>Default Danger Button</Button>
            </Space>
            <div>
                <Switch defaultChecked={checked} onChange={setChecked} />{ checked ? 'on' : 'off' }
                <Rate allowHalf value={score} onChange={setScore} />{ score }
            </div>
        </div>
    )
}