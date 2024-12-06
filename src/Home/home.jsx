import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import EnergyScreen from './components/Energy/Energy';


const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Huella',
    title: 'Tu Huella',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'Energy',
        title: 'Energía',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Water',
        title: 'Agua',
        icon: <DescriptionIcon />,
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

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const CONTENT_BY_ROUTE = {

  //Energía
  '/Huella/Energy': (
    <EnergyScreen/>
  ),

  //Agua
  '/Huella/Water': (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Skeleton height={300} />
      </Grid>
    </Grid>
  ),

  //Gráficas
  '/Graphics': (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={50} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={50} />
      </Grid>
    </Grid>
  ),
};

export default function HomeScreen(props) {
  const { window } = props;

  const router = useDemoRouter('/prueba');

  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
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
