import {
    DashboardOutlined, 
    AppstoreAddOutlined, 
    TableOutlined, 
    FileExcelOutlined, 
    FormOutlined
} from '@ant-design/icons';


export default [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        key: '2',
        icon: <AppstoreAddOutlined />,
        label: 'UI Components',
        prefixPath: 'custom-components',
        children: [
            {
                key: '21',
                icon: <TableOutlined />,
                label: 'Table',
                prefixPath: 'tables',
                children: [
                    {
                        key: '211',
                        icon: <FileExcelOutlined />,
                        label: 'Excel',
                        path: '/excel',
                    },
                ]
            },
            {
                key: '22',
                icon: <FormOutlined />,
                label: 'Form',
                path: '/forms',
            }
        ],
    },
];