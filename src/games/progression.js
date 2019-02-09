import startGame from '..';
import { cons, car, cdr } from '../make-pair';
import getRandomNumber from './utils';

const getProgression = (start, step) => {
  const emptyPosition = Math.round(Math.random() * 9 + 1);

  const iter = (num, list, count, answer) => {
    if (count > 10) {
      return cons(list, answer);
    } if (count === emptyPosition) {
      return iter(num + step, `${list} ..`, count + 1, num);
    }
    return iter(num + step, `${list} ${num}`, count + 1, answer);
  };
  return iter(start + step, `${start}`, 1);
};

const startMessage = 'What number is missing in the progression?';

const brainProgression = () => {
  const startProgression = getRandomNumber(100);
  const stepProgression = getRandomNumber(100) + 1;

  const dataProgression = getProgression(startProgression, stepProgression);
  const progression = car(dataProgression);
  const correctAnswer = cdr(dataProgression);
  return cons(progression, `${correctAnswer}`);
};

export default () => startGame(startMessage, brainProgression);
