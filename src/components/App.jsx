
import {useState} from "react"
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import FeedbackButton from "./FeedbackButton/FeedbackButton";
import Statistics from "./Statistics/Statistics";

export function App() {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const staticsObject = {good, neutral, bad};

const handleAddFeedback = value => {
  switch (value) {
    case 'good':
      setGood(prevState => prevState + 1)
      return;
      case 'neutral':
        setNeutral(prevState => prevState +1)
        return;
        case 'bad':
          setBad(prevState => prevState +1)
          return;
          default:
            return;
  }
}


const countTotalFeedback = () => {
  return good + neutral + bad;
}

const percentageGoodFeedback = () => {
  return Math.round((good / countTotalFeedback()) * 100);
}


  return (
    <>
    <Section title = "Plese Leave Feeedback">
        <FeedbackButton options={Object.keys(staticsObject)} onAddFeedback={handleAddFeedback}></FeedbackButton>
    </Section>
    {
      countTotalFeedback() > 0 ?
      <Section title = "Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={percentageGoodFeedback()}></Statistics>
    </Section> :
    <Notification message="There is no feedback"/>
    }
    </>
  )
}