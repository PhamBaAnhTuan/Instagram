import { useEffect } from 'react';
// Router
import { Slot, useSegments } from 'expo-router';
// Context
import { ContextProvider, useStoreContext } from '../context/Context';
// Redux toolkit
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store/store';
import { StatusBar } from 'expo-status-bar';

const MainLayout = () => {
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;
  const segments = useSegments();

  useEffect(() => {
    if (typeof isAuthenticated == 'undefined') return;

    const inApp = segments[0] == '(app)';
    if (isAuthenticated && !inApp) {
      router.replace('Home')
    } else {
      router.replace('SignIn');
    }
  }, [isAuthenticated])
  return (
    <>
      <Slot />
      <StatusBar backgroundColor={color.disabled}></StatusBar>
    </>
  )
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContextProvider>
          <MainLayout />
        </ContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
