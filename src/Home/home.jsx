import React, { useState } from 'react';
import { extendTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

// Components de Material UI
import { AppBar, Toolbar, Box } from '@mui/material';

//screens
import HuellaIntro from './Huella';
import EnergyScreen from './Features/Energy/Energy';
import WaterScreen from './Features/Water/Water';
import Graphics from './Features/Graphics/Graphics';

//icons
import BarChartIcon from '@mui/icons-material/BarChart';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import DownLoadAppButton from './components/Download/DownloadButton';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Huella',
    title: 'Tu Huella',
    icon: <FingerprintIcon />,
    children: [
      {
        segment: 'Energy',
        title: 'Energía',
        icon: <EnergySavingsLeafIcon />,
      },
      {
        segment: 'Water',
        title: 'Agua',
        icon: <WaterDropIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'Graphics',
    title: 'Gráficas',
    icon: <BarChartIcon />
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const CONTENT_BY_ROUTE = {
  '/Huella': <></>,
  '/Huella/Energy': <></>,
  '/Huella/Water': <></>,
  '/Graphics': <></>,
};

export default function HomeScreen(props) {

  const { window } = props;

  const [resultWater, setResultWater] = useState(null);
  const [resultEnergy, setResultEnergy] = useState(null);

  const router = useDemoRouter('/Huella');
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}> 
              <p>Recuerda que debes completar la sección "Tu Huella" para poder ver las gráficas</p>
            </Box>
          </Toolbar>
        </AppBar>
            <DownLoadAppButton/>

        <PageContainer>
          {router.pathname === '/Huella' && <HuellaIntro />}
          {router.pathname === '/Huella/Energy' && <EnergyScreen result={resultEnergy} setResult={setResultEnergy} />}
          {router.pathname === '/Huella/Water' && <WaterScreen result={resultWater} setResult={setResultWater} />}
          {router.pathname === '/Graphics' && (
            resultEnergy == null && resultWater == null ? 
            <Graphics resultWater={resultWater} resultEnergy={resultEnergy} x={true} /> : 
            <Graphics resultWater={resultWater} resultEnergy={resultEnergy} x={false} />
          )}
          {CONTENT_BY_ROUTE[router.pathname] || (
            <div>
              <p>No content available for this route.</p>
            </div>
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
