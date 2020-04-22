import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { BreadCrumbItem } from 'types/breadcrumbTypes';

const { Header, Content, Footer, Sider } = Layout;

const LayoutWrapper: NextPage<LayoutProps> = (props) => {
  const activeMenuItem = props.menuLinks.find((menuItem) => menuItem.active);
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[activeMenuItem && activeMenuItem.key]}>
          {props.menuLinks.map(({ label, url, key }) => (
            <Menu.Item key={key}>
              <Link href={url}>
                <a>{label}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider width={200} theme="light">
          <Menu mode="inline">{props.sideMenuLinks.map(renderSubmenu)}</Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {props.breadcrumbItems.map((item) => (
              <Breadcrumb.Item key={item.key}>
                {item.url ? (
                  <Link href={item.url}>
                    <a>{item.label}</a>
                  </Link>
                ) : (
                  item.label
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            {props.children}
          </Content>
          <Footer style={{ marginTop: 32, padding: 16, background: '#fff' }}>{props.footer}</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

const renderSubmenu = (menuItem: SideMenuLink) => {
  if (menuItem.subLinks && menuItem.subLinks.length > 0) {
    return (
      <SubMenu key={menuItem.key} title={menuItem.label}>
        {menuItem.subLinks.map(renderSubmenu)}
      </SubMenu>
    );
  }
  return (
    <Menu.Item key={menuItem.key}>
      <Link href={menuItem.url}>
        <a>{menuItem.label}</a>
      </Link>
    </Menu.Item>
  );
};

export default LayoutWrapper;

interface LayoutProps {
  menuLinks: { key: string; label: string; url: string; active?: boolean }[];
  breadcrumbItems: BreadCrumbItem[];
  footer: React.ReactNode;
  sideMenuLinks: SideMenuLink[];
}

interface SideMenuLink {
  key: string;
  label: React.ReactNode;
  url?: string;
  subLinks?: SideMenuLink[];
}
