import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import { checkWinner, getAIMoveValue, delay } from '../../../../utils';

type TProps = {
  setIsStarted: (value: boolean) => void;
};

const Started: React.FC<TProps> = ({ setIsStarted }) => {
  const { state } = useContext(SettingsContext);
  const [showRules, setShowRules] = useState(false);
  const [moves, setMoves] = useState<number[]>([]);

  const getMove = useCallback((): 'USER' | 'AI' => {
    const length = moves.length;

    if (
      (state.firstMove === 'AI' && length % 2 === 0) ||
      (state.firstMove === 'USER' && length % 2 !== 0)
    ) {
      return 'AI';
    }

    return 'USER';
  }, [state.firstMove, moves.length]);

  const getUsedMatches = useMemo(() => {
    return moves.reduce((a, b) => a + b, 0);
  }, [moves]);

  const getRestMatches = useMemo(() => {
    return state.paramN * 2 + 1 - moves.reduce((a, b) => a + b, 0);
  }, [moves, state.paramN]);

  const checkMatches = useMemo(() => {
    return getUsedMatches >= state.paramN * 2 + 1;
  }, [getUsedMatches, state.paramN]);

  const getAIMatches = useMemo((): number => {
    let sum = 0;

    moves.forEach((el, i) => {
      if (state.firstMove === 'AI' && i % 2 === 0) {
        sum += el;
      }

      if (state.firstMove === 'USER' && i % 2 !== 0) {
        sum += el;
      }
    });

    return sum;
  }, [moves, state.firstMove]);

  const getUserMatches = useMemo((): number => {
    let sum = 0;

    moves.forEach((el, i) => {
      if (state.firstMove === 'USER' && i % 2 === 0) {
        sum += el;
      }

      if (state.firstMove === 'AI' && i % 2 !== 0) {
        sum += el;
      }
    });

    return sum;
  }, [moves, state.firstMove]);

  const checkResult = useCallback((): boolean => {
    const result = checkWinner(getRestMatches, getUserMatches, getAIMatches);

    return result ? true : false;
  }, [getAIMatches, getRestMatches, getUserMatches]);

  useEffect(() => {
    const AIMove = async () => {
      await delay(1000);

      const value = getAIMoveValue(getRestMatches, getAIMatches, state);

      setMoves([...moves, value]);
    };

    if (getMove() === 'AI' && !checkMatches) {
      AIMove();
    }
  }, [
    getMove,
    getAIMatches,
    getRestMatches,
    checkResult,
    checkMatches,
    moves,
    state,
  ]);

  const getDisabledBtn: boolean = useMemo(() => {
    if (
      (state.firstMove === 'USER' && moves.length % 2 === 0) ||
      (state.firstMove === 'AI' && moves.length % 2 !== 0)
    ) {
      return false;
    }

    return true;
  }, [moves, state.firstMove]);

  const handleUserSelect = async (value: number) => {
    setMoves([...moves, value]);
  };

  if (checkResult()) {
    return (
      <WinnerMsg
        winner={checkWinner(getRestMatches, getUserMatches, getAIMatches)}
        matchesAI={getAIMatches}
        matchesUser={getUserMatches}
        handleClick={setIsStarted}
      />
    );
  }

  return (
    <View style={styles.container}>
      <GameHeading handleBack={setIsStarted} handleShowRules={setShowRules} />
      {showRules && <Rules handleClose={setShowRules} />}
      <Score type="🤖" value={getAIMatches} />
      <Matches quantity={getRestMatches} />
      <UserControls
        handleClick={handleUserSelect}
        disabled={getDisabledBtn}
        matches={getRestMatches}
        paramM={state.paramM}
      />
      <Score type="🧑" value={getUserMatches} />
    </View>
  );
};

export default Started;
