import * as React from 'react';
import SubtracktAppFooter from '../views/SubtracktAppFooter';
import ProductHero from '../views/SubtracktHero';
import SubtracktAppBar from '../views/SubtracktAppBar';
import SubtracktAppSplashRoot from '../SubtracktAppSplashRoot';

function Index() {
  return (
    <React.Fragment>
      <SubtracktAppBar />
      <ProductHero />
      <SubtracktAppFooter />
    </React.Fragment>
  );
}

export default SubtracktAppSplashRoot(Index);
