import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Чернокнижники в WoD - это ... ?',
    variants: ['тремеры', 'тореадоры', 'бруха'],
    correct: 0,
  },
  {
    title: 'Символ малкавиан - это ... ',
    variants: ['роза', 'разбитое зеркало', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Ключевая особенность гангреллов:',
    variants: [
      'Нет таких',
      'Прорицание',
      'Метки Зверя',
    ],
    correct: 2,
  },
  {
    title: 'Прозвище "Изверги" носят ... ',
    variants: ['тремеры', 'цимисхи', 'преподы матанализа'],
    correct: 1,
  },
  {
    title: 'Баали занимаются ... ',
    variants: ['демонопоклонничеством', 'плетут макраме', 'управлением'],
    correct: 0,
  },
  {
    title: 'Сборище бруха называется ... ',
    variants: ['тусовка', 'шабаш', 'гвалт'],
    correct: 2,
  },
  {
    title: 'Смеющийся Джек из клана ... ',
    variants: ['тореадор', 'бруха', 'вентру'],
    correct: 1,
  },
];

function Result( {correct} ) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} вопросов из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game( {step, question, onClickVariant} ) {
  const percentage = Math.round((step / questions.length) * 100);
  
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)

    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant}/>) :
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;

