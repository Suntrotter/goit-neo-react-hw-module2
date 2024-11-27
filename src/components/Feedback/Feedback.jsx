import css from "./Feedback.module.css";

export default function Feedback({
    good = 0,
    bad = 0,
    neutral = 0,
    totalFeedback = 0,
    positiveFeedback = 0,
})  {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p> 
            <p>Positive: {positiveFeedback}%</p> 
        </div>
    )
};
