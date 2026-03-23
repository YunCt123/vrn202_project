type TimelineNodeProps = {
  label: string
  isActive: boolean
}

export const TimelineNode = ({ label, isActive }: TimelineNodeProps) => {
  return (
    <div className={`story-timeline-node ${isActive ? 'is-active' : ''}`}>
      <span className="story-timeline-node__dot" />
      <span className="story-timeline-node__label">{label}</span>
    </div>
  )
}
