import {
  ChoiceModalWrapper,
  ChoiceModalTitle,
  ChoiceModalBg,
  ChoicesList,
} from '@/components/modules/ChoiceModal/style';
import UserChoiceCard from '@/components/modules/UserChoiceCard';
import { choiseVariants } from '@/constants';
import { useSocketContext } from '@/context/Socket.context';
import { closeModalAction, setUserMadeChoice } from '@/store/game/actions';
import { useAppDispatch } from '@/store/hooks';
import { UserСhoice } from '@/types';
import { Box, Modal } from '@mui/material';
import React from 'react';

interface IProps {
  open: boolean;
}

const ChoiceModal: React.FC<IProps> = ({ open }) => {
  const dispatch = useAppDispatch();
  const socket = useSocketContext();

  const choiceHandler = (choiceType: UserСhoice) => {
    socket?.emit('choose', choiceType);
    dispatch(closeModalAction());
    dispatch(setUserMadeChoice());
  };

  return (
    <Modal open={open}>
      <ChoiceModalWrapper>
        <ChoiceModalBg>
          <ChoiceModalTitle>Оберіть Варіант</ChoiceModalTitle>
          <ChoicesList>
            {choiseVariants.map((choice) => (
              <Box
                onClick={() => {
                  choiceHandler(choice);
                }}
              >
                <UserChoiceCard choice={choice} key={choice} height="80" />
              </Box>
            ))}
          </ChoicesList>
        </ChoiceModalBg>
      </ChoiceModalWrapper>
    </Modal>
  );
};

export default ChoiceModal;
