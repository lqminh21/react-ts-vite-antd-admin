import { useMemo, ReactNode } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { isArray } from 'lodash';

import type { MenuProps } from 'antd';

import menuRoutesList from '@/routes/menus';

interface MenuRouteProps {
    key: string,
    path?: string,
    icon: ReactNode,
    label: string,
    hide?: boolean,
    prefixPath?: string,
    children?: Array<MenuRouteProps> | null
}

const generateMenus = (menus = [] as Array<MenuRouteProps>, prefixPath = '' as string): MenuProps['items'] => {
  return menus.map((item: MenuRouteProps) => {
    if(item.hide) return null;
    else {
      if(item?.children && isArray(item.children)) {
        return {
          ...item, 
          children: generateMenus(item.children, prefixPath + '/' + item.prefixPath)
        };
      }
      else {
        return {
          ...item,
          label: <Link to={`${prefixPath}${item.path}`}>{item.label}</Link>
        }
      }
    }
  });
}


export default function SiderMenu() {
    const menuItems: MenuProps['items'] = useMemo(() => generateMenus(menuRoutesList, ''), []);
    console.log(menuItems)
    return (
        <Menu 
            style={{
              height: 'calc(100vh - 64px)'
            }}
            theme='light'
            items={menuItems}
            mode="inline"
            defaultSelectedKeys={['1']}
        />   
    )
}