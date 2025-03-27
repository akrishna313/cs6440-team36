import { Button, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'src/utils';
import { LockIcon } from '@chakra-ui/icons';
import { login } from 'src/axios';
import Modal from 'src/modules/Modal';
import LoginForm from 'src/modules/Forms/Login';
import { loginLabel, logOutLabel } from 'src/content.json';
import { useUserData } from 'src/contexts/UserData';
import { PAGES } from 'src/constants';

const LoginAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useUserData();
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }: any) => {
      const { first_name, last_name, ...rest } = data || {};
      setUser(rest);
      navigate(PAGES.PATIENT_PORTAL);
    },
  });
  const navigate = useNavigate();

  return (
    <>
      {!user.username ? (
        <>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            leftIcon={<LockIcon />}
            onClick={onOpen}
          >
            {loginLabel}
          </Button>
          <Modal id="login-modal" isOpen={isOpen} onClose={onClose} header={loginLabel}>
            <LoginForm
              onSubmit={(values: void) => {
                mutate(values);
                onClose();
              }}
            />
          </Modal>
        </>
      ) : (
        <>
          <span>
            {user.username}
          </span>
          <Button
            onClick={() => {
              setUser(undefined);
              sessionStorage.setItem('user', '');
              navigate(PAGES.PATIENT_PORTAL);
            }}
          >
            {logOutLabel}
          </Button>
        </>
      )}
    </>
  );
};

export default LoginAction;
