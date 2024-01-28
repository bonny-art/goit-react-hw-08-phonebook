// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components';
import { Section } from 'components/Section/Section.styled';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Section>
        {/* <Suspense fallback={null}> */}
        <Outlet />
        {/* </Suspense> */}
      </Section>
    </div>
  );
};
