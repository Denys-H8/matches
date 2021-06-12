import React, { useContext, useState } from 'react';
import { View } from 'react-native';

import { SettingsContext } from '../../../../store/context';
import { styles } from './started.styles';
import {
  GameHeading,
  Rules,
  Score,
  Matches,
  UserControls,
  WinnerMsg,
} from '../../../../components';

type TProps = {
  setIsStarted: (value: boolean) => void;
};

const Started: React.FC<TProps> = ({ setIsStarted }) => {
  const { state } = useContext(SettingsContext);
  const [showRules, setShowRules] = useState(false);
  const [move, setMove] = useState(state.firstMove);
  const [matches, setMatches] = useState(2 * state.paramN + 1);
  const [matchesAI, setMatchesAI] = useState(0);
  const [matchesUser, setMatchesUser] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(state.firstMove === 'AI');
  const [winner, setWinner] = useState('');

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const handleUserSelect = async (value: number) => {
    setDisabledBtn(true);
    setMatches(matches - value);
    setMatchesUser(matchesUser + value);

    if (!checkResult(matches - value, matchesUser + value, matchesAI)) {
      await delay(1000);

      setMove('AI');
    }
  };

  const AIMove = () => {
    let value = 1;

    if (state.firstMove === 'USER' || matches % (state.paramM + 1) === 1) {
      for (let i = state.paramM; i > 0; i -= 2) {
        if (
          (matches - i) % (state.paramM + 1) === 0 ||
          (matches - i) % (state.paramM + 1) === 1
        ) {
          value = i;
          break;
        }
      }
    } else {
      for (let i = state.paramM; i > 0; i -= 2) {
        if (
          (matches - i) % (state.paramM + 1) === 1 &&
          (matchesAI + i) % 2 === 0
        ) {
          value = i;
          break;
        }
      }
    }

    if (matches <= state.paramM) {
      for (let i = state.paramM; i > 0; i--) {
        if (
          (matches - i === 0 || matches - i === 1) &&
          (matchesAI + i) % 2 === 0
        ) {
          value = i;
          break;
        }
      }
    }

    setMatches(matches - value);
    setMatchesAI(matchesAI + value);
    checkResult(matches - value, matchesUser, matchesAI + value);
    setMove('USER');
    setDisabledBtn(false);
  };

  const checkResult = (
    cMatches: number,
    cMatchesUser: number,
    cMatchesAI: number,
  ): boolean => {
    if (cMatches === 0) {
      switch (true) {
        case cMatchesUser % 2 === 0 && cMatchesAI % 2 === 0:
          setWinner('DRAW');
          break;
        case cMatchesUser % 2 === 0:
          setWinner('User');
          break;
        case cMatchesAI % 2 === 0:
          setWinner('AI');
          break;
      }

      return true;
    } else {
      return false;
    }
  };

  if (move === 'AI') {
    AIMove();
  }

  if (winner) {
    return (
      <WinnerMsg
        winner={winner}
        matchesAI={matchesAI}
        matchesUser={matchesUser}
        handleClick={setIsStarted}
      />
    );
  }

  return (
    <View style={styles.container}>
      <GameHeading handleBack={setIsStarted} handleShowRules={setShowRules} />
      {showRules && <Rules handleClose={setShowRules} />}
      <Score type="🤖" value={matchesAI} />
      <Matches quantity={new Array(matches).fill('1')} />
      <UserControls
        handleClick={handleUserSelect}
        disabled={move === 'AI' || disabledBtn}
        matches={matches}
        paramM={state.paramM}
      />
      <Score type="🧑" value={matchesUser} />
    </View>
  );
};

export default Started;
