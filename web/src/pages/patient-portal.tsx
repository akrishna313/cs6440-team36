import map from 'lodash/map';
import { ListItem, ListIcon, List, Heading } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

const LI = ({ title, entries }: any) => (
  <>
    <Heading as="h4" size="md" mt={4}>
      {title}
    </Heading>
    {map(entries, (entry, idx) => (
      <ListItem key={`${title}-${idx}`}>
        <ListIcon as={SettingsIcon} color="green.500" />
        {entry}
      </ListItem>
    ))}
  </>
);

const PageContent = () => (
  <List>
    <LI title={'test 1'} entries={['data 1']} />
    <LI title={'test 2'} entries={['data 2']} />
  </List>
);

export default PageContent;
