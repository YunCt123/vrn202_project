import { TimelineNode } from './TimelineNode'

type TimelineLineProps = {
  labels: string[]
  progress: number
  activeIndex: number
}

export const TimelineLine = ({ labels, progress, activeIndex }: TimelineLineProps) => {
  return (
    <div className="story-timeline">
      <div className="story-timeline__bar">
        <span className="story-timeline__base" />
        <span
          className="story-timeline__fill"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      <div className="story-timeline__nodes">
        {labels.map((label, index) => (
          <TimelineNode
            key={label}
            label={label}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </div>
  )
}
