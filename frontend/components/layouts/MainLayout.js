import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Header from './partials/Header';

// const InnerStyles = styled.div`
//   margin: 0 auto;
// `;

export default function MainLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};
