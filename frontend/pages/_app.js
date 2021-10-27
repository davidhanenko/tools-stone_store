import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ScrollProvider } from '../lib/useScroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../components/styles/nprogress.css';
import MainLayout from '../components/layouts/MainLayout';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  const getLayout =
    Component.getLayout || (page => <MainLayout>{page}</MainLayout>);

  return (
    <ApolloProvider client={apollo}>
      <ParallaxProvider>
        <ScrollProvider>
          {getLayout(<Component {...pageProps} />)}
        </ScrollProvider>
      </ParallaxProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
