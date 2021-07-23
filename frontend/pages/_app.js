import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import Page from '../components/Page';
import withData from '../lib/withData';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ParallaxProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
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
