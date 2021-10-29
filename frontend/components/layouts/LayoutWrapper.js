import MainLayout from './MainLayout';
import MenuLayout from './MenuLayout';

const layouts = {
  default: MainLayout,
  menu: MenuLayout,
};

export default function LayoutWrapper(props) {
  const Layout = layouts[props.children.type.layout] || 'default';

  if (Layout !== null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  return <MainLayout {...props}>{props.children}</MainLayout>;
}
