import { UserСhoice } from '@/types';
import { Card, CardActionArea, CardMedia, CardContent, SxProps } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PaperSrc from '@/images/paper.png';
import RockSrc from '@/images/rock.png';
import ScissorsSrc from '@/images/Scissors.png';
import { ChoiceTextTitle } from './style';
import ThinkingSrc from '@/images/thinking.png';

interface IProps {
  choice: UserСhoice | null;
  styles?: SxProps;
  height: string;
}

const UserChoiceCard: React.FC<IProps> = ({ choice, styles, height }) => {
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
    } else {
      setText('Waiting...');
      setImg(ThinkingSrc);
    }
  }, [choice]);

  return (
    <Card sx={styles}>
      <CardActionArea>
        <CardMedia component="img" height={height} image={img} sx={{ objectFit: 'contain' }} />
        <CardContent>
          <ChoiceTextTitle>{text}</ChoiceTextTitle>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserChoiceCard;
