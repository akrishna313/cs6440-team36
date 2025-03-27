import {Container} from '@chakra-ui/react';
import NavBar from 'src/modules/NavBar';
import LoginAction from 'src/modules/LoginAction';
import {useUserData} from 'src/contexts/UserData';
import {PAGES} from './constants';
import {patientPortalLabel,} from './content.json';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const { user } = useUserData();
    const {  } = user || {};

    // @ts-ignore
    return <><>
        <NavBar
            logo={patientPortalLabel}
            links={[]}
            action={<LoginAction/>}
            menuItems={[
                {to: PAGES.PATIENT_PORTAL, label: patientPortalLabel},
            ]}></NavBar>
        <Container maxW="container.2xl" p={16}>
            {children}
        </Container>
    </>
    </>;
};

export default Layout;
