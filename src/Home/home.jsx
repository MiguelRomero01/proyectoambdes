import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Prueba from './prueba';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'prueba',
    title: 'prueba',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
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
  '/prueba': (
    <Prueba/>
  ),
  '/orders': (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Skeleton height={200} />
      </Grid>
      <Grid size={4}>
        <Skeleton height={50} />
      </Grid>
      <Grid size={4}>
        <Skeleton height={50} />
      </Grid>
      <Grid size={4}>
        <Skeleton height={50} />
      </Grid>
    </Grid>
  ),
  '/reports/sales': (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={12}>
        <Skeleton height={100} />
      </Grid>
    </Grid>
  ),
  '/reports/traffic': (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Skeleton height={300} />
      </Grid>
    </Grid>
  ),
  '/integrations': (
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
