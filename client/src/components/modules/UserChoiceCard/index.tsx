import { UserСhoice } from '@/types';
import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PaperSrc from '@/images/paper.png';
import RockSrc from '@/images/rock.png';
import ScissorsSrc from '@/images/Scissors.png';
import { ChoiceTextTitle } from './style';
import ThinkingSrc from '@/images/thinking.png';

interface IProps {
  choice: UserСhoice | null;
}

const UserChoiceCard: React.FC<IProps> = ({ choice }) => {
  const [text, setText] = useState('Waiting...');
  const [img, setImg] = useState(ThinkingSrc);

  useEffect(() => {
    if (choice) {
      switch (choice) {
        case 'paper': {
          setText('Paper');
          setImg(PaperSrc);
          break;
        }
        case 'rock': {
          setText('Rock');
          setImg(RockSrc);
          break;
        }
        case 'scissors': {
          setText('Scissors');
          setImg(ScissorsSrc);
          break;
        }
      }
    }
  }, [choice]);

  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="220" image={img} sx={{ objectFit: 'contain' }} />
        <CardContent>
          <ChoiceTextTitle>{text}</ChoiceTextTitle>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserChoiceCard;
